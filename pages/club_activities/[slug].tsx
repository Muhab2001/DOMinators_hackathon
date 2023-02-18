import { ActivityClient } from '@/clients/activities'
import { ActivityCard } from '@/components/ActivityCard'
import ActivityHeader from '@/components/ActivityHeader'
import ClubEditDrawer from '@/components/ClubEditDrawer'
import { AppNavbar } from '@/components/Navbar'
import { useClub } from '@/stores/club'
import {
  ActionIcon,
  Button,
  Container,
  SimpleGrid,
  Skeleton,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Caruousel from '@/components/Caruousel'
import useSWR from 'swr'
import { useDisclosure } from '@mantine/hooks'
import InvoiceModal from '@/components/InvoiceModal'
import ActivityCreateModal from '@/components/ActivityModal'
import { Plus } from 'tabler-icons-react'

function ClubActivities() {
  const router = useRouter()
  const { slug } = router.query
  const { data, isLoading, error } = useSWR(
    { clubId: slug, path: 'activities' },
    ActivityClient.getClubActivities
  )

  const [invoiceOpened, invoiceHandlers] = useDisclosure(false)
  const [createActivityOpened, createActivityHandlers] = useDisclosure(false)
  const [invoiceActivity, setInvoiceActivity] = useState<number | string>(0)

  function openInvoiceModal(activity_id: number | string) {
    setInvoiceActivity(activity_id)
    invoiceHandlers.open()
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
        visible={invoiceOpened}
        onClose={invoiceHandlers.close}
      />
      <ActivityCreateModal
        visible={createActivityOpened}
        onClose={createActivityHandlers.close}
      />

      <ActionIcon
        size={'xl'}
        color="blue"
        className="shadow-md left-16 bottom-15 border-gray-300   fixed z-20 bottom-10  flex justify-center "
        onClick={createActivityHandlers.open}
      >
        <Plus size={16} />
      </ActionIcon>

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
              <Skeleton height={90} width={120}></Skeleton>
              <Skeleton height={90} width={120}></Skeleton>
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
