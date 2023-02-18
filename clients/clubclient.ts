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
      headerImg:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afbefb6e-a4d3-447e-bf7a-10d0fe1b8087/db9bmis-7b3ec247-e33f-4bf2-bbf6-1b94ab0e7777.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmYmVmYjZlLWE0ZDMtNDQ3ZS1iZjdhLTEwZDBmZTFiODA4N1wvZGI5Ym1pcy03YjNlYzI0Ny1lMzNmLTRiZjItYmJmNi0xYjk0YWIwZTc3NzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.thIKVm8noN3DBeGIleGfRJjFU45Gkdgsly5g056LVko',
      logoImg: 'https://i.imgur.com/aOU4rub.jpg',
      description:
        "Welcome to the KFUPM Computer Club! We're a community of students who share a passion for all things tech-related. Our club is open to students of all skill levels and backgrounds, and we offer a variety of events throughout the year, including programming workshops, tech talks, and networking events with industry professionals. We also provide access to resources such as tech books and online tools, as well as a Discord server for collaboration and idea sharing. Whether you're a computer science major or just have an interest in technology, we'd love to have you join us and enhance your college experience while preparing for a career in the tech industry.",
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
