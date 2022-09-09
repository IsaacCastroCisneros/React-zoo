import React from 'react'
import {Route,Routes,NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='block bg-primary py-[1.5rem]'>
      <nav className='w-[100rem] max-w-[100%] px-[2rem] my-0 m-auto flex items-center'>
        <NavLink className="capitalize text-[2rem] font-bold text-white" to="/">react zoo</NavLink>
        <ul className='flex ml-auto gap-[5rem] h-[4rem] items-center'>
          <li>
            <NavLink className="text-[2rem]" to="/monkeyList">
              <span>🐵</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[2rem]" to="/birdList">
              <span>🐦</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[2rem]" to="/bugList">
              <span >🐞</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
