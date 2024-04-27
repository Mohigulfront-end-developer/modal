import React from 'react'
import {Header} from "../src/components/header/Header"
import {Main} from "../src/components/main/Main";
import { Footer } from './components/footer/Footer';



const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App