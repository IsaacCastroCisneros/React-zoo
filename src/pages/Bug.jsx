import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bug() {
  const{id}=useParams()

  let bugArr = [];
  for(let i=0;i<id;i++)
  {
     bugArr.push('🐞')
  }

  return (
     <>
      {
        bugArr.map(bug=>
          {
            return(
              <span>{bug}</span>
            )
          })
      }
     </>
  )
}
