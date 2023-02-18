import {
  Heart,
  Location,
  CalendarEvent,
  ColorSwatch,
  CurrentLocation,
  PlayerPlay,
} from 'tabler-icons-react'
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
  Spoiler,
} from '@mantine/core'
import { UserRole, useProfile } from '@/stores/profile'
import { useDisclosure } from '@mantine/hooks'
import QRPopup from './QRPopup'

export enum ActivityStatus {
  onGoing = 'On Going',
  finished = 'Finished',
  canceled = 'Canceled',
  notStarted = 'Not Started',
}

interface IActivityCardProps {
  id: number
  image: string
  title: string
  description: string
  date: string
  participantsLimit: number
  registeredParticipants: number
  attendanceCount: number
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
    paddingBottom: theme.spacing.xs,
    paddingTop: theme.spacing.xs,
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
    alignItems: 'center',
  },
}))

export function ActivityCard({
  id,
  image,
  title,
  description,
  date,
  category,
  participantsLimit,
  registeredParticipants,
  attendanceCount: attendnance,
  status,
  location,
  locationURL,
}: IActivityCardProps) {
  const { classes, theme } = useStyles()
  const [opened, handlers] = useDisclosure(false)
  // local state for enrollement status, coupled with fetching logic
  const { role } = useProfile((state) => ({
    role: state.role,
  }))

  return (
    <>
      <QRPopup
        activityName={title}
        activityId={id}
        onClose={handlers.close}
        visible={opened}
      />
      <Card withBorder radius="md" p="sm" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group position="apart">
            <Text color="blue" size="xl" weight={700}>
              {title}
            </Text>
            <Badge size="md">{status}</Badge>
          </Group>

        <Spoiler mih={80} hideLabel="Hide" showLabel="Show more" maxHeight={40}>
          <Text size="sm">{description}</Text>
        </Spoiler>
      </Card.Section>

        <Card.Section className={classes.section}>
          <Group spacing={7} my={4} align="center">
            <Badge
              size="lg"
              py={8}
              color={'teal'}
              leftSection={<CurrentLocation size={14}></CurrentLocation>}
            >
              <a href={locationURL}>{location}</a>
            </Badge>
            <Badge
              size="lg"
              color={theme.colorScheme === 'dark' ? 'dark' : 'blue'}
              leftSection={<CalendarEvent size={14}></CalendarEvent>}
              classNames={{
                leftSection: classes.iconCentring,
              }}
            >
              {date}
            </Badge>
            <Badge
              size="lg"
              color={theme.colorScheme === 'dark' ? 'dark' : 'orange'}
              leftSection={<ColorSwatch size={14}></ColorSwatch>}
            >
              {category}
            </Badge>
          </Group>
        </Card.Section>
        <Card.Section className={classes.section}>
          <Text className={classes.label} color="dimmed">
            Registration
          </Text>
          <Group position="apart">
            <Text className="font-medium text-2xl">
              {registeredParticipants} / {participantsLimit}
            </Text>
            <Text>
              <span className="font-bold text-blue-500">
                {participantsLimit - registeredParticipants}
              </span>{' '}
              Seats Left
            </Text>
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
          {role === UserRole.GUEST ? (
            <Button
              onClick={handlers.open}
              leftIcon={<PlayerPlay size={16} />}
              color="green"
              style={{ flex: 1 }}
            >
              Start Attendance
            </Button>
          ) : (
            <Button color="blue" radius="md" style={{ flex: 1 }}>
              Enroll
            </Button>
          )}
        </Group>
      </Card>
    </>
  )
}
