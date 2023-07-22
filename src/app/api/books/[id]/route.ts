import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const bookId = parseInt(params.id);
  const book = books.find((book) => book.id === bookId);
  return NextResponse.json({ book });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const bookId = parseInt(params.id);
  const body = await request.json();
  const book = books.findIndex((book) => book.id === bookId);
  console.log(book);
  if (book >= 0) {
    books[book] = body;
    return NextResponse.json({
      message: `Book Updated ${bookId}`,
      books,
    });
  }
  return NextResponse.json({
    message: `No book found against this ID ${bookId}`,
  });
}
