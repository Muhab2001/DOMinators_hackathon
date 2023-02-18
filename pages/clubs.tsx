import ClubCard from '../components/ClubCard'
import SearchField from '../components/SearchField'
import { Timeline, Grid } from '@mantine/core'

function MyTimeline() {
  return (
    <>
      <h2 className="pb-2 text-[#5c626c]">Latest Activities</h2>
      <Timeline active={99} bulletSize={24} lineWidth={2}>
        <Timeline.Item className="text-[#595f6b]" title="Computer Club">
          Innovation Hackathon
        </Timeline.Item>
        <Timeline.Item className="text-[#595f6b]" title="Shawarma">
          Golden Juice
        </Timeline.Item>
        <Timeline.Item className="text-[#595f6b]" title="Regular item">
          Third item
        </Timeline.Item>
        <Timeline.Item className="text-[#595f6b]" title="Computer Club">
          Innovation Hackathon
        </Timeline.Item>
        <Timeline.Item className="text-[#595f6b]" title="Shawarma">
          Golden Juice
        </Timeline.Item>
        <Timeline.Item className="text-[#595f6b]" title="Regular item">
          Third item
        </Timeline.Item>
        <Timeline.Item className="text-[#595f6b]" title="Computer Club">
          Innovation Hackathon
        </Timeline.Item>
      </Timeline>
    </>
  )
}
function ClubsList() {
  const clubs = [
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
    {
      name: 'Computer Club',
      codename: 'CC',
      logo: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      memberCount: 40,
      description: 'KFUPM Computer club',
      activitiesCount: 10,
    },
  ]

  return (
    <>
      <div className="w-full h-full mt-24 overflow-hidden">
        <Grid className="pl-36 h-full w-full">
          <Grid.Col className="mb-3" span={10}>
            <SearchField />
          </Grid.Col>

          <Grid.Col span={10}>
            <Grid className="gap-y-7" justify="space-between">
              {clubs.map((club) => (
                <Grid.Col span={4}>
                  <ClubCard
                    name={club.name}
                    codename={club.codename}
                    logo={club.logo}
                    memberCount={club.memberCount}
                    description={club.description}
                    activitiesCount={club.activitiesCount}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>

          <Grid.Col span={2}>
            <MyTimeline />
          </Grid.Col>
        </Grid>
      </div>
    </>
  )
}

export default ClubsList
