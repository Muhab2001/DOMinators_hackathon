interface ShortenedClubProfile {
  logoImg: string
  shortDescription: string
  clubName: string
  codename: string
}

interface ClubProfile {
  headerImg: string
  logoImg: string
  description: string
  socialMediaLinks: Record<string, string>
  clubName: string
  membersCount: number
  colorAccent: string // hex code
}

class ClubClient {
  static async getClubProfile({clubId: string}): Promise<ClubProfile> {
    return {
      headerImg: 'https://picsum.photos/200/300',
      logoImg: 'https://picsum.photos/200/300',
      description: 'This is our club description mate',
      clubName: 'Computer Science Club',
      membersCount: 100,
      colorAccent: '#000000',
      socialMediaLinks: {
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
      },
    }
  }

  // static async getAllClubs(clubId: string): Promise<ShortenedClubProfile> {}
}
