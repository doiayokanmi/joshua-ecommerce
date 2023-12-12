import Link from 'next/link'
import React from 'react'

const CatHead = () => {
  return (
    <>
        <div className="flex uppercase justify-between p-3 bg-red-600 text-white font-bold">
            <h1 className="">
                top selling
            </h1>

            <Link href='/'>see more</Link>
        </div>
    </>
  )
}

export default CatHead