import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function RootLayouts() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
         <Footer/>
    </div>
  )
}

export default RootLayouts