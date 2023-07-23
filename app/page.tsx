import Posts from './components/Posts'

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <div className='justify-center mx-auto mt-5 text-4xl text-neutral-900 content-center dark:text-white/90'></div>
      <Posts/>
      <div className='prose justify-center text-sm '></div>
    </main>
  )
}
