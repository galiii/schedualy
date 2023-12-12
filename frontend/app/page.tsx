

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <p><Link href="/register">Register</Link></p>
      <p><Link href="/login">Login</Link></p>
      <p><Link href="/company">Company</Link></p>
    </main>
  )
}
