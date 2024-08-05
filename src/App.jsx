import { useState } from 'react'
import './App.css'
import Banner from './component/LandingPage/Banner/Banner'
import Cursor from './component/Cursor/Cursor'
import Continue from './component/ContinuePage/Continue'
import ChapterSection from './component/LandingPage/ChapterSection/ChapterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cursor/>
      <Continue/>
     <Banner/>
     <ChapterSection/>
    </div>
  )
}

export default App
