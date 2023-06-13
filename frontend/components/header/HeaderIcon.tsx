import type {ReactElement} from 'react';

interface HeaderIconProps{

    icon:ReactElement

}

function HeaderIcon({icon}:HeaderIconProps) {
    return (
        <div className="flex items-center cursor-pointer justify-center hover:bg-slate-300/50 rounded-xl h-9 w-9">
        {icon}
        </div>
    )
    }

export default HeaderIcon;