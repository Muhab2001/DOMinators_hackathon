import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const InvoiceDownload = dynamic(() => import('./InvoiceDownload'), {
  ssr: false,
})

const InvoiceDownloadButton = ({ activityData, invoicesData }) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
    // console.log('in download ')

    // console.log(invoicesData)
  }, [])

  return (
    <InvoiceDownload invoicesData={invoicesData} activityData={activityData} />
  )
}

export default InvoiceDownloadButton
