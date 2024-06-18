import { articleApi } from '@/server/api/article-api'
import Image from 'next/image'
import { CommentList } from './components/comment-list/CommentList'
import { getUrlBase64 } from '@/utils/getUrlBase64'
import { Form } from './components/form/Form'
import { imageKitLoader } from '@/utils/imageKitLoader'

export interface ArticleProps {
  params: {
    slug: string
  }
}

export const Article = async ({ params }: ArticleProps) => {
  const articleId = params.slug
  const article = await articleApi.get(articleId)
  const base64Url = await getUrlBase64(article.img)

  if (!articleId) {
    return 'does not exist'
  }

  return (
    <div className='container flex flex-col align-middle justify-center gap-2'>
      <div className="relative mx-auto h-[300px] w-[200px] md:w-[300px] lg:w-[700px]">
      <Image
        className='rounded-lg object-cover'
        placeholder='blur'
        blurDataURL={base64Url}
        alt="article_logo"
        fill
        sizes="(max-width: 768px) 300px, (max-width: 1024px) 700px, 900px"
        // to change handling image sizes to Next.js
        // remove loader and use "img" field
        // src={article.img}
        loader={imageKitLoader}
        src={article.imgName}
    />
    </div>
      <div className="text-4xl">{article.title}</div>
      <div className="text-xl">{article.content}</div>
      <Form articleId={article.id} comments={article.comments}/>
      <CommentList comments={article.comments} />
    </div>
  )
}