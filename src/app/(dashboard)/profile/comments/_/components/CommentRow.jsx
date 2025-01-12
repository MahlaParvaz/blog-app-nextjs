import Table from '@/components/ui/Table';
import { toLocalDateShort } from '@/utils/dateFormatter';
import truncateText from '@/utils/trancateText';
import { DeleteComment, UpdateComment } from './Buttons';

const statusStyle = [
  {
    label: 'رد شده',
    className: 'badge--danger',
  },
  {
    label: 'در انتظار تایید',
    className: 'badge--secondary',
  },
  {
    label: 'تایید شده',
    className: 'badge--success',
  },
];

function CommentRow({ index, comment }) {
  const {
    content: { text },
    user,
    status,
    createdAt,
  } = comment;
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{truncateText(text, 30)}</td>
      <td> {user.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateComment comment={comment} />
          <DeleteComment id={comment._id} />
        </div>
      </td>
    </Table.Row>
  );
}
export default CommentRow;
