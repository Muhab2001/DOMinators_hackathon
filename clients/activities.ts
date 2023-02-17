interface IActivity {
  title: string
  date: string
  description: string
  location: string
  registerationLimit: number
  registerationCount: number
  attendanceCount: number
}

class Activity {
  async getClubActivities(clubId: string): Promise<IActivity[]> {}

  async getActivityDetails(acitivity_id: number) : Promise<IActivity> {}

    async registerForActivity(activity_id: number) : Promise<void> {}

  
}
