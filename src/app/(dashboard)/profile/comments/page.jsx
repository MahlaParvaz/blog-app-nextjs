import { getAllPostsApi } from "@/services/postService";
import CommentsTable from "./_/components/CommentsTable";
import { Suspense } from "react";
import Fallback from "@/components/ui/Fallback";

async function CommentPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          لیست نظرات
        </h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
}
export default CommentPage;
