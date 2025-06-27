import { use } from "react";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <button className="button" type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit Order"}
    </button>
  );
}
