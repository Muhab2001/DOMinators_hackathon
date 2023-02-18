import axios from 'axios'

interface ClubProfile {
  headerImg: string
  logoImg: string
  description: string
  socialMediaLinks: Record<string, string>
  clubName: string
  membersCount: number
  colorAccent: string // hex code
}

export class ClubClient {
  static async getClubProfile({ clubId }): Promise<ClubProfile> {
    const data = (
      await axios.get(`http://localhost:8000/api/clubs/${clubId}/?format=json`)
    ).data

    console.log('Data on club', data)

    return {
      headerImg: data.header_image,
      logoImg: data.logo,
      description: data.description,
      clubName: data.name,
      membersCount: data.member_count,
      colorAccent: data.theme,
      socialMediaLinks: {
        twitter: data.twitter_link,
        facebook: data.facebook_link,
        instagram: data.instagram_link,
      },
    }
  }

  static async getAllClubs(key: string) {
    const data = (await axios.get('http://localhost:8000/api/clubs/')).data

    const cleaned = data.map((obj) => ({
      name: obj.name,
      codename: obj.id,
      logo: obj.logo,
      memberCount: obj.member_count,
      description: obj.description,
      activitiesCount: obj.activity_count,
    }))

    return cleaned
  }

  static async updateClubProfile(
    logoImage?: File,
    headerImage?: File,
    description?: string,
    socialMediaLinks?: Record<string, string>
  ): Promise<void> {}
}
