// import { useQRCode } from 'next-qrcode'
// import ReactPDF, { Page, View, Document, StyleSheet } from '@react-pdf/renderer'

import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import { useForm, zodResolver } from '@mantine/form'
// import {
//   NumberInput,
//   TextInput,
//   Button,
//   ThemeIcon,
//   List,
//   Text,
// } from '@mantine/core'
// import { RecordType, z } from 'zod'
// import {
//   AlertTriangle,
//   CircleCheck,
//   CircleDashed,
//   NewSection,
// } from 'tabler-icons-react'
// import { Todo, useTodoStore } from '@/stores/bears'
// // import ListView from '@/components/list'
// import dynamic from 'next/dynamic'
// import useSWRImmutable from 'swr'
// import useSWRMutation from 'swr/mutation'
// import axios from 'axios'
// import { ActivityCard, ActivityStatus } from '@/components/ActivityCard'
// import MembersTable from '@/components/MembersTable'
// import { UserRole } from '@/stores/profile'
// import ClubCard from '@/components/ClubCard'
// import { useDisclosure } from '@mantine/hooks'
// import { LoginModal } from '@/components/LoginModal'
// import { AppNavbar } from '@/components/Navbar'
// import { useState } from 'react'

// import ActivityCreateModal from '@/components/ActivityModal'

// const fetcher = (input: { url: string; randomShi }) => {
//   console.log(input.randomShi)

//   return axios.get(input.url).then((res) => res.data)
// }

// const postFetcher = (url, { args }: Readonly<Record<string, string>>) => {
//   return axios.post(url, args).then((res) => res.data)
// }

// const schema = z.object({
//   name: z
//     .string()
//     .min(2, { message: 'Name should have at least 2 letters' })
//     .max(10, { message: 'Name should not exceed 10 letters' }),
//   email: z.string().email({ message: 'Invalid email' }),
//   age: z
//     .number()
//     .min(18, { message: 'You must be at least 18 to create an account' }),
// })

// function Popup({ setIsOpen }) {
//   const { Canvas } = useQRCode()

//   return (
//     <div className="fixed z-50 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-md"></div>

//         <div className="relative bg-white rounded-lg p-20 z-20">
//           <svg
//             className="absolute right-6 top-5 cursor-pointer"
//             xmlns="https://www.w3.org/2000/svg"
//             width="41"
//             height="41"
//             fill="none"
//             onClick={() => setIsOpen(false)}
//           >
//             <path
//               fill="#9B9B9B"
//               d="M33.392 30.67a1.921 1.921 0 0 1-1.36 3.281c-.51 0-1-.2-1.362-.558L20.5 23.223l-10.17 10.17a1.938 1.938 0 0 1-2.723 0 1.923 1.923 0 0 1 0-2.723l10.17-10.17-10.17-10.17a1.925 1.925 0 0 1 2.723-2.723l10.17 10.17 10.17-10.17a1.925 1.925 0 1 1 2.722 2.723L23.222 20.5l10.17 10.17Z"
//             />
//           </svg>
//           <h1 className="text-xl font-bold text-center mb-4">
//             Scan this QR code to attend the event
//           </h1>
//           <div className="flex flex-row items-center justify-center m-auto w-full">
//             <Canvas
//               text={'https://github.com/bunlong/next-qrcode'}
//               options={{
//                 level: 'M',
//                 margin: 3,
//                 scale: 4,
//                 width: 200,
//                 // color: {
//                 //   dark: '#010599FF',
//                 //   light: '#FFBF60FF',
//                 // },
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(true)

//   const [activityModalOpened, activityHandler] = useDisclosure(false)
//   const form = useForm({
//     validate: zodResolver(schema),
//     initialValues: {
//       name: '',
//       email: '',
//       age: 18,
//     },
//   })
//   // fetch random quote using SWR
//   const { data, isLoading, error, mutate } = useSWRImmutable(
//     { url: 'https://api.quotable.io/random', randomShi: 'randomShi' },
//     fetcher
//   )
//   const { trigger, data: postData } = useSWRMutation(
//     'https://jsonplaceholder.typicode.com/posts',
//     postFetcher
//   )

//   const [opened, handlers] = useDisclosure(false)

