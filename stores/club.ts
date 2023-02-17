import { create } from 'zustand'

interface ClubState {
  name: string
  codename: string
  logo: string
  activePage: string
}

interface ClubStateActions {
  switchClub: (codename: string, name: string, logo: string) => void
  switchPage: (page: string) => void
}

export const useClub = create<ClubState & ClubStateActions>()((set) => {
  return {
    name: 'Computer Club',
    codename: 'clubcodename',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    activePage: 'Activities',
    switchClub: (codename: string, name: string, logo: string) => {
      // TODO: fetch the club information
      set({ codename, name, logo })
    },
    switchPage(page) {
      set({ activePage: page })
    },
  }
})
