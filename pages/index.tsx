import Head from 'next/head'
import HomePage from './HomePage'

export default function index() {
  return (
    <>
    <Head>
      <title>Rechauffement Climatique</title>
      <meta name='keywords' content='rechauffement climatique' />
    </Head>
    <div>
      <main>
        <HomePage />
      </main>
    </div>
    </>
  )
}
