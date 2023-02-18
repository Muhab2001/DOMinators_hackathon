
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
  static async getClubProfile({ clubId: string }): Promise<ClubProfile> {

    
    console.log("Hello world");

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

  static async getAllClubs(key: string) {
    
    
    return [
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
      },
      {
        name: 'Computer Club',
        codename: 'CC',
        logo: 'https://i.imgur.com/aOU4rub.jpg',
        memberCount: 40,
        description: 'KFUPM Computer club',
        activitiesCount: 10,
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
