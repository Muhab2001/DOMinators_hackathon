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
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afbefb6e-a4d3-447e-bf7a-10d0fe1b8087/db9bmis-7b3ec247-e33f-4bf2-bbf6-1b94ab0e7777.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmYmVmYjZlLWE0ZDMtNDQ3ZS1iZjdhLTEwZDBmZTFiODA4N1wvZGI5Ym1pcy03YjNlYzI0Ny1lMzNmLTRiZjItYmJmNi0xYjk0YWIwZTc3NzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.thIKVm8noN3DBeGIleGfRJjFU45Gkdgsly5g056LVko',
      logoImg: 'https://i.imgur.com/aOU4rub.jpg',
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

  static async getAllClubs(clubId: string): Promise<ShortenedClubProfile[]> {
    return [
      {
        logoImg:
          'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        shortDescription: 'This is our club description mate epsum lorem',
        clubName: 'Computer Club',
        codename: 'CC',
      },
      {
        logoImg:
          'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        shortDescription:
          'In ut consequat nostrud commodo do nulla eu id eu in proident. Laborum mollit ipsum elit reprehenderit consequat esse cillum anim nostrud sit enim laborum nostrud. Enim ipsum nisi magna adipisicing ea quis deserunt proident consequat. Dolor dolore deserunt irure veniam. Anim fugiat eiusmod consectetur aute officia irure nostrud deserunt deserunt. Occaecat occaecat duis aliqua magna enim quis qui non pariatur non sint ex fugiat magna. Mollit irure qui eu excepteur irure sit cillum magna aliquip adipisicing.',
        clubName: 'Physics Club',
        codename: 'PC',
      },
    ]
  }

  static async updateClubProfile(
    logoImage?: File,
    headerImage?: File,
    description?: string,
    socialMediaLinks?: Record<string, string>
  ): Promise<void> {}
}
