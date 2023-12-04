import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect, RedirectType } from "next/navigation";
import CancelButton from "./cancel-button";

export default function Form() {
  async function handleSubmit() {
    "use server";

    redirect("/intercepted-replaced-routes/form", RedirectType.replace);
  }

  return (
    <form action={handleSubmit}>
      <div className="grid grid-cols-4 gap-5">
        <Input className="col-span-2" type="email" placeholder="Email" />
        <Button type="submit" title="Submit">
          Submit
        </Button>
        <CancelButton />
      </div>
    </form>
  );
}
