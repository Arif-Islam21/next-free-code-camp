"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2>{session?.user}</h2>
        <p>client</p>
      </div>
    </section>
  );
}
