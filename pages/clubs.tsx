import { Calendar, Check, Clock, RotateClockwise2, X } from 'tabler-icons-react'
import ClubCard from '../components/ClubCard'
import SearchField from '../components/SearchField'
import {
  Timeline,
  Grid,
  Tooltip,
  Text,
  Group,
  Avatar,
  Stack,
  ThemeIcon,
} from '@mantine/core'
import { ActivityStatus } from '@/components/ActivityCard'
import useSWR from 'swr'
import { ActivityClient, IActivity } from '@/clients/activities'
import { stat } from 'fs'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MyTimeline() {
  const { data, isLoading, error } = useSWR(
    { key: 'recent-activities' },
    ActivityClient.getRecentActivites
  )

  const router = useRouter()

  const statusIcon = (status: ActivityStatus) => {
    switch (status) {
      case ActivityStatus.onGoing:
        return (
          <ThemeIcon variant="light" radius={'xl'} color="blue">
            <RotateClockwise2 size={16} />
          </ThemeIcon>
        )
      case ActivityStatus.finished:
        return (
          <ThemeIcon variant="light" radius={'xl'} color="green">
            <Check size={16} />
          </ThemeIcon>
        )
      case ActivityStatus.cancelled:
        return (
          <ThemeIcon variant="light" radius={'xl'} color="red">
            <X size={16} />
          </ThemeIcon>
        )
      case ActivityStatus.notStarted:
        return (
          <ThemeIcon variant="light" radius={'xl'} className="bg-gray-200">
            <Clock className="text-gray-500" size={16} />
          </ThemeIcon>
        )
    }
  }

  const timelineItems = data?.map(
    (activity: IActivity & { clubName: string; codename: string }) => {
      return (
        <Timeline.Item
          style={{ cursor: 'pointer' }}
          title={activity.clubName}
          bullet={
            <Tooltip label={activity.status}>
              {statusIcon(activity.status)}
            </Tooltip>
          }
          onClick={() => {
            router.push('/club_activities/' + activity.codename)
          }}
        >
          <Stack spacing={0}>
            <Text color="blue.4" weight={900}>
              {activity.title}
            </Text>
            <Group spacing={8}>
              <ThemeIcon size={16} variant="light">
                <Calendar />
              </ThemeIcon>
              <Text color="dimmed" weight={300}>
                {activity.date}
              </Text>
            </Group>
          </Stack>
        </Timeline.Item>
      )
    }
  )

  return (
    <>
      <Stack ml={12}>
        <Text mb={15} size={25}>
          Latest Activities
        </Text>
        <Timeline bulletSize={24} lineWidth={2}>
          {timelineItems}
        </Timeline>
      </Stack>
    </>
  )
}

interface IClub {
  name: string
  codename: string
  logo: string
  memberCount: number
  description: string
  activitiesCount: number
}

function ClubsList() {
  const clubs: IClub[] = [
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
