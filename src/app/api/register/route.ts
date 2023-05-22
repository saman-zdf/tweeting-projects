import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import * as bcrypt from "bcrypt";
import * as Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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
  });

  const token = Jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
    },
    "secret",
    {
      expiresIn: "90d",
    }
  );
  const { password, ...userObject } = user;

  return NextResponse.json({ user: userObject, token });
}
