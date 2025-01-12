import { getAllPostsApi } from "@/services/postService";
import { CreatePost } from "./_/components/Buttons";
import PostsTable from "./_/components/PostsTable";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/Spinner";
import Search from "@/components/ui/Search";
import queryString from "query-string";
import Pagination from "@/components/ui/Pagination";

async function PostPage({ searchParams }) {
  const query = queryString.stringify(searchParams);

  const { totalPages } = await getAllPostsApi(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-secondary-700 font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>

      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
export default PostPage;
