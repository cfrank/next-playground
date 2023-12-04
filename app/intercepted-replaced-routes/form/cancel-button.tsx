"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function CancelButton() {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Button variant="destructive" title="cancel" onClick={goBack}>
      Cancel
    </Button>
  );
}
