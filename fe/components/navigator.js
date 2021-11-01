import Link from 'next/link'
const Navigator = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navigator
