
import Table from '@/components/ui/Table';
import { toLocalDateShort } from '@/utils/dateFormatter';
import truncateText from '@/utils/trancateText';
import { DeletePost, UpdatePost } from './Buttons';

const statusStyle = {
  free: {
    label: 'رایگان',
    className: 'badge--success',
  },
  premium: {
    label: 'پولی',
    className: 'badge--secondary',
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td> {category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>

      <td>
        <div className="flex items-center gap-x-3">
          <UpdatePost id={post._id} />
          <DeletePost id={post._id} postTitle={post.title} />
        </div>
      </td>
    </Table.Row>
  );
}
export default PostRow;
