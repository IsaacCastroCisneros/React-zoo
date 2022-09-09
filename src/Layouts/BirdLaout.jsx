import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function BirdLaout() {
  return (
    <>
      <ul>
        <li>
          <Link
            className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
            to="/birdList/1"
          >
            🐔
          </Link>
        </li>
        <li>
          <Link
            className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
            to="/birdList/2"
          >
            🐔
          </Link>
        </li>
        <li>
          <Link
            className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
            to="/birdList/3"
          >
            🐔
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
