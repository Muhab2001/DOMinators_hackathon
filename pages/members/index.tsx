import MembersTable from '@/components/MembersTable'
import { UserRole } from '@/stores/profile'
import Image from 'next/image'
import { Grid, createStyles, Group, Tooltip, ActionIcon } from '@mantine/core'

import {
  BrandTwitter,
  BrandFacebook,
  BrandLinkedin,
  X,
} from 'tabler-icons-react'
const members = [
  {
    id: 1,
    name: 'Barack Obama',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar1.jpg',
    role: UserRole.CLUB_PRESIDENT,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://example.com/avatar2.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    avatar: 'https://example.com/avatar3.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 4,
    name: 'Samantha Lee',
    email: 'samantha.lee@example.com',
    avatar: 'https://example.com/avatar4.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 5,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    avatar: 'https://example.com/avatar5.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 6,
    name: 'Emily Kim',
    email: 'emily.kim@example.com',
    avatar: 'https://example.com/avatar6.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 7,
    name: 'David Wong',
    email: 'david.wong@example.com',
    avatar: 'https://example.com/avatar7.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 8,
    name: 'Stephanie Park',
    email: 'stephanie.park@example.com',
    avatar: 'https://example.com/avatar8.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 9,
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@example.com',
    avatar: 'https://example.com/avatar9.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 10,
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    avatar: 'https://example.com/avatar10.jpg',
    role: UserRole.CLUB_MEMBER,
  },
]

function Members() {
  return (
    <>
      {/* <MembersTable members={members} /> */}
      <div
        style={{ backgroundColor: '#F5F7FA', height: '100%', padding: '40px' }}
      >
        <div className="flex justify-between">
          <h2 className="p-5 text-[#5c626c] items-start">Club Members</h2>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Add Memeber
          </button>
        </div>
        <div className="grid gap-5 grid-cols-4 grid-rows-4 items-center	">
          {members.map((member) => (
            <div
              className="flex flex-col justify-center p-3 bg-white rounded-md shadow-md h-80	items-center"
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
                src="https://rlv.zcache.com/barack_obama_us_president_white_house_portrait_rec_square_sticker-r1404a5d4f9a6453686aef974567eb824_0ugmc_8byvr_736.webp"
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
    </>
  )
}
export default Members
