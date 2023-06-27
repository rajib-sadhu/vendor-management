

import dbConnect from "@/utils/dbCon";
import Connect from "@/models/connect";
import { NextResponse } from "next/server";


export async function POST(req, res) {

    try {
        await dbConnect();
        const body = await req.json();

        await Connect.create(body);

        return NextResponse.json({message: "Vendor added successfully", success:true },{status: 200});

    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Server Error, please try again" },
            { status: 500 }
        )
    }

}