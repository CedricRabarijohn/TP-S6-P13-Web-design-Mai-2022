import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
type Props = {}
const NotFound = (props: Props) => {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/")
    },3000)
  },[])
  return (
    <div style={{textAlign:'center'}}>Page not found</div>
  )
}
export default NotFound