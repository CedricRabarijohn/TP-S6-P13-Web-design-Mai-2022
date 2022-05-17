import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:3000/api/causes")
//     const data = await res.json()
//     return {
//         props: {
//             causes: data,
//         }
//     }
// }
const Causes = ({ causes }) => {
    return (
        <>
            <Head>
                <title>Causes du rechauffement climatique</title>
                <meta name='keywords' content='causes du rechauffement climatique' />
            </Head>
            {/* {causes.map(cause => (
                <>
                    <Link href={'/Causes/'+cause.id} key={cause.id}>
                        <h4><a>{cause.titre}</a></h4>
                    </Link>
                    <h5><a>{cause.description}</a></h5>
                </>
            ))} */}
        </>
    )
}

export default Causes