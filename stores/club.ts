import { StaticImageData } from 'next/image'
import { create } from 'zustand'

interface ClubState {
  name: string
  codename: string
  logo: string
  header: string
  description: string
  accentColor: string
  facebook: string
  twitter: string
  instagram: string
}

interface ClubStateActions {
  switchClub: (
    codename: string,
    name: string,
    description: string,
    logo: string,
    header: string,
    accentColor: string,
    facebook: string,
    twitter: string,
    instagram: string
  ) => void
}

export const useClub = create<ClubState & ClubStateActions>()((set) => {
  return {
    name: 'Computer Club',
    codename: 'CC',
    description:
      'Dolore non adipisicing nulla enim. Pariatur occaecat tempor commodo aliquip pariatur nostrud proident eu sit elit ad nisi. Ad Lorem duis ipsum pariatur aliqua id. Cupidatat qui ex amet anim voluptate eiusmod ex ad laborum voluptate. Ipsum qui voluptate sint duis proident in labore esse laborum proident excepteur nulla.',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    header:
      'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    activePage: 'Activities',
    accentColor: '#FF0000',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    switchClub: (
      codename: string,
      name: string,
      description: string,
      logo: string,
      header: string,
      accentColor: string,
      facebook: string,
      twitter: string,
      instagram: string
    ) => {
      set({
        codename,
        name,
        logo,
        header,
        twitter,
        instagram,
        facebook,
        accentColor,
        description,
      })
    },
  }
})
