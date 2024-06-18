import { IArticle } from "@/types/article"

const API_URL = 'http://localhost:3000/articles'
const ELEMENTS_PER_PAGE = 2

interface IGetListResponse {
  data: IArticle[]
  prev: number | null
  next: number | null
  items: number
  pages: number
}

export const articleApi = {
  // allEntities - get all articles from the 1st page till the current one
  getList: ({ page, allEntities = false }: { page: number, allEntities?: boolean }): Promise<IGetListResponse> => {
    const entitiesPerPage = allEntities ? page * ELEMENTS_PER_PAGE : ELEMENTS_PER_PAGE
    const pageNumber = allEntities ? 1 : page
    return fetch(`${API_URL}?_page=${pageNumber}&_per_page=${entitiesPerPage}`, {
      cache: 'no-store',
      next: {
        revalidate: 10
      }
    })
            .then((response) => response.json())
  },

  get: (id: string): Promise<IArticle> => fetch(`${API_URL}/${id}`).then((response) => response.json()),

  updateComments: (id: string, comments: string[]): Promise<any> => fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      comments,
    })
  })
}