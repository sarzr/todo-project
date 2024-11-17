import { createTodo, todosList } from "@/server/services/todos.service";
import { authorization } from "@/server/services/users.service";
import { createTodoSchema } from "@/server/validations/todo.validation";
import { NextResponse } from "next/server";

// get todo
export const GET = async () => {
  return Response.json({ data: await todosList() });
};

// create todo
export const POST = async (req: Request) => {
  const body = await req.formData();

  const token = req.headers.get("Authorization") || "";

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

  const validationResult = createTodoSchema.safeParse({
    title: body.get("title")?.toString() || "",
    description: body.get("description")?.toString() || "",
    priorities: body.get("priorities")?.toString(),
    completed: body.get("completed"),
  });

  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error,
      },
      { status: 400 }
    );
  }
  if (!(await createTodo(body))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
  return Response.json({ message: "ok" });
};
