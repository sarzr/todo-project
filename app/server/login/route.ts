import {
  getUsersByCredentials,
  loginUser,
} from "@/server/services/users.service";
import { authSchema } from "@/server/validations/auth.validation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        error: "Invalid body",
      },
      {
        status: 400,
      }
    );
  }

  const authValidationResult = authSchema.safeParse(body);
  if (!authValidationResult.success) {
    return NextResponse.json(
      {
        error: authValidationResult.error,
      },
      {
        status: 404,
      }
    );
  }

  const user = await getUsersByCredentials(body.username, body.password);

  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  const token = crypto.randomUUID();
  if (!(await loginUser(user.id, token))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
  return Response.json({ token });
};
