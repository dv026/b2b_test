import { FC } from "react"

interface CommentProps {
  comment: string
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  return (
      <div className="container rounded-lg shadow-md p-2">{comment}</div>
  )
}