import { UserRole } from '@/stores/profile'
import { Logout } from 'tabler-icons-react'
import axios from 'axios';

export class UserClient {
  static async login(username: string, password: string): Promise<UserProfile> {
    const user = (await axios.get('http://localhost:8000/api/users/current/')).data;
    const profile = (await axios.get(`http://localhost:8000/api/user_profile/${user.pk}/`)).data;
    // do some fetching
    return {
      name: user.username,
      email: user.email,
      avatar: profile.profile_pic,
      role: UserRole.GUEST,
    }
  }

  static async logout(): Promise<void> {
    // fetch the backend, and clear the profile
  }
}
