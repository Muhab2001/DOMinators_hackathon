// // @flow
// import * as React from 'react'
// import { Invoice } from 'react-simple-invoice'
// import { renderToStaticMarkup } from 'react-dom/server'

// export function invoice() {
//   const invoice1 = {
//     name: 'Transaction',
//     createdDate: '2018-03-16',
//     dueDate: '2018-04-16',
//     paymentMethod: 'PayPal',
//     id: 'ABCD-1234',
//     description: 'Post-show cravings',
//     items: [
//       {
//         description: 'Shake Shack',
//         amount: 9.59,
//       },
//       {
//         description: 'Crinkle Cut Fries',
//         amount: 2.99,
//       },
//     ],
//   }

//   const customer = {
//     name: 'Lin-Manuel Miranda, Founder and Producer of Hamilton, the American Musical',
//     email: 'me@linmanuel.com',
//     address: ['226 W 46th St', 'New York, NY 10036'],
//     logoUrl:
//       'http://p.fod4.com/p/media/c9c34f4e09/JqdTM3oTiqTcrbFoLdxb_Hamilton_200x200.jpg',
//   }

//   const company = {
//     name: 'Shake Shack',
//     address: ['Madison Square Park', 'New York, NY 10010'],
//     email: 'contact@shakeshack.com',
//     logoUrl:
//       'https://www.shakeshack.com/wp-content/themes/shakeshack/images/shakeshack_logo.png',
//   }
//   const html = renderToStaticMarkup(
//     <Invoice
//       invoices={[invoice1]}
//       customer={customer}
//       company={company}
//       notes={
//         <p>
//           If you have any questions, please email{' '}
//           <a href="mailto:contact@shakeshack.com">contact@shakeshack.com</a>.
//         </p>
//       }
//     />
//   )

//   return <div>html</div>
// }

export default function Invoice() {
  return (
    <>
     
    </>
  )
}
