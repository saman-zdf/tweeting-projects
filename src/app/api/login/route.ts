import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import * as bcrypt from "bcrypt";
import * as Jwt from "jsonwebtoken";

interface RequestBody {
  password: string;
  email?: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  const isPasswordMatch =
    user && (await bcrypt.compare(body.password, user?.password));

  // TODO: If the isPasswordMatch does not work, we need to do the check on the bcrypt itself.
  if (user && isPasswordMatch) {
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
  } else {
    return NextResponse.json({ message: "Given credentials does not match." });
  }
}
