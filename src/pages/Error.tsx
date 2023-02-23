import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export const Error = () => {
  const error = useRouteError()

  return (
    <div className={'text-center'}>
      <h1 className={['text-2xl', 'pt-40'].join(' ')}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{isRouteErrorResponse(error) && <i>{error.statusText || error.statusText}</i>}</p>
    </div>
  )
}
