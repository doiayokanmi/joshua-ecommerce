import PageLayout from '@/app/components/layout/PageLayout'
import React from 'react'

const page = ({params}: {params: {category: string}}) => {
  return (
    <>
    <PageLayout>
        <section className="lg:px-12 p-4">
        <div className="flex capitalize italic my-2 space-x-2">
            <span>Home</span>
            <span>/</span>
            <span>Product</span>
            <span>/</span>
            <span className="truncate">{params.category}</span>
          </div>
        {params.category}
        </section>
    </PageLayout>
    </>
  )
}

export default page