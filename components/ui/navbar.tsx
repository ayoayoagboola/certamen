"use client";

import { Button } from "./button";
import Link from "next/link";
import { LogoutButton } from "../auth/logout-button";
import UserIcon from "../auth/user-icon";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const NavBar = () => {
  const user = useCurrentUser();

  return (
    <nav className="h-14 w-full bg-bg-2 flex justify-end items-center py-1 px-6 border-b border-bg-4 ">
      {user ? (
        <>
          <div>
            <UserIcon image={user.image || undefined} />
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-x-2">
            <Button className="w-full" asChild>
              <Link href="/login">Log in</Link>
            </Button>
          </div>
          <div className="flex gap-x-2">
            <Button className="w-full" asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
