import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='py-10 px-20 flex justify-between text-white '>
      <h1 className='text-xl'>Test CloudFactory</h1>
      <ul className='flex items-center gap-5'>
        <li>
          <Link to={'/about'}>О приложении</Link>
        </li>
        <li>
          <Link to={'/markets'}>Котировки</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
