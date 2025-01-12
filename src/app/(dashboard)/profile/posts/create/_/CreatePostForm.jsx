'use client';
import { Controller, set, useForm } from 'react-hook-form';
import RHFTextField from '@/components/ui/RHFTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/ui/Button';
import RHFSelect from '@/components/ui/RHFSelect';
import * as yup from 'yup';
import useCategories from '@/hook/useCategory';
import TextField from '@/components/ui/TextField';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ButtonIcon from '@/components/ui/ButtonIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useCreatePost from './useCreatePost';
import useEditPost from './useEditPost';
import { useRouter } from 'next/navigation';
import { imageUrlToFile } from '@/utils/fileFormatter';
import Loading from '@/components/ui/Loading';

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, 'حداقل ۵ کاراکتر را وارد کنید')
      .required('عنوان ضروری است'),
    briefText: yup
      .string()
      .min(5, 'حداقل ۱۰ کاراکتر را وارد کنید')
      .required('توضیحات ضروری است'),
    text: yup
      .string()
      .min(5, 'حداقل ۱۰ کاراکتر را وارد کنید')
      .required('توضیحات ضروری است'),
    slug: yup.string().required('اسلاگ ضروری است'),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required('زمان مطالعه ضروری است')
      .typeError('یک عدد را وارد کنید'),
    category: yup.string().required('دسته بندی ضروری است'),
  })
  .required();

function CreatePostForm({ postToEdit = {} }) {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    briefText,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevPostCoverImageUrl,
  } = postToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      briefText,
      slug,
      readingTime,
      category: category._id,
      coverImage,
    };
  }

  const { categories } = useCategories();
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const [coverImageUrl, setCoverImageUrl] = useState(
    prevPostCoverImageUrl || null
  );
  const router = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevPostCoverImageUrl) {
      async function fetchMyAPI() {
        const file = await imageUrlToFile(prevPostCoverImageUrl);
        setValue('coverImage', file);
      }
      fetchMyAPI();
    }
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push('/profile/posts');
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push('/profile/posts');
          reset();
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="متن کوتاه"
        name="briefText"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="متن"
        name="text"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="اسلاگ"
        name="slug"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        required
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <Controller
        control={control}
        name="coverImage"
        rules={{ required: 'عکس کاور پست الزامی است' }}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <TextField
              {...field}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
              }}
              label="کاور پست"
              type="file"
              id="coverImage"
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            fill
            alt="cover-iamge"
            src={coverImageUrl}
          />
          <ButtonIcon
            type="button"
            onClick={() => {
              setCoverImageUrl(null);
              setValue('coverImage', null);
            }}
            variant="red"
            className="w-6 h-6 absolute !left-0"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}

      <div>
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}
export default CreatePostForm;
