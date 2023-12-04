import Image from 'next/image'
import React from 'react'

const CenterAds = () => {
  return (
    <>
    <section className="flex lg:px-12 px-4 my-2">
        <div className="pe-2 basis-1/2">
            <Image src={'/image/banner_center1.jpg'} width={1200} height={250} alt='' />
        </div>
        <div className="ps-2 basis-1/2">
            <Image src={'/image/banner_center2.jpg'} width={1200} height={250} alt='' />
        </div>
    </section>
    </>
  )
}

export default CenterAds