import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { monserrat } from './fonts';

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Fidepuntos</title>
      </head>
      <body className={`${monserrat.className} antialiased `}>
        <Navbar />

        <main className='pt-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
