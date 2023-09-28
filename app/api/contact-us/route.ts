import { sendMail } from "@/service/mailService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    await sendMail(res.name, res.email, res.body);

    return NextResponse.json("Success");
  } catch (error) {
    NextResponse.json("Error", { status: 400 });
  }
}
