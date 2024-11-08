import { redirect } from 'next/navigation';

// Dejo login como redireccionamiento principal
export default function Home() {
  redirect('/login');
}
