import { articleApi } from "@/server/api/article-api";
import { redirect } from "next/navigation";
import { ArticleList } from "./components/article-list/ArticleList";

export const Home = async (
  { searchParams }: {
    searchParams: {
      page: string,
    }
}) => {
  const currentPage = searchParams?.page
  const currentPageNumber = parseInt(currentPage)

  // I think the idea of such type of scrolling is
  // when a user updates the page with query param "page" equals to 10
  // he is meant to get all articles from 'page = 1' + 'page = 2' + ... + 'page = 10'
  // that's why I added another parameter to fetch function to maintain this feature
  const { data: articles, items: total } = await articleApi.getList({ page: currentPageNumber || 1, allEntities: true })

  const isLimitReached = articles.length === total

  if (currentPage) {
    const currentPageNumber = parseInt(currentPage)

    // I am not able to handle overpaged value
    // because JSON SERVER always returns the last page
    // even if the 'page' param is bigger that the number of the last page
    // ...?page=1000000 opens the page containing all articles from DB

    // it's not a good solution and should be changed
    // but i believe it's out of the scope of the current task

    if (!currentPageNumber) {
      redirect('/not-found')
    }
  }

  return (
    <div className="flex align-middle justify-center">
      <ArticleList currentPage={currentPage} total={total} isLimitReached={isLimitReached} articles={articles} />
    </div>
  )
}
