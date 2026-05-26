import { db } from "@/lib/db";

interface Ctx {
  id: string;
}

export async function GET(_req: Request, params: Ctx) {
  try {
    const { id } = params;
    const result = await db.execute({
      sql: "Select * from users_data where id = ?",
      args: [id],
    });
    return Response.json({
      message: "User Data Fetched Successfully",
      data: result.rows,
      status: 200,
    });
  } catch (error) {
    return Response.json({
      error: "User not found",
      status: 404,
    });
  }
}
