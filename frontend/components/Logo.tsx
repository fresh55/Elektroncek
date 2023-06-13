import Image from 'next/image';
interface LogoProps{
    active?: boolean,
    size?: number
}
function Logo({active=false,size=50}) {
  return (
    <div>
      {active
        ? <Image alt="Logo" height={size} width={size} src="/images/logo1.png" />
        : <Image alt="Logo" height={size} width={size} src="/images/logo1.png"/>
      }
    </div>
  )
}

export default Logo
