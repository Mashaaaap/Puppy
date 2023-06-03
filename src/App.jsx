import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Gallery from './Components/Gallery/Gallery'
import ContactContainer from './Components/Contact/ContactContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element = {<Hero/>}/>
            {/* <Route path='/about' element = {<About/>}/> */}
            <Route path='/gallery' element = {<Gallery/>}/>
            <Route path='/contacts' element = {<ContactContainer/>}/>
        </Routes>

        </BrowserRouter>

    )
}

export default App