import { Grid, createStyles, Group, Tooltip, ActionIcon } from '@mantine/core'

import {
  BrandTwitter,
  BrandFacebook,
  BrandLinkedin,
  Trash,
  Pencil
} from 'tabler-icons-react'
interface MembersTableProps {
  members: UserProfile[]
}
const useStyles = createStyles((theme) => ({
  Avatar: {
    borderRadius: '75%',
  },
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  progressBar: {
    backgroundColor: theme.colors.blue[5],
  },

  progressTrack: {
    backgroundColor: theme.colors.blue[2],
  },
  iconCentring: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
}))


function MembersTable({ members }: MembersTableProps) {
  const classes = useStyles()
  return (
    <Grid ml={300} mr={300} columns={4}>
      {members.map((member) => (
        member.role == 'club_president' ? <>
        <Grid.Col span={4} >
          <div className='our-team' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <img
              src="https://hips.hearstapps.com/hmg-prod/images/barack-obama-12782369-1-402.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
              alt="Member avatar"
              style={{ width: '150px', height: '150px', borderRadius: '60%' }}
              className="pic"
            >
            </img>
            <h3 className="title">{member.name}</h3>
            <span className="post"> {member.role}</span>
            <ul className="social">
              <BrandTwitter />
              <BrandLinkedin />
              <BrandFacebook />
            </ul>
          </div>

        </Grid.Col>
        </> : <>
        <Grid.Col span={2}>
          <div className='our-team' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/barack-obama-12782369-1-402.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
              alt="Member avatar"
              style={{ width: '150px', height: '150px', borderRadius: '60%' }}
              className="pic"
            >
            </img>
            <h3 className="title">{member.name}</h3>
            <span className="post"> {member.role}</span>
            <ul className="social">
              <BrandTwitter />
              <BrandLinkedin />
              <BrandFacebook />
            </ul>
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
          </div>

        </Grid.Col></>
      ))}
    </Grid>
  )
}

export default MembersTable
