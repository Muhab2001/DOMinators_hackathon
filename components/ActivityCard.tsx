import { Heart, Location as Calender, ColorSwatch, Location, CurrentLocation } from 'tabler-icons-react'
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  Progress,
} from '@mantine/core'

export enum ActivityStatus {
  onGoing = 'On Going',
  finished = 'Finished',
  canceled = 'Canceled',
  notStarted = 'Not Started',
}

interface IActivityCardProps {
  image: string
  title: string
  description: string
  date: string
  participantsLimit: number
  registeredParticipants: number
  attendnance: number
  status: ActivityStatus
  category: string
  location: string
  locationURL: string
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  progressBar: {
    backgroundColor: theme.colors.blue[5],
  },

  progressTrack: {
    backgroundColor: theme.colors.blue[2],
  },
  iconCentring: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}))

export function ActivityCard({
  image,
  title,
  description,
  date,
  category,
  participantsLimit,
  registeredParticipants,
  attendnance,
  status,
  location,
  locationURL,
}: IActivityCardProps) {
  const { classes, theme } = useStyles()
  // local state for enrollement status, coupled with fetching logic

  return (
    <Card withBorder radius="md" p="md"  className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text color='blue' size="xl" weight={700}>
            {title}
          </Text>
          <Badge size="md">{status}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={7} my={8} align='center'>
          <Badge
          size='lg'
          py={8}
            color={'teal'}
            leftSection={<CurrentLocation  size={14}></CurrentLocation>}
          >
            <a href={locationURL}>{location}</a>
          </Badge>
          <Badge
          size='lg'
            color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
            leftSection={<Calender size={14}></Calender>}
            classNames={{
                leftSection: classes.iconCentring}
            }
          >
            {date}
          </Badge>
          <Badge
          size='lg'
            color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
            leftSection={<ColorSwatch size={14}></ColorSwatch>}
          >
            {category}
          </Badge>
        </Group>
      </Card.Section>
      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Registration
        </Text>
        <Group position="apart">
          <Text className='font-medium text-2xl'>
            {registeredParticipants} / {participantsLimit}
          </Text>
          <Text><span className='font-bold text-blue-500'>{participantsLimit - registeredParticipants}</span> Seats Left</Text>
        </Group>
        <Progress
          value={(registeredParticipants / participantsLimit) * 100}
          mt="md"
          size="lg"
          radioGroup="xl"
          classNames={{
            root: classes.progressTrack,
            bar: classes.progressBar,
          }}
        />
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Enroll
        </Button>
      </Group>
    </Card>
  )
}
