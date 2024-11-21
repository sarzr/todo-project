import { createTodo, todosList } from "@/server/services/todos.service";
import { authorization } from "@/server/services/users.service";
import { createTodoSchema } from "@/server/validations/todo.validation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// get todo
export const GET = async (req: Request) => {
  const token = req.headers.get("Authorization") || "";
  const userId = await authorization(token);

  if (!userId) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
  const todos = await todosList(userId as string);

  return Response.json({ data: todos });
};

// create todo
export const POST = async (req: Request) => {
  const body = await req.json();

  const token = req.headers.get("Authorization") || "";
  const userId = await authorization(token);

  if (!userId) {
    return NextResponse.json(
      {
        error: "UserId not found",
      },
      {
        status: 401,
      }
    );
  }

  const newBody = { ...body, userId };

  if (!(await authorization(token))) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const validationResult = createTodoSchema.safeParse(body);

  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error,
      },
      { status: 400 }
    );
  }
  if (!(await createTodo(newBody))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
  return Response.json({ message: "ok" });
};
