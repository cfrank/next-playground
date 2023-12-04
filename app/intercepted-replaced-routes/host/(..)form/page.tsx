import { Boundary } from "@/components/boundary";
import Form from "../../form/form";

export default function Page() {
  return (
    <Boundary
      color="orange"
      labels={["intercepted-replaced-routes/host/(..)form/page.tsx"]}
      size="small"
    >
      <Form />
    </Boundary>
  );
}
