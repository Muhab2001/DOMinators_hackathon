// import { useQRCode } from 'next-qrcode'
// import ReactPDF, { Page, View, Document, StyleSheet } from '@react-pdf/renderer'

import { Button, Group, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { UserPlus } from 'tabler-icons-react'

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

import ActivityCreateModal from '@/components/ActivityModal'
import InvoiceDownloadButton from '@/components/InvoiceDownloadButton'

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
//     <div classNameName="fixed z-50 inset-0 overflow-y-auto">
//       <div classNameName="flex items-center justify-center min-h-screen">
//         <div classNameName="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-md"></div>

//         <div classNameName="relative bg-white rounded-lg p-20 z-20">
//           <svg
//             classNameName="absolute right-6 top-5 cursor-pointer"
//             xmlns="https://www.w3.org/2000/svg"
//             width="41"
//             height="41"
//             fill="none"
//             onClick={() => setIsOpen(false)}
//           >
//             <path`
//               fill="#9B9B9B"
//               d="M33.392 30.67a1.921 1.921 0 0 1-1.36 3.281c-.51 0-1-.2-1.362-.558L20.5 23.223l-10.17 10.17a1.938 1.938 0 0 1-2.723 0 1.923 1.923 0 0 1 0-2.723l10.17-10.17-10.17-10.17a1.925 1.925 0 0 1 2.723-2.723l10.17 10.17 10.17-10.17a1.925 1.925 0 1 1 2.722 2.723L23.222 20.5l10.17 10.17Z"
//             />
//           </svg>
//           <h1 classNameName="text-xl font-bold text-center mb-4">
//             Scan this QR code to attend the event
//           </h1>
//           <div classNameName="flex flex-row items-center justify-center m-auto w-full">
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
//       <div classNameName="flex items-center flex-col">
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
//         classNameName="w-96"
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

const invoiceData = {
  id: '5df3180a09ea16dc4b95f910',
  title: 'Invoice_Title',
  invoice_no: '',
  supervisor: 'Ahmed Ali',
  club: 'Computer Science',
  amount: '1500',
  studentID: '201857300',
  phone: '0500000000',
  date: '2023-2-18',
  justification: 'Cover Expenses',
  items: [
    {
      sno: 1,
      desc: 'Beverage',
      qty: 100,
      rate: 3,
    },
    {
      sno: 2,
      desc: 'Food',
      qty: 100,
      rate: 20,
    },
    {
      sno: 3,
      desc: 'Reservation',
      qty: 1,
      rate: 1000,
    },
  ],
}

export default function Home() {
  return (
    <section className=" bg-white absolute inset-0 flex flex-col justify-center items-center  overflow-hidden z-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          data-aos="fade-in"
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{' '}
          <span className="text-sm font-medium">Invoice management</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1
          data-aos="zoom-in"
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          We invest in the club's potential
        </h1>
        <p
          data-aos="fade-in"
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          KFUPM Clubs is a platform that aims to help clubs in KFUPM to grow and
          develop their potential the fullest.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            data-aos="fade-right"
            href="/clubs"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Explore
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            data-aos="fade-in"
            href="#"
            className="inline-flex justify-center gap-1 items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <UserPlus fill />
            Register
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span
            data-aos="fade-in"
            className="font-semibold text-gray-400 uppercase"
          >
            Built with
          </span>
          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between"
          >
            <div className="gap-5 flex flex-row justify-center items-center hover:text-gray-800 group dark:hover:text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32pt"
                height="32pt"
                viewBox=".5 -.2 1023 1024.1"
                fill="#6b7280"
                className="group-hover:fill-current"
              >
                <path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                <path d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
              </svg>
              <h2> Next.js</h2>
            </div>
            <div className="gap-5 flex flex-row justify-center items-center hover:text-gray-800 group dark:hover:text-gray-400 cursor-pointer">
              <svg
                className="group-hover:fill-[#092e20]"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
              >
                <path
                  className="group-hover:fill-[#092e20]"
                  fill="#6b7280"
                  d="M4.375 0h31.25A4.373 4.373 0 0 1 40 4.375v31.25A4.373 4.373 0 0 1 35.625 40H4.375A4.373 4.373 0 0 1 0 35.625V4.375A4.373 4.373 0 0 1 4.375 0Zm0 0"
                />
                <path
                  fill="#fffffd"
                  d="M29.121 14.719V25.07c0 3.563-.258 5.274-1.043 6.75-.726 1.422-1.68 2.32-3.656 3.305l-4.145-1.969c1.973-.93 2.93-1.742 3.543-2.992.633-1.273.836-2.75.836-6.633V14.72Zm-7.098-6.89v20.655c-2.293.438-3.976.614-5.804.614-5.446 0-8.285-2.465-8.285-7.188 0-4.55 3.011-7.512 7.683-7.512.719 0 1.274.059 1.938.235V7.828Zm-5.972 10.163c-2.262 0-3.567 1.39-3.567 3.828 0 2.38 1.246 3.684 3.536 3.684.496 0 .898-.031 1.535-.117v-7.16a4.36 4.36 0 0 0-1.504-.235ZM29.12 7.848v4.578h-4.465V7.848Zm0 0"
                />
              </svg>
              <h2> Django</h2>
            </div>

            <div className="gap-5 flex flex-row justify-center items-center hover:text-gray-800 group dark:hover:text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 122.88 73.29"
                width="32"
                height="32"
              >
                <path
                  className="group-hover:fill-[#06b6d4]"
                  fill="#6b7280"
                  fill-rule="evenodd"
                  d="M61.44 0Q36.87 0 30.72 24.43q9.22-12.21 21.5-9.16c4.68 1.16 8 4.53 11.72 8.26 6 6.08 13 13.11 28.22 13.11q24.57 0 30.72-24.43-9.21 12.22-21.5 9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64 7 76.67 0 61.44 0ZM30.72 36.64Q6.15 36.64 0 61.07q9.23-12.21 21.5-9.16c4.68 1.16 8 4.53 11.72 8.27 6 6.07 13 13.11 28.22 13.11q24.57 0 30.72-24.43-9.21 12.21-21.5 9.14c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
                />
              </svg>
              <h2> Tailwind CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
