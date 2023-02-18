import {
  Heart,
  Location,
  CalendarEvent,
  ColorSwatch,
  CurrentLocation,
  PlayerPlay,
  Qrcode,
  FileInvoice,
  Trash,
  X,
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
  Stack,
  Tooltip,
} from '@mantine/core'
import { UserRole, useProfile } from '@/stores/profile'
import { useDisclosure } from '@mantine/hooks'
import QRPopup from './QRPopup'
import useSWR from 'swr'
import { ActivityClient } from '@/clients/activities'

export enum ActivityStatus {
  onGoing = 'On Going',
  finished = 'Finished',
  cancelled = 'Cancleled',
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
    marginTop: '4px !important',
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
  // SWR state management
  const {
    data: deleteResponse,
    isLoading: isLoadingDelete,
    error: deleteError,
  } = useSWR({ key: 'deleteActivity', id: id }, ActivityClient.deleteActivity)

  const statusColor = (status: ActivityStatus) => {
    switch (status) {
      case ActivityStatus.onGoing:
        return 'blue'
      case ActivityStatus.finished:
        return 'green'
      case ActivityStatus.cancelled:
        return 'red'
      case ActivityStatus.notStarted:
        return 'gray'
    }
  }

  return (
    <>
      <QRPopup
        activityName={title}
        activityId={id}
        onClose={handlers.close}
        visible={opened}
      />
      <Card withBorder radius="md" p={0} className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group position="apart">
            <Text color="blue" size="xl" weight={700}>
              {title}
            </Text>
            <Badge color={statusColor(status)} size="md">
              {status}
            </Badge>
          </Group>

          <Spoiler
            mih={80}
            hideLabel="Hide"
            showLabel="Show more"
            maxHeight={40}
          >
            <Text size="sm">{description}</Text>
          </Spoiler>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group spacing={7} my={4} align="center">
            <Badge
              size="xl"
              style={{
                fontWeight: 500,
                fontSize: '12',
                textDecoration: 'underline',
                textTransform: 'capitalize',
              }}
              py={8}
              leftSection={<CurrentLocation size={14}></CurrentLocation>}
            >
              <a href={locationURL}>{location}</a>
            </Badge>
            <Badge
              size="xl"
              style={{
                fontWeight: 500,
                fontSize: '10',
                textTransform: 'capitalize',
              }}
              leftSection={<CalendarEvent size={14}></CalendarEvent>}
              classNames={{
                leftSection: classes.iconCentring,
              }}
            >
              {date}
            </Badge>
            <Badge
              variant="light"
              size="xl"
              style={{
                fontWeight: 500,
                fontSize: '10',
                textTransform: 'capitalize',
              }}
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
          <Group mb={0} spacing={0} position="apart">
            <Text className="font-medium text-lg">
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
        <Card.Section className={classes.section}>
          <Group mt="xs">
            {role === UserRole.GUEST ? (
              <Stack style={{ width: '100%' }} spacing={8}>
                <Button
                  onClick={handlers.open}
                  leftIcon={<Qrcode size={16} />}
                  color="green.6"
                  style={{ flex: 1 }}
                  py={8}
                >
                  Start Attendance
                </Button>
                <Group spacing={4}>
                  <Button
                    style={{ flex: 0.5 }}
                    py={8}
                    variant="filled"
                    color="red"
                    leftIcon={<X />}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handlers.open}
                    leftIcon={<FileInvoice size={16} />}
                    color="blue.6"
                    style={{ flex: 1 }}
                    py={8}
                  >
                    Create Invoice
                  </Button>
                </Group>
              </Stack>
            ) : (
              <Button color="blue" radius="md" style={{ flex: 1 }}>
                Enroll
              </Button>
            )}
          </Group>
        </Card.Section>
      </Card>
    </>
  )
}
