import {
  Group as Stack,
  Modal,
  Text,
  TextInput,
  Button,
  Divider,
  Group,
  ActionIcon,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { link } from 'fs'
import { Link, Trash } from 'tabler-icons-react'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  links: z
    .object({
      label: z.string(),
      url: z.string().url(),
    })
    .array()
    .min(1, { message: 'Enter at least one referral link for the form' }),
})

interface EnrollementModalProps {
  clubName: string
  visible: boolean
  onClose: () => void
}

function EnrollementModal({
  clubName: title,
  visible,
  onClose,
}: EnrollementModalProps) {
  const form = useForm({
    initialValues: {
      // ? these fields shall be auto-filled for logged in users
      name: '',
      email: '',
      links: [
        {
          label: '',
          link: '',
        },
      ],
    },
  })

  //   TODO: insert the link contents, and URLs
  const fields = form.values.links.map((_, index) => (
    <Stack spacing={5} mb={16}>
      <Group style={{ width: '100%' }} position="apart">
        <Text size={'md'}>Link #{index + 1}</Text>
        {index !== 0 && (
          <Button
            variant="light"
            onClick={() => {
              form.removeListItem('links', index)
            }}
            leftIcon={<Trash />}
            color="red"
          >
            Delete link
          </Button>
        )}{' '}
      </Group>
      <TextInput
        style={{ flex: 1 }}
        label="Purpose"
        placeholder="Link Purpose"
        {...form.getInputProps('links.label')[index]}
      ></TextInput>
      <TextInput
        style={{ flex: 1 }}
        label="URL"
        placeholder="Enter the URL"
        {...form.getInputProps('links.link')[index]}
      ></TextInput>
    </Stack>
  ))

  return (
    <>
      <Modal
        onClose={onClose}
        title={
          <Text weight={700}>
            Enroll for <span className="to-blue-400">{title}</span>
          </Text>
        }
        opened={visible}
      >
        <form onSubmit={form.onSubmit((values) => {})}>
          <Text size={'xl'} weight={600}>
            Personal Information
          </Text>
          <Text mb={5} size={'md'}>
            Enter your Credentials to join the club
          </Text>
          <TextInput label="Name" placeholder="Name"></TextInput>
          <TextInput label="Email Address"></TextInput>
          <Text mt={12} size={'xl'} weight={600}>
            Referral Links
          </Text>
          <Text mb={8} size={'md'}>
            Lets us know more about you{' '}
          </Text>
          {fields}
          <Button
            leftIcon={<Link />}
            variant="light"
            mb={8}
            onClick={() =>
              form.insertListItem('links', { link: '', label: '' })
            }
            style={{ flex: 1 }}
          >
            Add a new link
          </Button>
        </form>
        <Divider my={6} />
        <Group>
          <Button onClick={onClose}>Submit</Button>
          <Button color="gray" variant="outline">
            Cancel
          </Button>
        </Group>
      </Modal>
    </>
  )
}

export default EnrollementModal
