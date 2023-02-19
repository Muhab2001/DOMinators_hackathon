import { ActivityClient } from '@/clients/activities'
import { useProfile } from '@/stores/profile'
import { Button, Loader, Paper, Skeleton, Stack, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Container, Pepper } from 'tabler-icons-react'

function AttendanceChecking() {
  const router = useRouter()
  const user = useProfile((state) => state)

  const { slug } = router.query
  // fetch with SWR
  const { data, error, isLoading } = useSWR(
    {
      path: 'attendance',
      key: slug + '-' + user?.id,
    },
    ActivityClient.checkActivityValidity
  )

  if (error) {
    return (
      <>
        <Paper mt={80} style={{ height: 'calc(100vh - 80px' }}>
          <Stack align="center">
            Oops! we cannot let you in yet! Make sure you are signed in and
            registered for this event
          </Stack>
        </Paper>
      </>
    )
  }
  if (isLoading) {
    return (
      <>
        <Paper mt={80} style={{ height: 'calc(100vh - 80px' }}>
          <div className="flex justify-center items-center h-full">
            <Stack align="center">
              <Loader size={65}></Loader>
              <Text>Making sure you can pass in!</Text>
            </Stack>
          </div>
        </Paper>
      </>
    )
  }

  return (
    <>
      <Paper mt={80} style={{ height: 'calc(100vh - 80px' }}>
        <div className="flex justify-center items-center h-full">
          <Stack spacing={8} align="center">
            <Text mb={10} size={'xl'}>
              Welcome <span className="font-bold">{user.name}</span>. Please
              click the button below to confirm your attendance
            </Text>
            <Button
              onClick={() => {
                router.push('/')
              }}
              py={8}
              size={'xl'}
              style={{ flex: 1 }}
            >
              <Text weight={400}>Confirm Attendance</Text>
            </Button>
          </Stack>
        </div>
      </Paper>
    </>
  )
}

export default AttendanceChecking
