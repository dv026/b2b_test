import { FC } from "react";
import { Comment } from "./comment/Comment";

interface CommentListProps {
  comments: string[]
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="flex flex-col space-y-2 max-h-[250px] overflow-auto p-2">
      <div className="text-xl font-bold">Comments</div>
      {comments?.map((comment, index) => <Comment key={index} comment={comment} />)}
    </div>
  )
}