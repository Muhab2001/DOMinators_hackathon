import MembersTable from '@/components/MembersTable'
import { UserRole } from '@/stores/profile'
// import UserRole from "";
const members = [
  {
    id: 1,
    name: 'John Doe',
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
      <MembersTable members={members} />
    </>
  )
}

export default Members
