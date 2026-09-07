import './globals.css'

export const metadata = {
  title: 'Oasis - Recovery App for Addiction',
  description: 'Your space to heal. One day at a time. Track your recovery journey with Oasis.',
  openGraph: {
    title: 'Oasis - Recovery App',
    description: 'Track your recovery journey one day at a time',
    url: 'https://oasis-app.com',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
