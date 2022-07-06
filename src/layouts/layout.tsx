import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
  ]

  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <header className='sticky top-0 flex h-14 items-center justify-center bg-purple-200 font-semibold'>
          Next.js Flowbite Sample
        </header>
        <div className='flex flex-1 flex-col md:flex-row'>
          <aside className='w-full bg-fuchsia-100 md:w-60'>
            <nav>
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className='m-2' key={title}>
                    <Link href={href}>
                      <a
                        className={`flex cursor-pointer rounded bg-fuchsia-200 p-2 hover:bg-fuchsia-400 ${
                          router.asPath === href && 'bg-fuchsia-600 text-white'
                        }`}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
