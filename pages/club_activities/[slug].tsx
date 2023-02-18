import { ActivityClient } from '@/clients/activities'
import { ActivityCard } from '@/components/ActivityCard'
import ActivityHeader from '@/components/ActivityHeader'
import ClubEditDrawer from '@/components/ClubEditDrawer'
import { AppNavbar } from '@/components/Navbar'
import { useClub } from '@/stores/club'
import { Container, SimpleGrid, Skeleton } from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Caruousel from '@/components/Caruousel'
import useSWR from 'swr'
import { useDisclosure } from '@mantine/hooks'
import InvoiceModal from '@/components/InvoiceModal'

function ClubActivities() {
  const router = useRouter()
  const { slug } = router.query
  const { data, isLoading, error } = useSWR(
    { clubId: slug, path: 'activities' },
    ActivityClient.getClubActivities
  )

  const [opened, handlers] = useDisclosure(false)
  const [invoiceActivity, setInvoiceActivity] = useState<number | string>(0)

  function openInvoiceModal(activity_id: number | string) {
    setInvoiceActivity(activity_id)
    handlers.open()
  }

  const activities = !data
    ? []
    : data.map((activity) => (
        <ActivityCard {...activity} openInvoiceModal={openInvoiceModal} />
      ))
  return (
    <>
      <InvoiceModal
        activity_id={invoiceActivity}
        visible={opened}
        onClose={handlers.close}
      />
      <Container size={926} mb={22}>
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
