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
  Spoiler,
} from '@mantine/core'
import Link from 'next/link'
import { Activity, Users } from 'tabler-icons-react'
import parse from 'html-react-parser'

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
  aosDelay?: number
}

function ClubCard(props, { className, aosDelay }: ClubCardProps) {
  const classes = useStyles()

  return (
    <>
      <Link
        data-aos="fade-in"
        data-aos-delay={aosDelay}
        href={'club_activities/' + props.codename}
      >
        <Card withBorder radius="md" classNames={className}>
          {/* section for the logo, title, and short description */}
          <Card.Section p="xl" withBorder>
            <Group align="center" spacing={8}>
              <Avatar radius={'xl'} src={props.logo} />

              <Text color="blue" size={'xl'} weight={700}>
                {props.name}
              </Text>
            </Group>
            <Text className="break-all whitespace-normal text-ellipsis overflow-hidden">
              <Spoiler
                mt={8}
                ml={2}
                mih={50}
                mah={50}
                px={74}
                showLabel="Show more"
                hideLabel="Hide"
                maxHeight={50}
              >
                {props.description}
              </Spoiler>
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
                  <span className="font-semibold">{10}</span> Members
                </Text>
              </Group>
              <Group spacing={0}>
                <ActionIcon px={0} mx={0} color="teal" variant="transparent">
                  <Activity size={16} />
                </ActionIcon>
                <Text mx={0} size={'sm'}>
                  <span className="font-semibold">{5}</span> Recent Activites
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
