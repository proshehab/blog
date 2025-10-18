<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validated->errors()
            ], 400);
        }

        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            return response()->json(['message' => 'Authenticated successfully'], 200);
        }


        return response()->json(['message' => 'Authentication failed'], 401);
    }
}
