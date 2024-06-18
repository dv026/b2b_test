'use client'

import { addCommnent } from "@/features/article/actions/addComment"
import { FC, useRef } from "react"

interface FormProps {
  articleId: string
  comments: string[]
}

export const Form: FC<FormProps> = ({ articleId, comments }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    await addCommnent(formData, articleId, comments)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} className="flex flex-col gap-4" action={handleSubmit}>
      <textarea
        placeholder="Your comment"
        className="p-1 focus:outline-none block border border-black border-1 border-solid h-[100px] w-full bg-gray-50"
        name="comment"
        id="name"
      />
      <button
        className="w-[150px]
        rounded-lg
        bg-slate-400"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}