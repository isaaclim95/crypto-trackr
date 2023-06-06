"use client";
import { useSession } from "next-auth/react";

import GoogleSignInButton from "@/components/GoogleSignInButton";
import GoogleSignOutButton from "@/components/GoogleSignOutButton";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          <h1>CryptoTrackr</h1>
          <p>Track your crypto portfolio easily</p>
          <h3>{`Welcome ${session?.user?.name}`}</h3>
          <GoogleSignOutButton />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>CryptoTrackr</h1>
          <p>Track your crypto portfolio easily</p>
          <GoogleSignInButton />
        </div>
      </>
    );
  }
}
