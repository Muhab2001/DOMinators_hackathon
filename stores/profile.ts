
import { UserClient } from '@/clients/users';
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

const useProfile = create<UserProfile & UserProfielActions>()((set) => ({
  name: '',
  email: '',
  avatar: '',
  role: UserRole.GUEST,
  async login(username: string, password: string) {
    // fetch the endpoint, and update the profile
    const {name, email, avatar, role} = await UserClient.login(username, password);
    set({
      name: name,
      email: ''
  })},
  async logout() {
    // fetch the backend, and clear the profile
    await UserClient.logout();
    set({
      name: '',
      email: '',
      avatar: '',
      role: UserRole.GUEST,
    })
  },
}))
