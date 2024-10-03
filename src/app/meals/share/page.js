'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Share = () => {
    const path = usePathname()
    console.log(path)
    console.log('Gaurav rawal')
  return (
    <div>
      share
    </div>
  )
}

export default Share
