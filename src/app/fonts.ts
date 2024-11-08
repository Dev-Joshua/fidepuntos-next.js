import { Montserrat } from 'next/font/google';

// Importo fuente de googlefonts mediaante biblioteca interna de NextJs
export const monserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});
