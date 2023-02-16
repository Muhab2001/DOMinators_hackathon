import { Todo, useTodoStore } from '@/stores/bears'
import { ThemeIcon, List } from '@mantine/core'
import { useEffect, useState } from 'react'
import { CircleCheck, CircleDashed } from 'tabler-icons-react'





function ListView() {
  const todos = useTodoStore((state) => state.todos)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)

  
  const uiList = Object.values(todos).map((todo: Todo) => (
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
  // useEffect(() => {
  //   setLocalList(Object.values(todos));
    
  // }, [])
  return (
    <>
    { 
      <List spacing="xs" size="sm" className="pt-10" center>
        {uiList}
      </List> }
    </>
  )
}

export default ListView
