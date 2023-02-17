import { Group as Stack, Modal, Text, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
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
    <Stack mb={3}>
      <TextInput label="Purpose" placeholder="Link Purpose"></TextInput>
      <TextInput label="URL" placeholder="Enter the URL"></TextInput>
      <Button
        onClick={() => {
          form.removeListItem('links', index)
        }}
        color="red"
      >
        Delete Link
      </Button>
    </Stack>
  ))

  return (
    <>
      <Modal
        onClose={onClose}
        title={
          <Text weight={700} color="blue">
            Enroll for{title}
          </Text>
        }
        opened={visible}
      >
        <form onSubmit={form.onSubmit((values) => {})}>
          <TextInput label="Name" placeholder="Name"></TextInput>
          <TextInput label="Email Address"></TextInput>
          {fields}
          <Button
            onClick={() =>
              form.insertListItem('links', { link: '', label: '' })
            }
            style={{ flex: 1 }}
          >
            Add a new link
          </Button>
        </form>
      </Modal>
    </>
  )
}

export default EnrollementModal
