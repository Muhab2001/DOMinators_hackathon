import EnrollementModal from '@/components/EnrollementModal'
import MembersTable from '@/components/MembersTable'
import { UserRole } from '@/stores/profile'
import { ActionIcon, Button, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { X } from 'tabler-icons-react'
const members = [
  // {
  //   id: 1,
  //   name: 'Barack Obama',
  //   email: 'john.doe@example.com',
  //   avatar: 'https://example.com/avatar1.jpg',
  //   role: UserRole.CLUB_PRESIDENT,
  // },
  // {
  //   id: 2,
  //   name: 'Jane Smith',
  //   email: 'jane.smith@example.com',
  //   avatar: 'https://example.com/avatar2.jpg',
  //   role: UserRole.CLUB_MEMBER,
  // },
  // {
  //   id: 3,
  //   name: 'Bob Johnson',
  //   email: 'bob.johnson@example.com',
  //   avatar: 'https://example.com/avatar3.jpg',
  //   role: UserRole.CLUB_MEMBER,
  // },
  {
    id: 4,
    name: 'Samantha Lee',
    email: 'samantha.lee@example.com',
    avatar: '/assets/1674886428324.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 5,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    avatar: '/assets/1588336168503.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 6,
    name: 'Emily Kim',
    email: 'emily.kim@example.com',
    avatar: '/assets/1647515326182.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  // {
  //   id: 7,
  //   name: 'David Wong',
  //   email: 'david.wong@example.com',
  //   avatar: 'https://example.com/avatar7.jpg',
  //   role: UserRole.CLUB_MEMBER,
  // },
  {
    id: 8,
    name: 'Stephanie Park',
    email: 'stephanie.park@example.com',
    avatar: '/assets/1588336168503.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 90,
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@example.com',
    avatar: '/assets/1647515326182.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 82,
    name: 'Stephanie Park',
    email: 'stephanie.park@example.com',
    avatar: '/assets/1588336168503.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 19,
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@example.com',
    avatar: '/assets/1647515326182.jpg',
    role: UserRole.CLUB_MEMBER,
  },
]

function MembersPage() {
  const [opened, handlers] = useDisclosure(false)
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <EnrollementModal
        visible={opened}
        onClose={handlers.close}
        clubName={slug as string}
      />
      <div className="flex pt-20 justify-between">
        <h2 className="p-5 text-[#5c626c] items-start">Club Members</h2>
      </div>
      <div className="w-full justify-center flex">
        <div className="grid gap-5 grid-cols-3 max-w-[1220px] grid-rows-4 items-center	">
          {members.map((member) => (
            <div
              className="flex w-80 flex-col justify-center p-3 bg-white rounded-md shadow-md h-80	items-center"
              style={{ display: 'flex', overflow: 'hidden' }}
            >
              <Tooltip label="Kick Member" withArrow>
                <ActionIcon className="flex items-end self-end" color="black">
                  <X size={16}></X>
                </ActionIcon>
              </Tooltip>
              <Image
                style={{ borderRadius: '70%' }}
                className="mb-6"
                loader={() => member.avatar}
                src={member.avatar}
                alt="Club Memeber"
                width={100}
                height={100}
              ></Image>
              <p className="font-serif text-xl ">{member.name}</p>
              <p className="text-[#5c626c] ">{member.role}</p>
              <div className="flex mt-2">
                {/* TO DO: Get color acceent from clubclient */}
                <button
                  type="button"
                  className="py-2.5 px-10 mr-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-5 w-full flex justify-center">
        <Button style={{ width: '200px' }} onClick={handlers.open}>
          Add member
        </Button>
      </div>
    </>
  )
}

export default MembersPage
