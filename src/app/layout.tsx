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
        <title>Home - Fidepuntos</title>
      </head>
      <body className={`${monserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
