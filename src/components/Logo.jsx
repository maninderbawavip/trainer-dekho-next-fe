import Image from "next/image"
import logo from '@/images/logos/orange-logo.svg'

export function Logo(props) {
  return (
    <Image src={logo} alt="me" width={200} height={70} />
  )
}