//   const todos = useTodoStore((state) => state.todos)
//   const toggleTodo = useTodoStore((state) => state.toggleTodo)
//   const list = Object.values(todos).map((todo: Todo) => (
//     <List.Item
//       key={todo.id}
//       icon={
//         todo.done ? (
//           <ThemeIcon color="teal" size={24} radius="xl">
//             <CircleCheck size={16} />
//           </ThemeIcon>
//         ) : (
//           <ThemeIcon color="blue" size={24} radius="xl">
//             <CircleDashed size={16} />
//           </ThemeIcon>
//         )
//       }
//       onClick={() => toggleTodo(todo.id)}
//     >
//       {todo.title}
//     </List.Item>
//   ))
//   return (
//     <>
//       <div className="flex items-center flex-col">
//         {isOpen && <Popup setIsOpen={setIsOpen} />}
//         {/* <ClubCard
//         memberCount={70}
//         activitiesCount={5}
//         codename="CC"
//         name="Computer Club"
//         description="The official computer club page in KFUPM"
//         logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//       /> */}
//         <AppNavbar />
//         <div></div>
//         {/* <ActivityCard

//         attendnance={10}
//         category="Hackathon"
//         date="2/17/2023"
//         description="This is a nice description of the activity"
//         image="https://images.unsplash.com/photo-1676200788931-187944f74e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//         location="Dhahran, KFUPM"
//         locationURL="https://unsplash.com/photos/xNqnwGVQTqs"
//         participantsLimit={50}
//         registeredParticipants={30}
//         status={ActivityStatus.onGoing}
//         title="Hacha Hackathon"
//       /> */}
//         {/* <form
//         className="w-96"
//         onSubmit={form.onSubmit((values, _event) => {
//           console.log(values)
//         })}
//       >
//         <TextInput
//           label="Name"
//           placeholder="Name"
//           {...form.getInputProps('name')}
//         />
//         <TextInput
//           mt="sm"
//           label="Email"
//           placeholder="Email"
//           {...form.getInputProps('email')}
//         />
//         <NumberInput
//           mt="sm"
//           label="Age"
//           placeholder="Age"
//           min={0}
//           max={99}
//           {...form.getInputProps('age')}
//         />
//         <Button type="submit" mt="sm">
//           Submit
//         </Button>
//       </form> */}

//         {/* <MembersTable
//         members={[
//           {
//             id: 4,
//             name: 'Ahmed',
//             email: 'ahmed@gmail.com',
//             role: UserRole.CLUB_PRESIDENT,
//             avatar:
//               'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//           },
//           {
//             id: 44,
//             name: 'Ahmed',
//             email: 'ahmed@gmail.com',
//             role: UserRole.CLUB_PRESIDENT,
//             avatar:
//               'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//           },
//           {
//             id: 404,
//             name: 'Ahmed',
//             email: 'ahmed@gmail.com',
//             role: UserRole.CLUB_PRESIDENT,
//             avatar:
//               'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//           },
//           {
//             id: 4432,
//             name: 'Ahmed',
//             email: 'ahmed@gmail.com',
//             role: UserRole.CLUB_PRESIDENT,
//             avatar:
//               'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//           },
//         ]}
//       /> */}
//         <Button
//           leftIcon={<NewSection size={16} />}
//           variant="light"
//           onClick={() => handlers.open()}
//           type="submit"
//           mt="lg"
//         >
//           Open login
//         </Button>
//         <Button
//           leftIcon={<AlertTriangle size={16} />}
//           variant="light"
//           onClick={() => mutate()}
//           type="submit"
//           mt="lg"
//         >
//           Force revalidation
//         </Button>
//         <LoginModal visible={opened} onClose={handlers.close} />
//       </div>
//     </>
//   )
// }

export default function Home() {
  return (
    <div className="bg-[#f4f7fa] absolute inset-0 flex flex-col justify-center items-center  overflow-hidden z-50">
      <h1 className="text-blue-500 mb-20 text-5xl">KFUPM Clubs</h1>
      <Image
        height={354 * 1.4}
        width={708 * 1.4}
        loader={() => 'https://i.imgur.com/irH6iu7.png'}
        src="https://i.imgur.com/irH6iu7.png"
        alt="KFUPM Clubs"
      />
      <Link href="/clubs">
        <Button size="md" className="mt-20 w-40">
          Explore!
        </Button>
      </Link>
    </div>
  )
}
