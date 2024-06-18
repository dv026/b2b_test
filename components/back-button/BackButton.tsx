'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export const BackButton = () => {
  const router = useRouter()
  // there is a problem with "back" action
  // description
  // we got data on server and show Home page
  // then get some extra data using interface and put them in state
  // then go to another page and get back
  // we only see data we got on server but do not see updated state

  // TODO: update next.js fetch cached with client side data

  // there're two issues about this problem on github
  // https://github.com/vercel/next.js/issues/59958
  // https://github.com/vercel/next.js/issues/42546

  // console shows warnings
  // одним словом костыль в условиях тестового задания
  useState(() => router.refresh())

  return (
    <span onClick={() => router.back()} className='hover:underline cursor-pointer'>Back</span>
  )
}