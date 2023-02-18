/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer'
import { useState, useEffect } from 'react'

const borderColor = '#000000'
const tableRowsCount = 11

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: '100%',
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportTitle: {
    // color: '',
    letterSpacing: 2,
    fontSize: 32,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-start',
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: 'bold',
  },
  label: {
    width: 60,
  },
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontWeight: 700,
    // fontFamily: 'Helvetica-Oblique',
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#000000',
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000000',
    backgroundColor: '#888888',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  description: {
    width: '60%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: '15%',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  total: {
    width: '15%',
    textAlign: 'right',
    paddingRight: 8,
  },
})

const InvoicePDF = ({ invoice }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src="/assets/kfupm.png" />
        <InvoiceTitle title={invoice.title} />
        <InvoiceNo invoice={invoice} />
        <BillTo invoice={invoice} />
        <InvoiceItemsTable invoice={invoice} />
      </Page>
    </Document>
  )
}

const InvoiceTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
)

const InvoiceNo = ({ invoice }) => (
  <>
    <View style={styles.invoiceNoContainer}>
      <Text style={styles.invoiceDate}>
        His Excellency the Director General of the Student Fund,
      </Text>
    </View>
    {/* <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Date: </Text>
      <Text>{invoice.trans_date}</Text>
    </View> */}
  </>
)

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>Bill To:</Text>
    <Text>Club: {invoice.club}</Text>
    <Text>Supervisor: {invoice.supervisor}</Text>
    <Text>Amount: {invoice.amount} SR</Text>
    <Text>Justification: {invoice.justification}</Text>
  </View>
)

const InvoiceItemsTable = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={invoice.items} />
    <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} />
    <InvoiceTableFooter items={invoice.items} />
  </View>
)

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.rate}>@</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
)

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.sno.toString()}>
      <Text style={styles.description}>{item.desc}</Text>
      <Text style={styles.qty}>{item.qty}</Text>
      <Text style={styles.rate}>{item.rate}</Text>
      <Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>
    </View>
  ))
  return <>{rows}</>
}

const InvoiceTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0)
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.description}>-</Text>
      <Text style={styles.qty}>-</Text>
      <Text style={styles.rate}>-</Text>
      <Text style={styles.amount}>-</Text>
    </View>
  ))
  return <>{rows}</>
}

const InvoiceTableFooter = ({ items }) => {
  const total = items
    .map((item) => item.qty * item.rate)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return (
    <View style={styles.row}>
      <Text style={styles.description}>TOTAL</Text>
      <Text style={styles.total}>{Number.parseFloat(total).toFixed(2)}</Text>
    </View>
  )
}

export default InvoicePDF
