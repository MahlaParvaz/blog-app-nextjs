'use client';
import Button from '@/components/ui/Button';
import Loading from '@/components/ui/Loading';
import RHFTextField from '@/components/ui/RHFTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '@/context/AuthContext';


const schema = yup
  .object({
    email: yup.string().email().required('ایمیل را وارد کنید'),
    password: yup.string().required('رمز عبور را وارد کنید'),
  })
  .required();

function Singin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });
  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        <div className="">
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <Button
              type="submit"
              className="py-3 px-4 btn btn--primary rounded-xl w-full"
            >
              ورود
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Singin;
