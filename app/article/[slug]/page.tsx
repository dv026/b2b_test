import { ArticleProps } from '@/features/article/Article'
import { articleApi } from '@/server/api/article-api'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata | undefined> {
  const articleId = params.slug
  const article = await articleApi.get(articleId)

  if (!article) {
    return;
  }

  return {
    title: article.title,
    description: article.content,
    openGraph: {
      title: article.title,
      description: article.content,
      type: "article",
      locale: "en_US",
      url: `http://localhost:8080/article/${params.slug}`,
      siteName: "b2b_test",
    },
  };
}

export { Article as default }  from '@/features/article/Article'