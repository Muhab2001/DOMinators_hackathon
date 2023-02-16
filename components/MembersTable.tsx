import { ActionIcon, Group, Table, Image, Avatar, Tooltip } from '@mantine/core'

import { Pencil, Trash } from 'tabler-icons-react'

interface MembersTableProps {
  members: UserProfile[]
}

function MembersTable({ members }: MembersTableProps) {
  const rows = members.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>
          <Group spacing={5}>
            <Avatar
              radius={'xl'}
              size={'md'}
              alt={user.name + ' avatar'}
              src={user.avatar}
            ></Avatar>
            <span>{user.name}</span>
          </Group>
        </td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <Group spacing={3}>
            <Tooltip label="Kick Member" withArrow>
              <ActionIcon variant="light" color="red">
                <Trash size={16}></Trash>
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Edit Member Credentials" withArrow>
              <ActionIcon variant="light" color="blue">
                <Pencil size={16}></Pencil>
              </ActionIcon>
            </Tooltip>
          </Group>
        </td>
      </tr>
    )
  })

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  )
}

export default MembersTable
