"use client";

import Loading from "@/components/ui/Loading";
import SubmitButton from "@/components/ui/SubmissionButton";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useFormState(createComment, initialState);
  const ref = useRef(null);
  let isLoading = false;

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            ref={ref}
            className="space-y-7"
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
              ref?.current?.reset();
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              {isLoading ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <SubmitButton type="submit" className="w-full">
                  {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                </SubmitButton>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
