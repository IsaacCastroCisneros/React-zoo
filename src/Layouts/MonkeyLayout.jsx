import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function MonkeyLayout() {
  return (
    <>
      <ul>
        <li>
          <Link
            className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
            to="/monkeyList/1"
          >
            🐒
          </Link>
        </li>
        <li>
          <Link
            className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
            to="/monkeyList/2"
          >
            🐒
          </Link>
        </li>
        <li>
          <Link
            className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
            to="/monkeyList/3"
          >
            🐒
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
