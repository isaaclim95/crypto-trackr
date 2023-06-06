"use client";
import { signOut } from "next-auth/react";

export default function GoogleSignOutButton() {
  return (
    <button className="bg-googleBlue p-4" onClick={() => signOut()}>
      Sign out
    </button>
  );
}
