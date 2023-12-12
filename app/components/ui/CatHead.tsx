import Link from 'next/link'
import React from 'react'

const CatHead = ({title, extraStyle}: {title: string, extraStyle: string}) => {
  return (
    <>
        <div className={`flex uppercase justify-between text-xs lg:text-sm p-3 ${extraStyle} text-white font-bold`}>
            <h1 className="">
                {title}
            </h1>

            <Link className='underline' href='/'>see more</Link>
        </div>
    </>
  )
}

export default CatHead