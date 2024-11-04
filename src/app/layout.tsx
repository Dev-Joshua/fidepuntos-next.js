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
      <body className={`${monserrat.className} antialiased`}>
        <Navbar />
        <hr className='bg-white pt-px' />
        {children}
        <Footer />
      </body>
    </html>
  );
}
