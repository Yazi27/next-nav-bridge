"use client";

import { useState, useEffect, ReactNode } from "react";
import ModalSkeleton from "./modal-skeleton";
import {
  subscribeToCardNavigation,
  getCardNavigationState,
} from "@/lib/navigationState";

export default function Layout({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(getCardNavigationState());

  useEffect(() => {
    const unsubscribe = subscribeToCardNavigation(() => {
      setIsNavigating(getCardNavigationState());
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Conditionally render based on navigation state
  if (isNavigating) {
    return <ModalSkeleton>{children}</ModalSkeleton>;
  }
}
