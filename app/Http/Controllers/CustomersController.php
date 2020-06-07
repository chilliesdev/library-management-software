<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
use App\LendLog;

class CustomersController extends Controller
{
    public function index()
    {
        $customers = Customer::paginate(8);
        return $customers;
    }

    public function show(Request $request, $id)
    {
        $customer = Customer::find($id);
        return $customer;
    }

    public function books(Request $request)
    {
        $param = [
            [ 'customer_id',$request->customer ],
            [ 'library_id',$request->library ],
            [ 'status','NOTRETURNED' ]
        ];

        $logs = LendLog::where($param)->paginate(5);
        $customerBooks = [];
        foreach($logs as $log){
            array_push($customerBooks,$log->books);
        }
        return $logs;
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required|min:11',
        ]);

        $customer = new Customer;
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->save();
        
        return response()->json($customer);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->save();
        
        return response()->json($customer);
    }

    public function destroy(Request $request, $id)
    {
        $customer = Customer::find($id);
        return $customer->delete();
    }

    public function search(Request $request)
    {
        return Customer::where('name','like','%'.$request->name.'%')->paginate(5);
    }
}
