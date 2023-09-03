'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
const Provider = ({children,session}) => {
  return (
    <div>
    <SessionProvider>
        {children}
    </SessionProvider>
    </div>
  )
}

export default Provider
