import { ActivityStatus } from '@/components/ActivityCard'

export interface IActivity {
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

interface Invoice {
  amount: number
  seller: string
  description: string
  date: string
  id: number
}

export class ActivityClient {
  static async getClubActivities({
    clubId,
    path,
  }): Promise<(IActivity & { clubname: string; supervisor: string })[]> {
    return [
      {
        id: 1,
        title: 'Laravel framework workshop',
        date: '2020-01-01',
        description:
          'Excepteur velit tempor tempor consequat voluptate consequat voluptate est ex. Ipsum culpa ad commodo culpa laborum quis deserunt et duis sunt deserunt irure eiusmod. Culpa sit ea exercitation ad adipisicing nisi ea officia enim ipsum id fugiat consequat Lorem. Anim pariatur duis pariatur aliqua aute velit officia reprehenderit ea irure pariatur.',
        location: 'building 54',
        participantsLimit: 10,
        registeredParticipants: 5,
        attendanceCount: 5,
        image: 'https://i.imgur.com/snAxpbr.jpg',
        status: ActivityStatus.onGoing,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
        clubname: 'a club name',
        supervisor: 'string',
      },
      {
        id: 2,
        title: 'Club Activity 1',
        date: '2020-01-01',
        description: 'Club Activity 1 Description',
        location: 'Building 68',
        participantsLimit: 10,
        registeredParticipants: 5,
        attendanceCount: 5,
        image: 'https://i.imgur.com/snAxpbr.jpg',
        status: ActivityStatus.cancelled,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
        clubname: 'a club name 2',
        supervisor: 'string 2',
      },
    ]
  }

  static async getActivityDetails({
    acitivity_id: number,
  }): Promise<IActivity & { clubName: string; supervisor: string }> {
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
      clubName: 'Computer Science Club',
      supervisor: 'Ahmed',
    }
  }

  static async registerForActivity(
    activity_id: number,
    email: string
  ): Promise<void> {}

  static async generateActivityQR(club_codename: string, activity_id: string) {
    return 'dgkmldfngfdxgudrhergferg'
  }

  static async deleteActivity(activity_id: number): Promise<void> {}

  static async getRecentActivites(): Promise<
    (IActivity & { clubName: string; codename: string })[]
  > {
    return [
      {
        id: 1,
        title: '+ fugiat aliqua quis irure aliqua consectetur duis eu e duis.',
        date: '2023-18-02',
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
        clubName: 'Computer Club',
        codename: 'CC',
      },
      {
        id: 2,
        title: 'Physics club',
        date: '2020-01-01',
        description: 'Club Activity 1 Description',
        location: 'Club Activity 1 Location',
        participantsLimit: 10,
        registeredParticipants: 5,
        attendanceCount: 5,
        image: 'https://i.imgur.com/snAxpbr.jpg',
        status: ActivityStatus.finished,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
        clubName: 'Physics Club',
        codename: 'PY',
      },
      {
        id: 3,
        title: 'Club Activity 1',
        date: '2020-01-01',
        description: 'Club Activity 1 Description',
        location: 'Club Activity 1 Location',
        participantsLimit: 10,
        registeredParticipants: 5,
        attendanceCount: 5,
        image: 'https://i.imgur.com/snAxpbr.jpg',
        status: ActivityStatus.cancelled,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
        clubName: 'Systems Engineering Clubs',
        codename: 'SE',
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
        status: ActivityStatus.notStarted,
        category: 'Category 1',
        locationURL: 'https://www.google.com/maps',
        clubName: 'Club Name',
        codename: 'CC',
      },
    ]
  }

  static async checkActivityValidity(email: string, activity_id: number) {
    return { valid: true, activityName: 'Example Activity Name' }
  }

  static async recordAttendance(activity_id: string, user_id: string) {
    // we do some shit
  }

  static async saveInvoice(
    { key, activity_id },
    { args }: Readonly<Record<string, string>>
  ): Promise<void> {}

  static async getInvoice({
    id: number,
    key: string,
  }): Promise<{ invoices: Invoice[] }> {
    return {
      invoices: [
        {
          amount: 100,
          date: '2020-01-01',
          description: 'Invoice 1',
          seller: 'Seller 1',
          id: 1,
        },
        {
          amount: 300,
          date: '2020-01-02',
          description: 'Invoice 2',
          seller: 'Seller 2',
          id: 2,
        },
        {
          amount: 500,
          date: '2020-01-04',
          description: 'Invoice 3',
          seller: 'Seller 3',
          id: 3,
        },
      ],
    }
  }
}
