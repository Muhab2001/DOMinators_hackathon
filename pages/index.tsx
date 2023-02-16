import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm, zodResolver } from '@mantine/form'
import {
  NumberInput,
  TextInput,
  Button,
  ThemeIcon,
  List,
  Text,
} from '@mantine/core'
import { RecordType, z } from 'zod'
import { AlertTriangle, CircleCheck, CircleDashed } from 'tabler-icons-react'
import { Todo, useTodoStore } from '@/stores/bears'
// import ListView from '@/components/list'
import dynamic from 'next/dynamic'
import useSWRImmutable from 'swr'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'

const ListView = dynamic(() => import('../components/list'), {
  ssr: false,
})
const fetcher = (input: { url: string; randomShi }) => {
  console.log(input.randomShi)

  return axios.get(input.url).then((res) => res.data)
}

const postFetcher = (url, {args}: Readonly<Record<string, string>>) => {
  return axios.post(url, args).then((res) => res.data)
}

const schema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' })
    .max(10, { message: 'Name should not exceed 10 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z
    .number()
    .min(18, { message: 'You must be at least 18 to create an account' }),
})


export default function Home() {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  })
  // fetch random quote using SWR
  const { data, isLoading, error, mutate } = useSWRImmutable(
    { url: 'https://api.quotable.io/random', randomShi: 'randomShi' },
    fetcher
  )

  const {trigger, data: postData} = useSWRMutation('https://jsonplaceholder.typicode.com/posts', postFetcher)

  const todos = useTodoStore((state) => state.todos)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const list = Object.values(todos).map((todo: Todo) => (
    <List.Item
      key={todo.id}
      icon={
        todo.done ? (
          <ThemeIcon color="teal" size={24} radius="xl">
            <CircleCheck size={16} />
          </ThemeIcon>
        ) : (
          <ThemeIcon color="blue" size={24} radius="xl">
            <CircleDashed size={16} />
          </ThemeIcon>
        )
      }
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.title}
    </List.Item>
  ))

  return (
    <div
      suppressHydrationWarning
      className="flex items-center flex-col max-w-7xl"
    >
      <form className="w-96" onSubmit={form.onSubmit((values, _event) => {
        console.log(values)
      })}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps('name')}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps('email')}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>

      <ListView></ListView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text className="pt-4">We have Fetched: {data.content}</Text>
      )}
      <Button
        leftIcon={<AlertTriangle size={16} />}
        variant="light"
        onClick={() => mutate()}
        type="submit"
        mt="lg"
      >
        Force revalidation
      </Button>
      <Button
        leftIcon={<AlertTriangle size={16} />}
        variant="light"
        onClick={() => trigger(
          {
            title: 'foo',
            body: 'bar',
            userId: 1,
          }
        )}
        type="submit"
        mt="lg"
      >
       POST request
      </Button>
      {postData && <Text className="pt-4">We have Fetched: {postData.id}</Text>}
    </div>
  )
}
