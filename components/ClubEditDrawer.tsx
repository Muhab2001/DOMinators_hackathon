import {
  Button,
  ColorPicker,
  Drawer,
  FileInput,
  Group,
  ScrollArea,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  createStyles,
} from '@mantine/core'
import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { useState } from 'react'
import { Id, Social, Upload } from 'tabler-icons-react'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

interface ClubEditDrawerProps {
  visible: boolean
  onClose: () => void
  description: string
  accentColor: string
}

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const schema = z.object({
  description: z.string().min(30).max(300),
  logo: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  header: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  accentColor: z.string(),
  instagram: z.string().url().optional(),
  twitter: z.string().url().optional(),
  facebook: z.string().url().optional(),
})

const useStyles = createStyles((theme, _params, getRef) => ({
  drawerHeader: {
    margin: 16,
    height: 50,
  },
  drawerBody: {
    margin: 16,
  },
}))

function ClubEditDrawer({
  visible,
  onClose,
  description,
  accentColor,
}: ClubEditDrawerProps) {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: description,
    onUpdate: ({ editor }) => {
      form.setFieldValue('description', editor.getText())
    },
  })

  const form = useForm({
    initialValues: {
      description: description,
      logo: null,
      header: null,
      accentColor: accentColor,
      facebook: '',
      twitter: '',
      instagram: '',
    },
    validate: zodResolver(schema),
  })

  const { classes, cx } = useStyles()

  return (
    <>
      <Drawer
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
        classNames={{
          body: classes.drawerBody,
          header: classes.drawerHeader,
        }}
        size={510}
        title={
          <Text size={'xl'} weight={900}>
            Edit Club Profile
          </Text>
        }
        onClose={onClose}
        opened={visible}
      >
        <ScrollArea
          style={{
            height: 'calc(100vh - 100px)',
            position: 'absolute',
            right: -1,
            zIndex: 100,
          }}
          px={16}
        >
          <Text mb={8}>Edit the contents of your Club profile</Text>
          <form>
            <Group mt={16} align="center" spacing={8}>
              <ThemeIcon size={22} variant="light">
                <Id size={16} />
              </ThemeIcon>
              <Text size={'xl'}>Club Identity</Text>
            </Group>
            <FileInput
              label="Logo image"
              icon={<Upload size={16} />}
              {...form.getInputProps('logo')}
            />
            <FileInput
              label="Header image"
              icon={<Upload size={16} />}
              {...form.getInputProps('header')}
            />
            <Group mt={16} align="center" spacing={8}>
              <ThemeIcon size={22} variant="light">
                <Social size={16} />
              </ThemeIcon>
              <Text size={'xl'}>Club Social Links</Text>
            </Group>
            <TextInput
              {...form.getInputProps('instagram')}
              label="Instagram"
              placeholder="Enter Club Facebook account URL"
            />
            <TextInput
              {...form.getInputProps('twitter')}
              label="Twitter"
              placeholder="Enter Club Facebook account URL"
            />
            <TextInput
              {...form.getInputProps('facebook')}
              label="Facebook"
              placeholder="Enter Club Facebook account URL"
            />
            <Text mt={16} mb={5} weight={500}>
              Accent Theme Color
            </Text>
            <ColorPicker size="lg" {...form.getInputProps('accentColor')} />
            <RichTextEditor editor={editor}>
              <RichTextEditor.Toolbar sticky>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />

                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                </RichTextEditor.ControlsGroup>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>
              <RichTextEditor.Content />
            </RichTextEditor>
            <Group spacing={8}>
              <Button onClick={() => {
                
              }} color="blue">Submit</Button>
              <Button color="grey">Cancel</Button>
            </Group>
          </form>
        </ScrollArea>
      </Drawer>
    </>
  )
}

export default ClubEditDrawer
