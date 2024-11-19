import Link from 'next/link'
import Logos from "@/public/img/logo.webp"

export default function Logo(props:{className?:string}) {
  return (
    <Link href="/" className="block" aria-label="A-GroTech">
      <img src={Logos.src} className={props.className} />
        {/*<img src="../../public/images/agrotech-logo.svg" alt="aaaa"/>*/}
      {/*<svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <LogoBasah/>*/}
      {/*</svg>*/}
    </Link>
  )
}
