interface ShortenedClubProfile {
  logoImg: string
  shortDescription: string
  clubName: string
}

interface ClubProfile {
  headerImg: string
  logoImg: string
  description: string
  socialMediaLinks: string[]
  clubName: string
  membersCount: number
  colorAccent: string // hex code
}

class Club {
  async getClubProfile(clubId: string): Promise<ClubProfile> {}

  async getAllClubs(clubId: string): Promise<ShortenedClubProfile> {
    
  }
}
