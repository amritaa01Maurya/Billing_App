import Navbar from "../components/Navbar"
import SalesCards from "../components/SalesCards"
import OrdersTable from "../components/OrdersTable"

function Dashboard(){

return(

<div className="bg-[#0f172a] min-h-screen">

<Navbar/>

<div className="p-8">

<h1 className="text-2xl font-bold text-white mb-6">
Admin Dashboard
</h1>

<SalesCards/>

<OrdersTable/>

</div>

</div>

)

}

export default Dashboard