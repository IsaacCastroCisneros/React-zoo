import React from 'react'
import {useParams} from 'react-router-dom'

export default function Monkey() 
{
  const{id}=useParams();


  let monkeyArr =[]
  for(let i=0;i<id;i++)
  {
    monkeyArr.push('🐒')
  }

  return (
    <>
    {
      monkeyArr.map((monkey,pos)=>
        {
          return(
            <span key={pos}>{monkey}</span>
          )
        })
    }
    </> 
  )
}
