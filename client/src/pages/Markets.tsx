import { MarketTable } from '../modules/MarketTable'
import { store, StoreProvider } from '../modules/MarketTable/store'

const Markets = () => {
  return (
    <StoreProvider store={store}>
      <MarketTable />
    </StoreProvider>
  )
}
export default Markets
