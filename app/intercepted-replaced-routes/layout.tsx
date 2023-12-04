import Link from "next/link";
import { Boundary } from "@/components/boundary";
import { Button } from "@/components/ui/button";
import Navigation from "./nav";

const title = "Intercepted Routes :: Redirect replace test";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-5">
      <Boundary
        labels={["intercepted-replaced-routes/layout.tsx"]}
        size="small"
      >
        <Navigation />
        {children}
      </Boundary>
      <div className="flex justify-center py-5">
        <Button asChild>
          <Link href="/intercepted-replaced-routes">Restart</Link>
        </Button>
      </div>
    </main>
  );
}
