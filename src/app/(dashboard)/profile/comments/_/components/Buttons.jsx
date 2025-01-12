"use client";
import ButtonIcon from "@/components/ui/ButtonIcon";
import ConfirmDelete from "@/components/ui/ConfirmDelete";
import Modal from "@/components/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import deleteComment from "../actions/deleteComment";
import EditCommentForm from "./UpdateCommentForm";

export function DeleteComment({ id: commentId }) {
  const [state, formAction] = useFormState(deleteComment, {
    error: "",
    message: "",
  });
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsDeleteOpen(false);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف نظر`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          title={`حذف نظر`}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={async (formData) => {
            await formAction({ formData, commentId });
          }}
        />
      </Modal>
    </>
  );
}

export function UpdateComment({ comment }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onClose = () => setIsEditOpen(false);
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon className="text-error" />
      </ButtonIcon>

      <Modal title={`ویرایش نظر`} open={isEditOpen} onClose={onClose}>
        <EditCommentForm onClose={onClose} comment={comment} />
      </Modal>
    </>
  );
}
