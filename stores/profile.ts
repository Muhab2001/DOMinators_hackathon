import { UserClient } from '@/clients/users'
import { create } from 'zustand'

export enum UserRole {
  ADMIN = 'admin',
  CLUB_PRESIDENT = 'club_president',
  CLUB_MEMBER = 'club_member',
  GUEST = 'guest',
}

interface UserProfielActions {
  login: (name: string, password: string) => void
  logout: () => void
}

export const useProfile = create<UserProfile & UserProfielActions>()((set) => ({
  name: 'Muhab Abubaker',
  email: 'mohababubakir2001@gmail.com',
  avatar: '/assets/public-logo.png',
  role: UserRole.GUEST,
  async login(username: string, email: string) {
    // fetch the endpoint, and update the profile

    set({
      name: username,
      email: email,
    })
  },
  async logout() {
    // fetch the backend, and clear the profile
    await UserClient.logout()
    set({
      name: '',
      email: '',
      avatar: '',
      role: UserRole.GUEST,
    })
  },
}))
