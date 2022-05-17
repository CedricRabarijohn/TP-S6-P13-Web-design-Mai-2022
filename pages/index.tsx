import Head from 'next/head'
import HomePage from './HomePage'

export default function index() {
  return (
    <>
    <Head>
      <title>Rechauffement Climatique</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"></link>
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
