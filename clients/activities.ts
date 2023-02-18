import { ActivityStatus } from '@/components/ActivityCard'

interface IActivity {
  id: number
  title: string
  date: string
  description: string
  location: string
  participantsLimit: number
  registeredParticipants: number
  attendanceCount: number
  image: string
  status: ActivityStatus
  category: string
  locationURL: string
}

export class ActivityClient {
  static async getClubActivities({ clubId, path }): Promise<IActivity[]> {
    return [
      {
        id: 1,
        title: 'Club Activity 1',
        date: '2020-01-01',
        description:
          'Excepteur velit tempor tempor consequat voluptate consequat voluptate est ex. Ipsum culpa ad commodo culpa laborum quis deserunt et duis sunt deserunt irure eiusmod. Culpa sit ea exercitation ad adipisicing nisi ea officia enim ipsum id fugiat consequat Lorem. Anim pariatur duis pariatur aliqua aute velit officia reprehenderit ea irure pariatur.',
        location: 'Club Activity 1 Location',
        participantsLimit: 10,
        registeredParticipants: 5,
        attendanceCount: 5,
        image: 'https://i.imgur.com/snAxpbr.jpg',
        status: ActivityStatus.onGoing,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
      },
      {
        id: 2,
        title: 'Club Activity 1',
        date: '2020-01-01',
        description: 'Club Activity 1 Description',
        location: 'Club Activity 1 Location',
        participantsLimit: 10,
        registeredParticipants: 5,
        attendanceCount: 5,
        image: 'https://i.imgur.com/snAxpbr.jpg',
        status: ActivityStatus.onGoing,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
      },
    ]
  }

  static async getActivityDetails({
    acitivity_id: number,
  }): Promise<IActivity> {
    return {
      id: 4,
      title: 'Club Activity 1',
      date: '2020-01-01',
      description: 'Club Activity 1 Description',
      location: 'Club Activity 1 Location',
      participantsLimit: 10,
      registeredParticipants: 5,
      attendanceCount: 5,
      image: 'https://picsum.photos/200/300',
      status: ActivityStatus.onGoing,
      category: 'Category 1',
      locationURL: 'https://www.google.com/maps',
    }
  }

  static async registerForActivity(
    activity_id: number,
    email: string
  ): Promise<void> {}

  static async generateActivityQR(club_codename: string, activity_id: string) {
    return 'dgkmldfngfdxgudrhergferg'
  }

  static async checkActivityValidity(email: string, activity_id: number) {
    return { valid: true, activityName: 'Example Activity Name' }
  }

  static async recordAttendance(activity_id: string, user_id: string){
    // we do some shit
  }
}
