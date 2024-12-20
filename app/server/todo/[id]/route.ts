import {
  deleteTodo,
  patchTodo,
  todoById,
  updateTodo,
} from "@/server/services/todos.service";
import { authorization } from "@/server/services/users.service";
import {
  patchTodoSchema,
  updateTodoSchema,
} from "@/server/validations/todo.validation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// update body
export const PUT = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
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

  const body = await req.json();

  const updatevalidationResult = updateTodoSchema.safeParse(body);

  if (!updatevalidationResult.success) {
    return NextResponse.json(
      {
        error: updatevalidationResult.error,
      },
      { status: 400 }
    );
  }

  const id = (await params).id;
  const todo = await todoById(id);
  if (!todo) {
    return NextResponse.json(
      {
        error: "Todo not found",
      },
      { status: 404 }
    );
  }

  if (!(await updateTodo(id, body))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
  return Response.json({ message: "ok" });
};

// patch completed

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
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

  const body = await req.json();

  console.log(body);

  if (!patchTodoSchema.safeParse(body).success) {
    return NextResponse.json(
      {
        error: "Invalid body",
      },
      { status: 400 }
    );
  }
  const id = (await params).id;
  const todo = await todoById(id);

  if (!todo) {
    return NextResponse.json(
      {
        error: "todo not found",
      },
      { status: 404 }
    );
  }

  if (!(await patchTodo(id, JSON.parse(body.completed)))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
  return Response.json({ message: "ok" });
};

// delete todo

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
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

  const id = (await params).id;
  const todo = await todoById(id);
  if (!todo) {
    return NextResponse.json(
      {
        error: "todo not found",
      },
      { status: 404 }
    );
  }
  if (!(await deleteTodo(id))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
  return Response.json({ message: "ok" });
};
