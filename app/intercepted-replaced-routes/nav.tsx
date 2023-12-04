import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="grid grid-cols-2 gap-4 pb-5">
      <Button asChild>
        <Link href="/intercepted-replaced-routes/host">Visit host page</Link>
      </Button>
      <Button asChild>
        <Link href="/intercepted-replaced-routes/form">Visit form</Link>
      </Button>
    </nav>
  );
}
