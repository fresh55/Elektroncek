import HeaderIcon from "./HeaderIcon"
import NewProductButton from "./NewProductButton";
import { BiBell } from 'react-icons/bi';
import UserMenu from "./UserMenu";
import getCurrentUser from "../../app/actions/getCurretUser"


async function UserPanel() {
 const currentUser = await getCurrentUser();
 console.log(currentUser);
  return (
    <div className="relative">
    <div className="flex items-center flex-row gap-6">

      <NewProductButton/>
      <HeaderIcon icon={<BiBell size={24} />} />
      <div className="flex items-center flex-row gap-3">
      
        <UserMenu {...currentUser}/>
      </div>
    
      </div>
    </div>
  )
}

export default UserPanel
