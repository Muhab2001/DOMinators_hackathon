import {
  Button,
  ColorPicker,
  Drawer,
  FileInput,
  Group,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { useState } from 'react'
import { Upload } from 'tabler-icons-react'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

interface ClubEditDrawerProps {
  visible: boolean
  onClose: () => void
  description: string
  accentColor: string
}

const schema = z.object({
  description: z.string().min(30).max(300),
  logo: z.instanceof(File).optional(),
  header: z.instanceof(File).optional(),
  accentColor: z.string(),
})

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
      form.setFieldValue('description', editor.getText());
    }
  })

  const form = useForm({
    initialValues: {
      description: description,
      logo: null,
      header: null,
      accentColor: accentColor,
    },
    validate: zodResolver(schema),
  })


  

  return (
    <>
      <Drawer
        title={<Title order={2}>Edit Club Profile</Title>}
        onClose={onClose}
        opened={visible}
      >
        <Text>Edit the contents of your Club profile</Text>
        <form>
          <TextInput label="Description" placeholder="Enter Club Description" />
          <FileInput
            icon={<Upload size={16} />}
            {...form.getInputProps('logo')}
          />
          <FileInput
            icon={<Upload size={16} />}
            {...form.getInputProps('header')}
          />
          <Title order={4}>Accent Color</Title>
          <ColorPicker />
          <RichTextEditor
            
            editor={editor}
          >
            <RichTextEditor.Toolbar sticky stickyOffset={60}>
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
                <RichTextEditor.Underline />
                <RichTextEditor.Strikethrough />
                <RichTextEditor.ClearFormatting />
                <RichTextEditor.Highlight />
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
                <RichTextEditor.Subscript />
                <RichTextEditor.Superscript />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Link />
                <RichTextEditor.Unlink />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
          </RichTextEditor>
          <Group spacing={8}>
            <Button color="blue">Submit</Button>
            <Button color="grey">Cancel</Button>
          </Group>
        </form>
      </Drawer>
    </>
  )
}

export default ClubEditDrawer
