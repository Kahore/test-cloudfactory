import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useToastError = () => {
  const notify = () => toast.error('ошибка')

  const RenderToastError = () => {
    return (
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    )
  }
  return {
    notify,
    RenderToastError,
  }
}
export default useToastError
