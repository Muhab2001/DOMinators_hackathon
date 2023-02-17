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

export class ClubClient {
  static async getClubProfile({ clubId: string }): Promise<ClubProfile> {
    return {
      headerImg:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      logoImg:
        'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      description:
        'This is our club description mate epsum lorem This is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum loremThis is our club description mate epsum lorem',
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
