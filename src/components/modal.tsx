"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ModalProps = {
  cardId: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Modal({
  cardId,
  children,
  title,
  description,
}: ModalProps) {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="sm:max-w-md p-0 border-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          className="w-full p-6"
        >
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg">
              {title || "Card Details"}
            </DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          <div className="space-y-4">
            {children}
            <div className="text-sm text-muted-foreground">
              Card ID: {cardId}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
