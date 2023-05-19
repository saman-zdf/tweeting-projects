import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  const body: RequestBody = await request.json();

  const saltRound: number = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRound);
  const user = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: hashPassword,
    },
    select: {
      username: true,
      email: true,
    },
  });

  return NextResponse.json(user);
}
