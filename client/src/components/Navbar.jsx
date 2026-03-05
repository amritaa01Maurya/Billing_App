import { useState } from "react";
import {
  FaTachometerAlt,
  FaSearch,
  FaBoxOpen,
  FaList,
  FaUsers,
  FaHistory
} from "react-icons/fa";

function Navbar() {

const [open,setOpen] = useState(false)

return(

<div className="bg-[#0f172a] text-white px-8 py-4 flex justify-between items-center shadow-lg">

{/* Left Menu */}
<div className="flex gap-8 text-sm font-semibold items-center">

<div className="flex items-center gap-2 text-yellow-400 cursor-pointer hover:text-yellow-300">
<FaTachometerAlt/>
<span>DASHBOARD</span>
</div>

<div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
<FaSearch/>
<span>EXPLORE</span>
</div>

<div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
<FaBoxOpen/>
<span>MANAGE ITEMS</span>
</div>

<div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
<FaList/>
<span>MANAGE CATEGORIES</span>
</div>

<div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
<FaUsers/>
<span>MANAGE USERS</span>
</div>

<div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
<FaHistory/>
<span>ORDER HISTORY</span>
</div>

</div>

{/* Profile */}
<div className="relative">

<img
src="https://i.pravatar.cc/40"
className="w-9 h-9 rounded-full cursor-pointer"
onClick={()=>setOpen(!open)}
/>

{open && (

<div className="absolute right-0 mt-3 bg-white text-black rounded-lg shadow-lg w-44">

<div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
Settings
</div>

<div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
Activity Log
</div>

<div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
Logout
</div>

</div>

)}

</div>

</div>

)

}

export default Navbar