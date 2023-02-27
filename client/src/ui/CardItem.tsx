const CardItem = ({ header, data }: { header: string; data: string | number | boolean }) => {
  return (
    <div className={'flex items-center gap-2 mb-1'}>
      <h6>{header}</h6>
      <p className={'text-sm text-gray-500'}> {data}</p>
    </div>
  )
}

export default CardItem
