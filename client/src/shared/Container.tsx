import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Container = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default Container
