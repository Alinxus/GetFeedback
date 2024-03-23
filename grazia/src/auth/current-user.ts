import { User } from "@prisma/client";
import { auth } from "../auth";
import { getServerSession } from "next-auth/next"

export const currentUser = async () => {
  const session = await getServerSession()

  if (!session?.user) {
    return null;
  }

  const user = session.user as User;

  return user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
