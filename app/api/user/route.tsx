import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";
import axios from "@/node_modules/axios/index";



export function GET(){
    // database logic
    return Response.json({
        name: "Nishan",
        email: "Nishan_29@gmail.com"
    })
};




//Handler POST created
const client = new PrismaClient();
export async function POST(req: NextRequest){
    
    // extract the body since no DB is available
    const body = await req.json();
    //console.log(body);
    client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in"
    })
}

// export async function GET() {
//     const user = await client.user.findFirst({});
//     return Response.json({ name: user?.username, email: user?.username })
// }



// Express

// app.get("/api/user", (req,res) => {
//     res.json({
//         name: "Nishan",
//         email: "Nishan_29@gmail.com"
//     })
// })
