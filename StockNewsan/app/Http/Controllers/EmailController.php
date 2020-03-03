<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class EmailController extends Controller
{
    public function contact(Request $request){
        $request->all();
        $subject = "Asunto del correo";
        $for = $request->email;
        $for2 = "manuelalejandro.martinez@newsan.com.ar";
        Mail::send('email',$request->all(), function($msj) use($subject,$for,$for2){
            $msj->from("enns@newsan.com.ar","enns");
            $msj->subject($subject);
            $msj->to($for);
            // $msj->cc($for2);
        });
        return redirect()->back();
    }
}
