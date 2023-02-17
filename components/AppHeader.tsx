import { Group, Header, Text } from '@mantine/core'
import UserButton from '@/components/UserButton'
// Shall be on the top of the application at all times
function AppHeader() {
  return (
    <>
      <Header p={6} px={16} height={80}>
        <Group align="center" position="apart"  >
          <Group spacing={5}>
            <Text size={40} weight={300}>
              KFUPM
            </Text>
            <Text size={40} weight={500}>
              Clubs
            </Text>
          </Group>
          <UserButton />
        </Group>
      </Header>
    </>
  )
}

export default AppHeader
