import { useState } from 'react'
import {
  Modal,
  Button,
  Center,
  TextInput,
  FileInput,
  Select,
  NumberInput,
  Text,
  createStyles,
  Group,
} from '@mantine/core'

import { Upload as IconUpload } from 'tabler-icons-react'
import { z } from 'zod'
import { useForm, zodResolver } from '@mantine/form'

const schema = z.object({
  title: z
    .string()
    .min(10, { message: 'Title should be at least 10 characters' }),
  maxAttendance: z.number().int(),
  activityDescription: z.string().optional(),
  locationURL: z.string().url(),
  locationDescription: z.string().optional(),
  eventSupervisor: z.string(),
  imageFile: z.any(),
})

interface ActivityFormProps {
  visible: boolean
  onClose: () => void
}

const useStyles = createStyles((theme) => ({
  modal: {
    backgroundColor:
      theme.colorScheme == 'dark' ? theme.colors.dark[7] : theme.white,
  },
  activityTitle: {
    color: theme.colors.blue[5],
    fontSize: 32,
    fontWeight: 700,
    paddingBottom: 15,
  },
  InputField: {
    marginBottom: 15,
  },
}))

function ActivityCreateModal({
  visible,
  onClose: closeModal,
}: ActivityFormProps) {
  const [file, setFile] = useState<File | null>(null)
  const { classes, theme } = useStyles()

  const form = useForm({
    initialValues: {
      title: '',
      maxAttendance: 10,
      activityDescription: '',
      locationURL: '',
      locationDescription: '',
      eventSupervisor: '',
      imageFile: null,
    },
    validate: zodResolver(schema),
  })

  return (
    <>
      <Modal
        opened={visible}
        onClose={closeModal}
        title={<Text className={classes.activityTitle}>Activity Builder</Text>}
        size="xl"
        padding={24}
      >
        <form onSubmit={form.onSubmit(() => {})}>
          <Group
            align={'flex-start'}
            grow={true}
            className={classes.InputField}
          >
            <TextInput
              size="md"
              placeholder="Activity Title"
              label="Activity Title"
              value={form.values.title}
              onChange={(event) =>
                form.setFieldValue('title', event.currentTarget.value)
              }
              error={form.errors.title}
            />
            <NumberInput
              size="md"
              defaultValue={10}
              placeholder="Maximum Event Capacity"
              label="Max Attendance"
              value={form.values.maxAttendance}
              onChange={(value: number) =>
                form.setFieldValue('maxAttendance', value)
              }
              error={form.errors.maxAttendance}
            />
          </Group>

          <TextInput
            className={classes.InputField}
            size="md"
            placeholder="write what this activity about"
            label="Activity Description"
            value={form.values.activityDescription}
            onChange={(event) =>
              form.setFieldValue(
                'activityDescription',
                event.currentTarget.value
              )
            }
            error={form.errors.activityDescription}
          />

          <TextInput
            className={classes.InputField}
            size="md"
            placeholder="google maps link"
            label="Location URL"
            value={form.values.locationURL}
            onChange={(event) =>
              form.setFieldValue('locationURL', event.currentTarget.value)
            }
            error={form.errors.locationURL}
          />

          <TextInput
            className={classes.InputField}
            size="md"
            placeholder="General Info About the Location  e.g. bldg 57 room 308"
            label="Location Description"
            value={form.values.locationDescription}
            onChange={(event) =>
              form.setFieldValue(
                'locationDescription',
                event.currentTarget.value
              )
            }
            error={form.errors.locationDescription}
          />

          <Select
            data={[
              'React',
              'Angular',
              'Svelte',
              'Vue',
              'Riot',
              'Next.js',
              'Blitz.js',
            ]}
            size="md"
            className={classes.InputField}
            label="Event Supervisor"
            placeholder="Pick Club Members to be Supervisor"
            searchable
            nothingFound="Nothing found"
            value={form.values.eventSupervisor}
            onChange={(supervisor: string) =>
              form.setFieldValue('eventSupervisor', supervisor)
            }
            error={form.errors.eventSupervisor}
          />
          <Group position="center" m="md" className={classes.InputField}>
            <FileInput
              placeholder="Upload File"
              icon={<IconUpload size={20} />}
              label="Upload Activity Image"
              accept="image/png,image/jpeg"
              error={form.errors.imageFile}
            />
          </Group>
          <Group position="right" mt="lg">
            <Button color="red" onClick={closeModal}>
              Cancel
            </Button>
            <Button color="green" type="submit">
              Confirm
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  )
}

export default ActivityCreateModal
