import Link from 'next/link'
import Container from '../components/container'

export default function SideNav() {
  return (
    <div className="py-6 max-w-fit fixed top-64 right-1 pr-52">
      <Container>
        <div className='flex justify-end'>
        <nav className="flex flex-col space-x-4 items-end font-semibold"> 
            <Link href="/">|About Me</Link>
            <Link href="/posts">|Posts</Link>
        </nav>
        </div>
      </Container>
    </div>
  )
}
