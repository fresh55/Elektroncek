import Container from "./Container";
import Logo from "./header/HeaderLogo";
import Search from "./Search"
import UserPanel from "./header/UserPanel";

const Header = () =>       {
  return (

    <div className="w-full">
    
    <div className="border-b-[1px] py-5 shadow-sm" >
    <Container>
    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
    <Logo href="/" title="Home"/>
    <Search/>
    {/* @ts-expect-error Server Component */}
    <UserPanel/>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default Header
