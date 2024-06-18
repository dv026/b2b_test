'use client'

import Image from "next/image"
import { FC } from "react"

interface ArticleImageProps {
  url: string
  blurUrl: string
}

export const ArticleImage: FC<ArticleImageProps> = ({ url, blurUrl}) => {
  return (
    <div>
      <Image
        className='rounded-lg object-cover'
        placeholder='blur'
        blurDataURL={blurUrl}
        alt="article_logo"
        fill
        src={url}
      />
    </div>
  )
}