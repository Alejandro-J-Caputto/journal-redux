import React, { ReactChild} from 'react'


export const Layout = ({children}:{children: ReactChild}) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
