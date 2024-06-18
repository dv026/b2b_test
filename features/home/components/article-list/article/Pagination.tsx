'use client'

import { FC, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import classNames from "classnames"
import { shallowUrlUpdate } from "@/utils/shallowUrlUpdate"

interface PaginationProps {
  disabled: boolean
  currentPage: string
  onChange: (newPageNumber: number) => Promise<void>
}

export const Pagination: FC<PaginationProps> = ({ onChange, currentPage: currentPageProp, disabled = false }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname();

  const search = new URLSearchParams(Array.from(searchParams.entries()))

  const [currentPage, setCurrentPage] = useState(currentPageProp)

  const handleChangePage = () => {
    let newPageNumber = 1
    // check that 'page' param exists
    if (currentPage) {
      const currentPageNumber = parseInt(currentPage)
      
      // check that 'page' param is a number
      if (currentPageNumber) {
        newPageNumber = currentPageNumber + 1
      }
    } else {
      // in case there's no 'page' param it means the event happened on the first page
      // we need to set page to 2
      newPageNumber = 2
    }

    onChange(newPageNumber).then(() => {
      search.set('page', newPageNumber?.toString())
      setCurrentPage(newPageNumber?.toString())
      shallowUrlUpdate(`${pathname}?${search}`)
    })
  }

  return (
    <button
      onClick={handleChangePage}
      className={classNames(disabled && 'pointer-events-none text-gray-500', 'hover:underline')}
    >
      Load More
    </button>
  )
}