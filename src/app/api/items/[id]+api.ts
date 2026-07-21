import {
  deleteGroceryItem,
  setGroceryItemPurchased,
  updateGroceryQuantity,
} from "@/lib/server/db-actions";

export async function DELETE(_request: Request, { id }: { id: string }) {
  try {
    await deleteGroceryItem(id);
    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete item";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request, { id }: { id: string }) {
  try {
    const body = await request.json();

    const item = body.quantity
      ? await updateGroceryQuantity(id, body.quantity)
      : await setGroceryItemPurchased(id, body.purchased ?? true);

    if (!item)
      return Response.json({ error: "item not found" }, { status: 404 });

    return Response.json({ item });
  } catch (error) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : "Failed to updated item";
    return Response.json({ error: message }, { status: 500 });
  }
}
