import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()(
  immer(devtools(
    persist<BearState>((set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    }), {
        name: 'bears',
        getStorage: () => sessionStorage,
    })
  ))
)