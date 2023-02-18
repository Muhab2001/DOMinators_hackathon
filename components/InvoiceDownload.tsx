import { Button } from '@mantine/core'
import { PDFDownloadLink } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import InvoicePDF from './InvoicePDF'

const InvoiceDownload = ({ invoiceData }) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <PDFDownloadLink
      document={<InvoicePDF invoice={invoiceData} />}
      fileName={`${invoiceData.title}.pdf`}
    >
      {({ blob, url, loading, error }) => (
        <Button disabled={loading} color={loading ? 'gray' : 'green'}>
          Download Now
        </Button>
      )}
    </PDFDownloadLink>
  )
}

export default InvoiceDownload
