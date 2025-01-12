'use client';

import { toPersianDigits } from '@/utils/numberFormatter';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

import ButtonIcon from '../ui/ButtonIcon';

const BlogInteraction = ({ post }) => {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
    </div>
  );
};

export default BlogInteraction;
