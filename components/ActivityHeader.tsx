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
} from '@mantine/core'
import useSWR from 'swr'

import { BrandFacebook, BrandInstagram, BrandTwitter } from 'tabler-icons-react'

interface ActivityHeaderProps {
  codename: string
}

function ActivityHeader({ codename }: ActivityHeaderProps) {
  const { data, isLoading, error } = useSWR(
    { clubId: codename },
    ClubClient.getClubProfile
  )

  return (
    <>
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
            <Group align="flex-end" ml={16} spacing={16}>
              <Avatar
                src={data?.logoImg}
                className="border-solid border-white border-4"
                radius={75}
                size={150}
              />
              <Text className="relative bottom-8" mt={5} size={35} weight={700}>
                {data?.clubName}
              </Text>
            </Group>

            <Spoiler
              px={74}
              showLabel="Show more"
              hideLabel="Hide"
              maxHeight={80}
            >
              <Text color="grey" weight={400}>
                {data?.description}
              </Text>
            </Spoiler>
          </div>
        )}

        <Group px={73} pb={16} spacing={5}>
          {data?.socialMediaLinks['twitter'] && (
            <a href={data.socialMediaLinks['twitter']}>
              <BrandTwitter color="#00bfd8" size={25} />
            </a>
          )}
          {data?.socialMediaLinks['facebook'] && (
            <a href={data.socialMediaLinks['facebook']}>
              <BrandFacebook color="#00abfb" size={25} />
            </a>
          )}
          {data?.socialMediaLinks['instagram'] && (
            <a href={data.socialMediaLinks['instagram']}>
              <BrandInstagram color="#fd0061" size={25} />
            </a>
          )}
        </Group>
      </Card>
    </>
  )
}

export default ActivityHeader
