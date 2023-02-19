import { Button } from '@mantine/core'
import { PDFDownloadLink } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import InvoicePDF from './InvoicePDF'
import { Download } from 'tabler-icons-react'

const InvoiceDownload = ({ activityData, invoicesData }) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
    console.log('in use effect')
    console.log(invoicesData)
  }, [])

  return (
    <PDFDownloadLink
      document={
        <InvoicePDF activityData={activityData} invoicesData={invoicesData} />
      }
      fileName={`${invoicesData.title}.pdf`}
    >
      {({ blob, url, loading, error }) => (
        <Button
          style={{ flex: 1, width: '100%' }}
          disabled={loading}
          color={loading ? 'gray' : 'green'}
          leftIcon={<Download size={16} />}
        >
          Download Now
        </Button>
      )}
    </PDFDownloadLink>
  )
}

export default InvoiceDownload
