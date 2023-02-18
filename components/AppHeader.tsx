import { Group, Header, Text } from '@mantine/core'
import UserButton from '@/components/UserButton'
import Image from 'next/image'
import Link from 'next/link'
// Shall be on the top of the application at all times
function AppHeader() {
  return (
    <>
      <Header className="fixed" zIndex={10} p={6} px={26} height={80}>
        <Group align="center" position="apart">
          <Link href="/clubs">
            <Group className="select-none hover:cursor-pointer" spacing={5}>
              {/* <Image
              src="/public/favicon.ico"
              width={40}
              alt="KFUPM Clubs"
              height={40}
            /> */}
              <Text size={40} weight={300}>
                KFUPM
              </Text>
              <Text size={40} weight={500}>
                Clubs
              </Text>
            </Group>
          </Link>

          <UserButton />
        </Group>
      </Header>
    </>
  )
}

export default AppHeader
