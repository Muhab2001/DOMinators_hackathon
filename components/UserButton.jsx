import {
  Avatar,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Paper,
  HoverCard,
  Button,
} from '@mantine/core'
import { useProfile } from '@/stores/profile'
import { Logout } from 'tabler-icons-react'
import { useDisclosure } from '@mantine/hooks'
import { LoginModal } from './LoginModal'

function UserButton() {
  const { avatar, email, name, logout, login } = useProfile((state) => ({
    avatar: state.avatar,
    email: state.email,
    name: state.name,
    logout: state.logout,
    login: state.login,
  }))
  const [opened, handlers] = useDisclosure(false)

  return (
    <>
      {name !== '' ? (
        <HoverCard>
          <HoverCard.Target>
            <Paper className="hover:bg-gray-100" p={6} px={12} radius={'md'}>
              <Group className="cursor-pointer" spacing={8}>
                <Avatar size={25} radius={'xl'} src={avatar}></Avatar>
                <Stack spacing={1}>
                  <Text mb={0} color="blue" weight={600}>
                    {name}
                  </Text>
                  <Text size={'xs'} weight={300}>
                    {email}
                  </Text>
                </Stack>
              </Group>
            </Paper>
          </HoverCard.Target>
          <HoverCard.Dropdown p={6}>
            <Button
              onClick={logout}
              color="red"
              leftIcon={<Logout size={12} />}
              variant="subtle"
            >
              Logout
            </Button>
          </HoverCard.Dropdown>
        </HoverCard>
      ) : (
        <Button
          leftIcon={<Logout size={12} />}
          color="green"
          variant="subtle"
          onClick={handlers.open}
        >
          Login
        </Button>
      )}
      <LoginModal visible={opened} onClose={handlers.close} />
    </>
  )
}

export default UserButton
