'use client'

import PageLayout from '@/app/components/layout/PageLayout'
import { getActualCategory } from '@/util/sanity'
import React, { useEffect } from 'react'

const Page = ({params}: {params: {category: string}}) => {
  const [actualCate, setActualCate] = React.useState<any>([])
  useEffect(() => {
    const getActual = async () => {
      const actual = await getActualCategory(params.category)
      setActualCate(actual[0])
    }
    getActual()
  })
  return (
    <>
    <PageLayout>
        <section className="lg:px-12 p-4">
        <div className="flex capitalize italic my-2 space-x-2">
            <span>Home</span>
            <span>/</span>
            <span>Category</span>
            <span>/</span>
            <span className="truncate">{actualCate.name}</span>
          </div>
        {actualCate.description}
        </section>
    </PageLayout>
    </>
  )
}

export default Page