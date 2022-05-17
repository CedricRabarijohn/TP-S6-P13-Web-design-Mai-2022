import React from 'react'
type Props = {}

const getStaticPaths = async() => {
    const res = await fetch('http://localhost:3000/api/causes')
    const data = await res.json()
    const paths = data.map(cause => {
        return{
            params:{
                id: cause.id.toString()
            }
        }
    })
    return {
        paths,
        fallback:false
    }
}

const getStaticProps = async(context) => {
    const id = context.params.id
    const res = await fetch('http://localhost:3000/api/causes/'+id)
    const data = await res.json()
    return {
        props : {
            cause: data
        }
    }
}

const Details = ({cause}) => {
  return (
    <div>
        Title
        {/* <h1>{cause.title}</h1> */}
    </div>
  )
}

export default Details