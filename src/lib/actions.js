"use server";
import { createCommentApi } from "../services/commentService";
import { cookies } from "next/headers";
import setCookiesOnReq from "../utils/setCookieOnReq";
import { revalidatePath } from "next/cache";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookieStore = cookies();

  const rawFormData = {
    text: formData.get("text"),
    postId,
    parentId,
  };
  try {
    const options = setCookiesOnReq(cookieStore);
    const {
      data: { message },
    } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
