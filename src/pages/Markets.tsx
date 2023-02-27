import { MarketTable } from '../modules/MarketTable'
import { store, StoreProvider } from '../modules/MarketTable/store'

export const Markets = () => {
  return (
    <StoreProvider store={store}>
      <MarketTable />
    </StoreProvider>
  )
}
