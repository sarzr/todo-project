import { signupUser } from "@/server/services/users.service";
import { authSchema } from "@/server/validations/auth.validation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
  const body = await req.json();

  console.log(body);

  const validationResult = authSchema.safeParse(body);

  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error,
      },
      { status: 400 }
    );
  }

  const token = crypto.randomUUID();

  if (!(await signupUser(body, token))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }

  return Response.json({ token });
};
