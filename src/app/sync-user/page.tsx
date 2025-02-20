import { db } from "@/server/db/db-prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

const SyncUser = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  if (!user.emailAddresses[0]?.emailAddress) {
    return notFound();
  }

  await db.user.upsert({
    where: {
      emailAddress: user.emailAddresses[0].emailAddress,
    },
    update: {
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
    },
    create: {
      id: userId,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      emailAddress: user.emailAddresses[0].emailAddress,
    },
  });

  return redirect("/dashboard");
};

export default SyncUser;
