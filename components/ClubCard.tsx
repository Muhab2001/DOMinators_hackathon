import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Highlight,
  Image,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core'
import Link from 'next/link'
import { Activity, Users } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}))

interface ClubCardProps {
  name: string
  codename: string
  logo: string
  memberCount: number
  description: string
  activitiesCount: number
  className?: string
}

function ClubCard(props, { className }: ClubCardProps) {
  const classes = useStyles()

  return (
    <>
      <Link href={'club_activities/' + props.codename}>
        <Card withBorder radius="md" classNames={className}>
          {/* section for the logo, title, and short description */}
          <Card.Section p="xl" withBorder>
            <Group align="center" spacing={8}>
              <Avatar radius={'xl'} src={props.logo} />

              <Text color="blue" size={'xl'} weight={700}>
                {props.name}
              </Text>
            </Group>
            <Text mt={8} ml={2} size={'sm'} mih={50}>
              {props.description}
            </Text>
          </Card.Section>
          {/* section for stats like # of recent activities, memeber count */}
          <Card.Section withBorder p={'xs'} px={'md'}>
            <Group spacing={5}>
              <Group spacing={3}>
                <ActionIcon color="blue" variant="transparent">
                  <Users size={16} />
                </ActionIcon>
                <Text size={'sm'}>
                  <span className="font-semibold">{props.memberCount}</span>{' '}
                  Members
                </Text>
              </Group>
              <Group spacing={0}>
                <ActionIcon px={0} mx={0} color="teal" variant="transparent">
                  <Activity size={16} />
                </ActionIcon>
                <Text mx={0} size={'sm'}>
                  <span className="font-semibold">{props.activitiesCount}</span>{' '}
                  Recent Activites
                </Text>
              </Group>
            </Group>
          </Card.Section>
        </Card>
      </Link>
    </>
  )
}

export default ClubCard
