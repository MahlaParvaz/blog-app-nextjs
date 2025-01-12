"use server"

import { getAllUsersApi } from "@/services/authService";
import { getAllCommentsApi } from "@/services/commentService";
import { getAllPostsApi } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllPostsApi(),
      getAllCommentsApi(options),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error) {
    console.error("خطا", error.response.data.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}

export async function fetchLatestPosts() {
  
  await new Promise((resolve) => setTimeout(resolve, 3000));


  try {
    const { posts } = await getAllPostsApi("sort=latest&limit=5");
    return posts;
  } catch (error) {
    console.error("خطا", error);
    throw new Error(error?.resonse?.data?.message);
  }
}
