import ActivityHeader from '@/components/ActivityHeader'
import { AppNavbar } from '@/components/Navbar'
import { useClub } from '@/stores/club'
import { Container, SimpleGrid } from '@mantine/core'
import { useRouter } from 'next/router'

function ClubActivities() {
  
  // const { data, isLoading, error } = useSWR({clubId: codename}, ClubClient.getClubActivites})
  const router = useRouter();
  const  }

  return (
    <>
      <AppNavbar />
      <Container size={720}>
        <ActivityHeader codename={codename} />
        <SimpleGrid spacing={'xl'}></SimpleGrid>
      </Container>
    </>
  )
}

export default ClubActivities
