import { IArticle } from "@/types/article"
import { imageKitLoader } from "@/utils/imageKitLoader"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ArticleProps {
  article: IArticle
}

export const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <Link className="container rounded-lg shadow-md w-3/5 hover:shadow-lg p-4 flex space-x-4" href={`/article/${article.id}`}>
      <div className="relative h-[100px] shrink-0  w-[110px] md:w-[200px] lg:w-[300px] lg:h-[150px]">
        <Image
          className="rounded-lg"
          fill
          loader={imageKitLoader}
          src={article.imgName}
          sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 300px"
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