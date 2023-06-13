'use client'
import { BiSearch } from 'react-icons/bi';

function Search() {
  return (
<div className='

border-[1px]
w-full
md:w-1/3
rounded-full
shadow-sm
hover:shadow-md
transition
cursor-pointer'>
    
    <div className="flex flex-row items-center justify-beetwen ">
    <div className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-3 
            border-r-[1px] 
             
            text-center
          "
        >
            
            <BiSearch size={14}/>  
       
         
        </div>
        <input type="text"  className=" w-2/3 py-3 pl-3   text-sm outline-0"/>
        
</div>

</div>



  )
}

export default Search
