import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html className="overscroll-none">
        <Head />
        <body className="bg-[#f4f7fa]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
