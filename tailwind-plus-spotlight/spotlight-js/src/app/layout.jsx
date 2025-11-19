import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Values Caucus',
    default:
      'Values Caucus at the United Nations',
  },
  description:
    'The Mission of the Values Caucus at the United Nations in New York is to provide an open forum, in the context of the UN, where we can safely and respectfully discuss and explore our values, old and new, shared and differing, in order to allow a new culture to emerge that serves all of humanity and the planet upon which we live.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
