import React from 'react'
import { EntriesItem } from './EntriesItem'

export const EntriesList = () => {
  const entries = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  return (
    <ul className="sidebar-list">
      {entries.map(entrie => <EntriesItem key={entrie}/>)}
    </ul>
  )
}
