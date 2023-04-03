export const metadata = {
  title: 'Hi My Next App!',
  description: 'Created by Seoin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
