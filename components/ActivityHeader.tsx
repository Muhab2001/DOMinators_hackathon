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
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import parse from 'html-react-parser'

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
import { useClub } from '@/stores/club'
import { useEffect } from 'react'

interface ActivityHeaderProps {
  codename: string
}

function ActivityHeader({ codename }: ActivityHeaderProps) {
  const { data, isLoading, error } = useSWR(
    { clubId: codename },
    ClubClient.getClubProfile
  )
  const clubProfile = useClub((state) => state)
  const [opened, handlers] = useDisclosure(false)

  useEffect(() => {
    if (data) {
      clubProfile.switchClub(
        data.id,
        data.clubName,
        data.description,
        data.logoImg,
        data.headerImg,
        data.colorAccent,
        data.socialMediaLinks.facebook,
        data.socialMediaLinks.twitter,
        data.socialMediaLinks.instagram
      )
    }
  }, [data])

  return (
    <>
      <ClubEditDrawer
        description={clubProfile.description}
        accentColor={data ? data.colorAccent : ''}
        visible={opened}
        onClose={handlers.close}
      />
      <Card withBorder mb={16} px={0} mt={100}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Image height={350} src={clubProfile.header} />
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
                src={clubProfile.logo}
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
                  {clubProfile.name}
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
              {data?.description ? (
                <div>{parse(clubProfile.description)}</div>
              ) : (
                <Stack spacing={5}>
                  <Skeleton height={8} />
                  <Skeleton height={8} />
                  <Skeleton height={8} />
                  <Skeleton height={8} />
                  <Skeleton height={8} width={'50%'} />
                </Stack>
              )}

              {/* <Text color="grey" weight={400}>
                {data?.description}
              </Text> */}
            </Spoiler>
          </div>
        )}

        <Group px={73} pb={16} spacing={5}>
          {clubProfile.twitter && (
            <a target="_blank" href={clubProfile.twitter}>
              <BrandTwitter color="#00bfd8" size={25} />
            </a>
          )}
          {clubProfile.facebook && (
            <a target="_blank" href={clubProfile.facebook}>
              <BrandFacebook color="#00abfb" size={25} />
            </a>
          )}
          {clubProfile.instagram && (
            <a target="_blank" href={clubProfile.instagram}>
              <BrandInstagram color="#fd0061" size={25} />
            </a>
          )}
        </Group>
      </Card>
    </>
  )
}

export default ActivityHeader
