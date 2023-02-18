import { ActivityClient } from '@/clients/activities'
import { ActivityCard } from '@/components/ActivityCard'
import ActivityHeader from '@/components/ActivityHeader'
import { AppNavbar } from '@/components/Navbar'
import { useClub } from '@/stores/club'
import { Container, SimpleGrid, Skeleton } from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Caruousel from '@/components/Caruousel'
import useSWR from 'swr'
function ClubActivities() {
  const router = useRouter()
  const { slug } = router.query
  const { data, isLoading, error } = useSWR(
    { clubId: slug, path: 'activities' },
    ActivityClient.getClubActivities
  )

  console.log(data, typeof data)

  const activities = !data
    ? []
    : data.map((activity) => <ActivityCard {...activity} />)
  return (
    <>
      {/* <AppNavbar /> */}
      <Container size={1096} mb={22}>
        <ActivityHeader codename={slug as string} />
        <Caruousel />
        <SimpleGrid
          breakpoints={[
            {
              spacing: 'md',
              cols: 2,
            },
            {
              spacing: 'xl',
              cols: 3,
            },
          ]}
        >
          {isLoading ? (
            <>
              <Skeleton height={90}></Skeleton>
              <Skeleton height={90}></Skeleton>
              <Skeleton height={90}></Skeleton>
              <Skeleton height={90}></Skeleton>
              <Skeleton height={90}></Skeleton>
              <Skeleton height={90}></Skeleton>
            </>
          ) : (
            activities
          )}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default ClubActivities
