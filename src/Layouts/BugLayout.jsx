import React from 'react'
import { Link,Outlet } from 'react-router-dom';

export default function BugLayout() 
{
    return (
        <>
          <ul>
            <li>
              <Link
                className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
                to="/bugList/1"
              >
                🐞
              </Link>
            </li>
            <li>
              <Link
                className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
                to="/bugList/2"
              >
                🐞
              </Link>
            </li>
            <li>
              <Link
                className="text-[2rem] hover:text-[2.5rem] transition-all duration-200"
                to="/bugList/3"
              >
                🐞
              </Link>
            </li>
          </ul>
          <Outlet />
        </>
      );
}
