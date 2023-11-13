"use client"
import React from 'react'

import {useRouter} from 'next/navigation'
export default function Notfound() {
    const router = useRouter()
    setTimeout(()=>{
      router.push('/')
    }, 3000)
  return (
    <div>
        <h1>có biến rồi đại vương ơi</h1>
        <button onClick={()=>{
       router.push('/')
        }}>bấm đê ae </button>
    </div>
  )
}
