import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ChangePlan({ planId }: { planId: number }) {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href={`/dashboard/billing/change-plans/${planId}`}>
        Change plan
      </Link>
    </Button>
  );
}