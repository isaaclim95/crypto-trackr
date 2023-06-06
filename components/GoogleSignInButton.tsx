"use client";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <button className="bg-googleBlue p-4" onClick={() => signIn("google")}>
      Sign in with Google
    </button>
  );
}
