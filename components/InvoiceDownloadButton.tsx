import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const InvoiceDownload = dynamic(() => import('./InvoiceDownload'), {
  ssr: false,
})

const InvoiceDownloadButton = ( {invoiceData} ) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return <InvoiceDownload invoiceData = {invoiceData}/>
}

export default InvoiceDownloadButton
