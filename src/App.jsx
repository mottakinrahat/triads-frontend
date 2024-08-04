import { useState } from 'react'
import './App.css'
import Banner from './component/LandingPage/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)
  // Inline styles for the background image
  const backgroundImageStyle = {
    backgroundImage: "url('/images/bg-images.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };
  return (
    <div className='' style={backgroundImageStyle}>
     <Banner/>
    </div>
  )
}

export default App
