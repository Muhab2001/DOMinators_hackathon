import { Button } from '@mantine/core'
import { PDFDownloadLink } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import InvoicePDF from './InvoicePDF'

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
        <InvoicePDF activityData={activityData} invoicesData={invoicesData}/>
      }
      fileName={`${invoicesData.title}.pdf`}
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
