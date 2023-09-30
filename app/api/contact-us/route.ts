import { sendMail } from "@/service/mailService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const subject = `Message from ${res.name}`;
    const body = `${res.body}  \nSender e-mail: ${res.email}`;
    await sendMail(subject, body);

    return NextResponse.json("Success");
  } catch (error) {
    NextResponse.json("Error", { status: 400 });
  }
}
