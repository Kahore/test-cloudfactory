const ModalBG = () => {
  return (
    <div
      className='bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
      onClick={(e) => {
        console.log(e)
      }}
    />
  )
}
export default ModalBG
