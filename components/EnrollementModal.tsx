import { Group as Stack, Modal, Text, TextInput } from '@mantine/core'
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
    <Stack>
      <TextInput></TextInput>
      <TextInput></TextInput>
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
      ></Modal>
    </>
  )
}

export default EnrollementModal
