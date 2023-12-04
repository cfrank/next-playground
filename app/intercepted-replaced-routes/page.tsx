import { Boundary } from "@/components/boundary";

export default function Page() {
  return (
    <Boundary labels={["/intercepted-replaced-routes/page.tsx"]} size="small">
      <h1 className="pb-5">
        Tests redirecting with replace within an intercepted route.
      </h1>
      <ul className="list-disc list-inside leading-relaxed">
        <li>
          When loading an intercepted route we should be able to trigger a
          server action which calls <code>redirect(&lsquo;..&rsquo;, &lsquo;replace&rsquo;)</code> with
          another intercepted route and we should see the updated route within
          the host page.
        </li>
        <li>
          Calling <code>router.back()</code> from within a client component present within
          the intercepted route should return us back to the host route.
        </li>
        <li>
          This allows an experience where the intercepted route &ldquo;updates&rdquo;
          through a server-side re-render without the user leaving the context
          of the host route.
        </li>
      </ul>
    </Boundary>
  );
}
