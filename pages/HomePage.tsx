import React from 'react'
import Link from 'next/Link'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <h1>
        Rechauffement Climatiqueee
      </h1>
      <Link href="/Definition">Definition</Link>
      <Link href="/Causes">Causes</Link>
      <Link href="/Consequences">Conséquences</Link>
    </div>
  )
}

export default HomePage