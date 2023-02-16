import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm, zodResolver } from '@mantine/form'
import { NumberInput, TextInput, Button, ThemeIcon, List } from '@mantine/core'
import { z } from 'zod'
import { CircleCheck, CircleDashed } from 'tabler-icons-react'
import { Todo, useTodoStore } from '@/stores/bears'
// import ListView from '@/components/list'
import dynamic from 'next/dynamic'


const ListView = dynamic(() => import('../components/list'), {
  ssr: false,
})


const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
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

  const todos = useTodoStore((state) => state.todos)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const list = Object.values(todos).map((todo: Todo) => (
    <List.Item
    key = {todo.id}
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
    <div suppressHydrationWarning className="flex justify-center">
      <form className="w-96" onSubmit={form.onSubmit(console.log)}>
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
      
    </div>
  )
}
