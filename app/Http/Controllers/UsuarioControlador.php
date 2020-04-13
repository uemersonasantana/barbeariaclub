<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsuarioControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::orderBy('name', 'asc')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        
        $request->validate([
            'name'      => 'required'
            ,'email'    => 'email|unique:users'
        ]);

        $User = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $result = User::where('users.id', $User->id)->get(
                [
                    'users.id'
                    ,'users.name'
                    ,'users.email'
                ]
            );
        
        return response()->json($result,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $request->validate([
            'name'      => 'required'
            ,'email'        => 'email|unique:users,email,'.$request->id
            ,'password'        => 'required|confirmed'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $result = User::
            where('users.id', $request->id)->get(
                [
                    'users.id'
                    ,'users.name'
                    ,'users.email'
                ]
            );
        return response()->json($result,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'name'       => 'required'
            ,'email'     => 'email|unique:users,email,'.$request->id
            ,'password'  => 'required|confirmed'
        ]);
        
        $User = User::find($request->id);
        
        $User->name        = $request->name;
        $User->email       = $request->email;
        $User->password    = $request->password;
        
        $User->save();

        return response()->json(User::where('id', $User->id)->get(),200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (isset($user)) {
            $user->delete();
            return 204;
        }
        return response('Not Found!', 404);
    }
}
