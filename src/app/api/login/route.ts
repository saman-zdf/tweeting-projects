import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}

export async function Post(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  const isPasswordMatch =
    user && (await bcrypt.compare(body.password, user?.password));

  // TODO: If the isPasswordMatch does not work, we need to do the check on the bcrypt itself.
  if (user && isPasswordMatch) {
    const { password, ...userWithNoPass } = user;
    return NextResponse.json(userWithNoPass);
  } else {
    return NextResponse.json({ message: "Given credentials does not match." });
  }
}
