import { create } from 'zustand'

interface ClubState {
  name: string
  codename: string
  logo: string
  header: string
  activePage: string
  accentColor: string
}

interface ClubStateActions {
  switchClub: (
    codename: string,
    name: string,
    logo: string,
    header: string
  ) => void
  switchPage: (page: string) => void
}

export const useClub = create<ClubState & ClubStateActions>()((set) => {
  return {
    name: 'Computer Club',
    codename: 'CC',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    header:
      'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    activePage: 'Activities',
    accentColor: '#FF0000',
    switchClub: (
      codename: string,
      name: string,
      logo: string,
      header: string
    ) => {
      set({ codename, name, logo, header })
    },
    switchPage(page) {
      set({ activePage: page })
    },
  }
})
