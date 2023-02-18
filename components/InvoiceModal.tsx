import { ActivityClient } from '@/clients/activities'
import {
  Button,
  Divider,
  Group,
  Modal,
  NumberInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import useSWR from 'swr'
import { FileInvoice, Link, Printer, Trash } from 'tabler-icons-react'
import { z } from 'zod'

interface InvoiceModalProps {
  visible: boolean
  onClose: () => void
  activity_id: string | number
}

const schema = z.object({
  invoices: z
    .object({
      amount: z.number().min(0),
      seller: z.string().min(5),
      description: z.string().min(5),
      date: z.date(),
      id: z.number().min(0),
    })
    .array()
    .min(1),
})

function InvoiceModal({ visible, onClose, activity_id }: InvoiceModalProps) {
  const { data, error, isLoading } = useSWR(
    {
      key: 'fetch_existing_invoice',
      id: activity_id,
    },
    ActivityClient.getInvoice
  )

  const form = useForm({
    initialValues: {
      invoices: [
        {
          id: 0,
          date: new Date(),
          amount: 0,
          description: '',
          seller: '',
        },
      ],
    },
    validate: zodResolver(schema),
  })

  const invoices = form.values.invoices.map((_, index) => {
    return (
      <Stack mb={16}>
        <Group>
          <Text weight={900} size={'xl'}>
            Invoice # {index + 1}
          </Text>
          {index !== 0 && (
            <>
              <Button
                variant="light"
                onClick={() => {
                  form.removeListItem('invoices', index)
                }}
                leftIcon={<Trash />}
                color="red"
              >
                Delete invoice
              </Button>
            </>
          )}{' '}
        </Group>
        <TextInput
          label="Seller"
          {...form.getInputProps('invoices.seller')[index]}
        />
        <TextInput
          label="Description"
          {...form.getInputProps('invoices.description')[index]}
        />
        <NumberInput
          label="Amount"
          {...form.getInputProps('invoices.amount')[index]}
        />
        <NumberInput
          label="Invoice number"
          {...form.getInputProps('invoices.id')[index]}
        />
      </Stack>
    )
  })

  return (
    <>
      <Modal
        size={'lg'}
        title={<Text weight={700}>Invoice Composer</Text>}
        opened={visible}
        onClose={onClose}
      >
        <form onSubmit={form.onSubmit((values) => {})}>
          {invoices}
          <Button
            leftIcon={<FileInvoice />}
            variant="light"
            mb={8}
            my={8}
            onClick={() =>
              form.insertListItem('invoices', {
                id: 0,
                date: new Date(),
                amount: 0,
                description: '',
                seller: '',
              })
            }
            style={{ flex: 1, width: '100%' }}
          >
            Add a new invoice
          </Button>
        </form>
        <Button
          onClick={() => {
            // triggering pdf report printing
          }}
          leftIcon={<Printer />}
          style={{ flex: 1, width: '100%' }}
        >
          Print Invoice
        </Button>
        <Divider my={6} />
        <Group>
          <Button>Save</Button>
          <Button color="gray" variant="outline">
            Cancel
          </Button>
        </Group>
      </Modal>
    </>
  )
}

export default InvoiceModal
