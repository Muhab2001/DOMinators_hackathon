import { ActionIcon, Group, Table, Image, Avatar, Tooltip } from '@mantine/core'

import { Pencil, Trash } from 'tabler-icons-react'

interface MembersTableProps {
  members: UserProfile[]
}

import { Grid, Card, Text } from '@mantine/core';

const ClubMembers = ({ members }) => {
  return (
    <Grid columns={3}>
      {members.map((member) => (
        <Card key={member.id}>
          <img src={member.avatar} alt={`${member.name} avatar`} />
          <Text weight={500}>{member.name}</Text>
          <Text>{member.email}</Text>
          <Text>{member.role}</Text>
        </Card>
      ))}
    </Grid>
  );
};
        

function MembersTable({ members }: MembersTableProps) {

  const rows =
      <Grid columns={3}>
      <Grid.Col span={4}>1</Grid.Col>
      {members.map((member) => (
        <Card key={member.id}>
          <img src={member.avatar} alt={`${member.name} avatar`} />
          <Text weight={500}>{member.name}</Text>
          <Text>{member.email}</Text>
          <Text>{member.role}</Text>
        </Card>
      ))}
    </Grid>
  
  // const rows = members.map((user) => {
    // return (
    //   <tr key={user.id}>
    //     <td>{user.id}</td>
    //     <td>
    //       <Group spacing={8}>
    //         <Avatar
    //           radius={'xl'}
    //           size={'sm'}
    //           alt={user.name + ' avatar'}
    //           src={user.avatar}
    //         ></Avatar>
    //         <span>{user.name}</span>
    //       </Group>
    //     </td>
    //     <td>{user.email}</td>
    //     {/* shall be transformed to roles dropdown for an admin */}
    //     <td>{user.role}</td>
    //     <td>
    //       <Group spacing={3}>
    //         <Tooltip label="Kick Member" withArrow>
    //           <ActionIcon variant="light" color="red">
    //             <Trash size={16}></Trash>
    //           </ActionIcon>
    //         </Tooltip>
    //         <Tooltip label="Edit Member Credentials" withArrow>
    //           <ActionIcon variant="light" color="blue">
    //             <Pencil size={16}></Pencil>
    //           </ActionIcon>
    //         </Tooltip>
    //       </Group>
    //     </td>
    //   </tr>
    // )
  // }
  // )

  return (
    <>
{rows}
    </>
  )
}

export default MembersTable
