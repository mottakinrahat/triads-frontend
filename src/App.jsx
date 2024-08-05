import { useState } from 'react'
import './App.css'
import Banner from './component/LandingPage/Banner/Banner'
import Cursor from './component/Cursor/Cursor'
import Continue from './component/ContinuePage/Continue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cursor/>
      <Continue/>
     <Banner/>
    </div>
  )
}

export default App
