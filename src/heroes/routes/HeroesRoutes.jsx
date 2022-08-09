
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components'
import { DCPages } from '../pages/DCPages'
import { HeroPages } from '../pages/HeroPages'
import { MarvelPages } from '../pages/MarvelPages'
import { SearchPage } from '../pages/SearchPage'






export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="/marvel" element={<MarvelPages />} />
                <Route path="/dc" element={<DCPages/>} />
                <Route path="/search" element={<SearchPage/>} />
                <Route path="/hero/:id" element={<HeroPages />} />
                

            <Route path='/' element={<Navigate to='/marvel'/>}/>
            </Routes>
        </div>
    
    </>
  )
}
