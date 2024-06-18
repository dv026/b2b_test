import { BackButton } from '@/components/back-button/BackButton'
import { articleApi } from '@/server/api/article-api'
import Image from 'next/image'
import { CommentList } from './components/comment-list/CommentList'
import { getUrlBase64 } from '@/utils/getUrlBase64'
import { Form } from './components/form/Form'


export const Article = async ({ params }: { params: { slug: string }}) => {
  const articleId = params.slug
  const article = await articleApi.get(articleId)
  const base64Url = await getUrlBase64(article.img)

  if (!articleId) {
    return 'does not exist'
  }

  return (
    <div className='container flex flex-col align-middle justify-center gap-2'>
      <BackButton />
      <div className="relative w-[600px] h-[300px] mx-auto">
      <Image
        className='rounded-lg object-cover'
        placeholder='blur'
        blurDataURL={base64Url}
        alt="article_logo"
        fill
        src={article.img}
    />
    </div>
      <div className="text-4xl">{article.title}</div>
      <div className="text-xl">{article.content}</div>
      <Form articleId={article.id} comments={article.comments}/>
      <CommentList comments={article.comments} />
    </div>
  )
}