import { getServerSession } from "next-auth/next"

import { authOptions } from "../api/auth/[...nextauth]/route";
import {getUser} from "@/lib/auth"

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    
    const user = getUser(session.user.id);
    
    
    return user;
    
  } catch (error: any) {
    return null;
  }
}