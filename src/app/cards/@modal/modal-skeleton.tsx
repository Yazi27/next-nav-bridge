"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { endCardNavigation } from "@/lib/navigationState";

export default function ModalSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={(open) => {
        endCardNavigation();
        if (!open) router.back();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Loading Card</DialogTitle>
        </DialogHeader>
        <Suspense
          fallback={
            <div className="space-y-4 mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-20 w-full rounded-md" />
            </div>
          }
        >
          {children}
        </Suspense>
      </DialogContent>
    </Dialog>
  );
}
