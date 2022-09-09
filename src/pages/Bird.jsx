import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bird() {
  const{id}=useParams();

  let birdArr = []
  for(let i=0;i<id;i++)
  {
     birdArr.push('🐔')
  }

  return (
     <>
      {
        birdArr.map((bird,pos)=>
          {
            return(
               <span key={pos}>{bird}</span>
            )
          })
      }
     </>
  )
}
