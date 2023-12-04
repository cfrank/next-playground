import { Boundary } from "@/components/boundary";

export default function Page() {
  return (
    <Boundary labels={["intercepted-replaced-routes/host/page.tsx"]}>
      <p>
        This is the host page, when visiting the form from here we should
        intercept the route, and load the form within this context.
      </p>
    </Boundary>
  );
}
