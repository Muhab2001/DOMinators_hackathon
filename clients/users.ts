import { UserRole } from '@/stores/profile'
import { Logout } from 'tabler-icons-react'

export class UserClient {
  static async login(
    key,
    args: Readonly<Record<string, string>>
  ): Promise<UserProfile> {
    // do some fetching
    return {
      name: 'John Doe',
      email: '',
      avatar: '',
      role: UserRole.GUEST,
    }
  }

  static async logout(): Promise<void> {
    // fetch the backend, and clear the profile
  }
}
