import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Unforgettable Minahasa',
    description: 'Generated by create next app',
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    charset: "utf8"

}

export default function RootLayout({children}) {
    return (
        <html lang="en">

        <body className={inter.className}>{children}</body>
        </html>
    )
}
