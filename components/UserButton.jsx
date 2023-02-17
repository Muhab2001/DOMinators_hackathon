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

function UserButton() {
  const { avatar, email, name, Logout } = useProfile((state) => ({
    avatar: state.avatar,
    email: state.email,
    name: state.name,
    Logout: state.Logout,
  }))
  return (
    <>
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
        <HoverCard.Dropdown>
          <Button onClick={Logout} color="red" leftIcon={Logout} variant="subtle">
            Logout
          </Button>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  )
}

export default UserButton
