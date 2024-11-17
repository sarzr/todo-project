import PocketBase from "pocketbase";

export const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKET_BASE_URL);

await pb.admins.authWithPassword(
  process.env.NEXT_PUBLIC_POCKET_BASE_USERNAME as string,
  process.env.NEXT_PUBLIC_POCKET_BASE_PASSWORD as string
);
