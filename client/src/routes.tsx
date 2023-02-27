import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Error } from './pages/Error'
import Container from './shared/Container'
import { About } from './pages/About'
import { Markets } from './pages/Markets'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Navigate replace to='/about' />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/markets',
        element: <Markets />,
      },
    ],
  },
])
