import { ClubClient } from '@/clients/clubclient'
import {
  Avatar,
  Card,
  Group,
  Image,
  Skeleton,
  Text,
  Stack,
  Spoiler,
  ActionIcon,
  Tooltip,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import useSWR from 'swr'

import {
  Adjustments,
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
  Settings,
  Users,
} from 'tabler-icons-react'
import ClubEditDrawer from './ClubEditDrawer'
import Link from 'next/link'

interface ActivityHeaderProps {
  codename: string
}

function ActivityHeader({ codename }: ActivityHeaderProps) {
  const { data, isLoading, error } = useSWR(
    { clubId: codename },
    ClubClient.getClubProfile
  )

  const [opened, handlers] = useDisclosure(false)

  return (
    <>
      <ClubEditDrawer
        description={data ? data.description : ''}
        accentColor={data ? data.colorAccent : ''}
        visible={opened}
        onClose={handlers.close}
      />
      <Card withBorder mb={16} px={0} mt={100}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Image height={350} src={data?.headerImg} />
        )}
        {isLoading ? (
          <Stack spacing={0}>
            <Group spacing={16}>
              <Skeleton circle height={50} />
              <Skeleton height={16} />
            </Group>
            <Skeleton height={8} />
            <Skeleton height={8} />
            <Skeleton height={4} />
          </Stack>
        ) : (
          <div className="relative top-[-48px]">
            <Group px={16} pr={22} align="flex-end" ml={16} spacing={16}>
              <Avatar
                src={data?.logoImg}
                className="border-solid border-white border-4"
                radius={75}
                size={150}
              />
              <Group
                className="relative bottom-8"
                style={{ flex: 1 }}
                position="apart"
              >
                <Text mt={5} size={35} weight={700}>
                  {data?.clubName}
                </Text>
                <Group spacing={8}>
                  {/* TODO only show for presidents and admins */}
                  {
                    <Tooltip withArrow label="Manage club members">
                      <ActionIcon size={35} variant="transparent">
                        <Link href={'/members/' + codename}>
                          <Users />
                        </Link>
                      </ActionIcon>
                    </Tooltip>
                  }
                  <Tooltip withArrow label="Club Profile Settings">
                    <ActionIcon
                      onClick={handlers.open}
                      size={35}
                      variant="transparent"
                    >
                      <Adjustments />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </Group>
            </Group>

            <Spoiler
              px={74}
              showLabel="Show more"
              hideLabel="Hide"
              maxHeight={80}
              mt={12}
            >
              <Text color="grey" weight={400}>
                {data?.description}
              </Text>
            </Spoiler>
          </div>
        )}

        <Group px={73} pb={16} spacing={5}>
          {data?.socialMediaLinks['twitter'] && (
            <a target="_blank" href={data.socialMediaLinks['twitter']}>
              <BrandTwitter color="#00bfd8" size={25} />
            </a>
          )}
          {data?.socialMediaLinks['facebook'] && (
            <a target="_blank" href={data.socialMediaLinks['facebook']}>
              <BrandFacebook color="#00abfb" size={25} />
            </a>
          )}
          {data?.socialMediaLinks['instagram'] && (
            <a target="_blank" href={data.socialMediaLinks['instagram']}>
              <BrandInstagram color="#fd0061" size={25} />
            </a>
          )}
        </Group>
      </Card>
    </>
  )
}

export default ActivityHeader
