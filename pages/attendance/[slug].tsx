import { ActivityClient } from '@/clients/activities'
import { useProfile } from '@/stores/profile'
import { Button, Loader, Stack, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Container } from 'tabler-icons-react'

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
        <Container>
          <Stack align="center">
            Oops! there is a problem with the server. Please try again later.
          </Stack>
        </Container>
      </>
    )
  }
  if (isLoading) {
    return (
      <>
        <Container>
          <Stack align="center">
            <Loader size={65}></Loader>
          </Stack>
        </Container>
      </>
    )
  }

  return (
    <>
      <Container>
        <Stack spacing={8} align="center">
          <Text size={'xl'}>
            Welcome {user.name}. Please click the button below to confirm your
            attendance
          </Text>
          <Button color="green" size={'lg'} style={{ flex: 1 }}>
            Confirm Attendance
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default AttendanceChecking
