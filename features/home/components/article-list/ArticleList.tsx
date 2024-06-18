'use client'

import { IArticle } from "@/types/article"
import { FC, useEffect, useState } from "react"
import { Article } from "./article/Article"
import { Pagination } from "./article/Pagination"
import { articleApi } from "@/server/api/article-api"

interface ArticleListProps {
  articles: IArticle[]
  total: number
  currentPage: string
  isLimitReached: boolean
  searchParams?: {
    page?: number
  }
}

export const ArticleList: FC<ArticleListProps> = ({ articles, isLimitReached, total, currentPage }) => {
  const [data, setData] = useState(articles)
  const [isLimitReachedClient, setLimitReachedClient] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const isPaginationDisabled = isLimitReached || isLoading || isLimitReachedClient
  
  useEffect(() => {
    if (data.length >= total) {
      setLimitReachedClient(true)
    }
  }, [data, total])

  const handleUpdateData = (newPageNumber: number) => {
    setLoading(true)
    return articleApi.getList({ page: newPageNumber })
            .then((response) => {
              setData((p) => [...p, ...response.data])
            }).finally(() => {
              setLoading(false)
            })
  }

  return (
    <div className="container flex flex-col items-center space-y-3">
      {data?.map((article, index) => <Article key={index} article={article} /> )}
      <Pagination currentPage={currentPage} onChange={handleUpdateData} disabled={isPaginationDisabled}/>
    </div>
  )
}