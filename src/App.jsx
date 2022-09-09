import { useState } from 'react'
import {Link,Route,Routes,NavLink} from 'react-router-dom'

import Navbar from './components/Navbar'
import MonkeyList from './pages/MonkeyList'
import Monkey from './pages/Monkey'
import MonkeyLayout from './Layouts/MonkeyLayout'
import BirdList from './pages/BirdList'
import BirdLaout from './Layouts/BirdLaout'
import Bird from './pages/Bird'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/monkeyList" element={<MonkeyLayout />}>
          <Route index element={<MonkeyList />} />
          <Route path=":id" element={<Monkey />} />
        </Route>
        <Route path='/birdList' element={<BirdLaout/>} >
          <Route index element={<BirdList/>}/>
          <Route path=':id' element={<Bird/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
