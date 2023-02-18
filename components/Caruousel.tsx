import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper'
import MembersTable from '@/components/MembersTable'
import { UserRole } from '@/stores/profile'
import Image from 'next/image'
import { Grid, createStyles, Group, Tooltip, ActionIcon } from '@mantine/core'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

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
    avatar: '/assets/1588336168503.jpg',
    role: UserRole.CLUB_PRESIDENT,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: '/assets/1647515326182.jpg',
    role: UserRole.CLUB_MEMBER,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    avatar: '/assets/1647515326182.jpg',
    role: UserRole.CLUB_MEMBER,
  },
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
    avatar: '/assets/1647515326182.jpg',
    role: UserRole.CLUB_MEMBER,
  },
]

function Members() {
  const memberz = (
    <>
      {/* <MembersTable members={members} /> */}
      {members.map((member) => (
        <SwiperSlide>
          <div
            className="flex flex-col justify-center p-3 bg-white rounded-md shadow-md h-80	items-center"
            style={{ display: 'flex', overflow: 'hidden' }}
          >
            <Tooltip label="Kick Member" withArrow>
              <ActionIcon className="flex items-end self-end" color="black">
                {/* <X size={16}></X> */}
              </ActionIcon>
            </Tooltip>
            <Image
              loader={() => member.avatar}
              src={member.avatar}
              style={{ borderRadius: '70%' }}
              className="mb-6"
              alt="Club Memeber"
              width={150}
              height={150}
            ></Image>
            <p className="font-serif text-xl ">{member.name}</p>
            <p className="text-[#5c626c] ">{member.role}</p>
            <div className="flex mt-2">
              {/* TO DO: Get color acceent from clubclient */}
              {/* <button
                type="button"
                className="py-2.5 px-10 mr-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Edit
              </button> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  )
  return memberz
}

export default function Caruousel() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        freeMode={true}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        data-swiper-autoplay={100}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-8 mb-5"
      >
        {Members()}
      </Swiper>
    </div>
  )
}
