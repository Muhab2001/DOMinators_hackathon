import { Avatar, Card, Group, Image, Skeleton, Text } from '@mantine/core'
import useSWR from 'swr'
import {
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
  Stack,
} from 'tabler-icons-react'

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
      <Card withBorder>
        <Card.Section>
          {isLoading ? <Skeleton /> : <Image src={data?.headerImg} />}
          <Group align="flex-end">
            {isLoading ? (
              <Stack spacing={8}>
                <Group spacing={16}>
                  <Skeleton circle height={50} />
                  <Skeleton height={16} />
                </Group>
                <Skeleton height={8} />
                <Skeleton height={8} />
                <Skeleton height={4} />
              </Stack>
            ) : (
              <Stack spacing={8}>
                <Group spacing={16}>
                  <Avatar src={data?.logoImg} />
                  <Text weight={700}>{data?.clubName}</Text>
                </Group>
                <Text>{data?.description}</Text>
              </Stack>
            )}
          </Group>
        </Card.Section>
        <Card.Section>
          <Group spacing={5}>
            {data?.socialMediaLinks['twitter'] && (
              <a href={data.socialMediaLinks['twitter']}>
                <BrandTwitter size={16} />
              </a>
            )}
            {data?.socialMediaLinks['facebook'] && (
              <a href={data.socialMediaLinks['facebook']}>
                <BrandFacebook size={16} />
              </a>
            )}
            {data?.socialMediaLinks['instagram'] && (
              <a href={data.socialMediaLinks['instagram']}>
                <BrandInstagram size={16} />
              </a>
            )}
          </Group>
        </Card.Section>
      </Card>
    </>
  )
}

export default ActivityHeader
