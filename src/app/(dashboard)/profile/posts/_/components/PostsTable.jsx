import Table from "@/components/ui/Table";
import Empty from "@/components/ui/Empty";
import { getAllPostsApi } from "@/services/postService";
import PostRow from "./PostRow";

async function PostsTable({ query }) {
  const { posts } = await getAllPostsApi(query);

  if (!posts.length) return <Empty resourceName="پستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
      
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default PostsTable;
