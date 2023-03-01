import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Container from './shared/Container'
import { About } from './pages/About'
const Error = lazy(() => import(/* webpackChunkName: "Error"*/ './pages/Error'))
const Markets = lazy(() => import(/* webpackChunkName: "Markets"*/ './pages/Markets'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: (
      <Suspense fallback={<></>}>
        {' '}
        <Error />
      </Suspense>
    ),

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
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Markets />
          </Suspense>
        ),
      },
    ],
  },
])
