import { useRouter } from 'next/router'

type TNavlink = {
   children: any,
   href:string
}

function Navlink({ children, href }:TNavlink) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  console.log(router.asPath);
  

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className="text-md leading-13 text-white mobile-laptop:p-3 block">
      {children}
    </a>
  )
};

export default Navlink;