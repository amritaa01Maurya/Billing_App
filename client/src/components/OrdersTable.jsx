function OrdersTable(){

return(

<div className="bg-[#1e293b] rounded-xl p-6 mt-8 shadow-lg">

<h3 className="text-white text-lg font-semibold mb-4">
Recent Orders
</h3>

<table className="w-full text-sm">

<thead className="text-gray-400 border-b border-gray-700">

<tr>

<th className="py-3 text-left">Order ID</th>
<th className="text-left">Customer</th>
<th className="text-left">Amount</th>
<th className="text-left">Payment</th>
<th className="text-left">Status</th>
<th className="text-left">Time</th>

</tr>

</thead>

<tbody className="text-gray-300">

<tr className="border-b border-gray-800 hover:bg-gray-800">

<td className="py-3">#001</td>
<td>John Doe</td>
<td>₹500</td>
<td>UPI</td>

<td>

<span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
Completed
</span>

</td>

<td>2 mins ago</td>

</tr>

</tbody>

</table>

</div>

)

}

export default OrdersTable