import { IArticle } from "@/types/article"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ArticleProps {
  article: IArticle
}

export const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <Link className="container rounded-lg shadow-md w-1/2 hover:shadow-lg p-4 flex space-x-4" href={`/article/${article.id}`}>
      <div className="relative w-[150px] h-[100px] shrink-0">
        <Image
          className="rounded-lg"
          fill
          src={article.img}
          alt="article_logo"
        />
      </div>
      <div className="min-w-0">
        <div className="text-3xl font-bold truncate">
          {article.title}
        </div>
        <div className="line-clamp-4">
          {article.content}
        </div>
      </div>
    </Link>
  )
}