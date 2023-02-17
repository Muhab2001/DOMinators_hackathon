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
  avatar:
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  role: UserRole.GUEST,
  async login(username: string, password: string) {
    // fetch the endpoint, and update the profile
    const { name, email, avatar, role } = await UserClient.login(
      username,
      password
    )
    set({
      name: name,
      email: '',
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
