import { Boundary } from "@/components/boundary";

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
        labels={["server-action-form-suspense/layout.tsx"]}
        size="small"
      >
        {children}
      </Boundary>
    </main>
  );
}
