'use client'

import config from '@/config/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import React from 'react'

const page = () => {
    return (
        <>
            <NextStudio config={config} />
        </>
    )
}

export default page