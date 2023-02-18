import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm, zodResolver } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Modal,
} from '@mantine/core'
import { z } from 'zod'
import useSWRMutation from 'swr/mutation'
import { UserClient } from '@/clients/users'

const schema = z
  .object({
    email: z.string().email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(6, { message: 'Password should include at least 6 characters' }),
    confirmPassword: z.string().min(6),
    name: z
      .string()
      .min(5, { message: 'Name should include at least 5 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
  })

interface AuthenticationFormProps {
  visible: boolean
  onClose: () => void
}

export function LoginModal({
  visible,
  onClose: closeModal,
}: AuthenticationFormProps) {
  const [type, toggle] = useToggle(['Login', 'Register'])
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(schema),
  })

  const { trigger: login } = useSWRMutation('login/', UserClient.login)

  // const { trigger: register } = useSWRMutation('login/', UserClient.register)

  return (
    <Modal
      size={'md'}
      centered
      opened={visible}
      onClose={closeModal}
      title={
        <Text color="blue" pb={10} size="xl" weight={500}>
          {type} to KFUPM clubs
        </Text>
      }
    >
      <form onSubmit={form.onSubmit(async (values) => {
        if (type === 'Login') {
         await  login(values)
        } else {
          // register(values)
        }
      })}>
        <Stack>
          {type === 'Register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
            />
          )}
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
          />
          {type === 'Register' && (
            <PasswordInput
              required
              label="Confirm Psssword"
              placeholder="Confirm your password"
              value={form.values.confirmPassword}
              onChange={(event) =>
                form.setFieldValue('confirmPassword', event.currentTarget.value)
              }
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
            />
          )}
        </Stack>
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'Register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Modal>
  )
}
