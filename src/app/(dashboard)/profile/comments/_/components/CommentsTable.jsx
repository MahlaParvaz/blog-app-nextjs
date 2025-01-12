import Table from '@/components/ui/Table';
import Empty from '@/components/ui/Empty';
import { getAllCommentsApi } from '@/services/commentService';
import CommentRow from './CommentRow';
import { Fragment } from 'react';

async function CommentsTable() {
  const { comments, commentsCount } = await getAllCommentsApi();
  if (!comments.length) return <Empty resourceName="نظری" />;

  let iterator = 0;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map((comment) => {
          iterator++;
          return (
            <Fragment key={comment._id}>
              <CommentRow
                key={comment._id}
                comment={comment}
                index={iterator}
              />
              {comment.answers.map((commentAnswer) => {
                iterator++;
                return (
                  <CommentRow
                    key={commentAnswer._id}
                    comment={commentAnswer}
                    index={iterator}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </Table.Body>
    </Table>
  );
}
export default CommentsTable;
