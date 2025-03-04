export const dynamic = "force-static";

export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
    { id: 4, name: "Home & Garden" },
    { id: 5, name: "Sports & Outdoors" },
    { id: 6, name: "Toys & Games" },
    { id: 7, name: "Health & Beauty" },
    { id: 8, name: "Kids & Baby" },
    { id: 9, name: "Automotive" },
    { id: 10, name: "Pets" },
    { id: 11, name: "Home & Office" },
    { id: 12, name: "Furniture" },
  ];
  return Response.json(categories);
}
