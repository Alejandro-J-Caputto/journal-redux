import React, { ReactChild, ReactChildren } from 'react'
import { Navbar } from './Navbar'

export const Layout = ({children}:{children: ReactChildren | ReactChild}) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}
