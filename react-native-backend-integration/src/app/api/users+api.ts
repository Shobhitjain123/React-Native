import { db } from "@/lib/db";
export async function GET() {
  try {
    const result = await db.execute({
      sql: "Select * from users_data",
    });
    return Response.json({
      message: "User Data Fetched Successfully",
      data: result.rows,
      status: 200,
    });
  } catch (error) {}
}
export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return Response.json({
      error: "Name and email are required",
      status: 400,
    });
  }

  try {
    const result = await db.execute({
      sql: "INSERT INTO users_data (name, email) VALUES (?, ?",
      args: [name, email],
    });
    return Response.json({
      message: "User created successfully",
      data: { id: result.lastInsertRowid },
      status: 201,
    });
  } catch (error) {
    return Response.json({ error: "Failed to create user", status: 500 });
  }
}
