
import './App.css'
import Footer from './components/Footer'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'
import Hero5 from './components/Hero5'
import Hero6 from './components/Hero6'
import Hero7 from './components/Hero7'


import Navbar from './components/Navbar'

function App() {


  return (
    <>

    <Navbar/>
    <Hero1 title1 ="25K + Students Trust Us"  dec="Every day brings with it a fresh set of learning possibilities."  src="https://faazizpro.github.io/online-class-landing-page/Assets/images/hero-bg.webp"/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Hero5/>
    <Hero6/>
    <Hero7 src = "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" title2 = "Download Our Free Mobile App" dec="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum, consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam fugiat consequuntur nostrum odio.

" />
<Footer/>
  
    
    
    
    </>
  )
}

export default App
