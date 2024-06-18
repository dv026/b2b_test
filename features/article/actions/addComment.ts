'use server'

import { articleApi } from "@/server/api/article-api"
import { revalidatePath } from "next/cache"

export const addCommnent = async (formData: FormData, articleId: string, comments: string[]) => {
  const comment = formData.get('comment')

  if (comment) {
    await articleApi.updateComments(articleId, [...comments, comment.toString()])

    revalidatePath('/')
  }
}