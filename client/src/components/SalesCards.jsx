import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";

function SalesCards() {

return(

<div className="grid md:grid-cols-2 gap-6">

{/* Sales Card */}

<div className="bg-[#1e293b] p-6 rounded-xl flex items-center gap-4 shadow-lg hover:scale-105 transition">

<div className="bg-green-500 p-4 rounded-full text-white text-xl">
<FaRupeeSign/>
</div>

<div>

<p className="text-gray-400 text-sm">
Today's Sales
</p>

<h2 className="text-3xl font-bold text-white">
₹0.00
</h2>

</div>

</div>

{/* Orders Card */}

<div className="bg-[#1e293b] p-6 rounded-xl flex items-center gap-4 shadow-lg hover:scale-105 transition">

<div className="bg-blue-500 p-4 rounded-full text-white text-xl">
<FaShoppingCart/>
</div>

<div>

<p className="text-gray-400 text-sm">
Today's Orders
</p>

<h2 className="text-3xl font-bold text-white">
0
</h2>

</div>

</div>

</div>

)

}

export default SalesCards