// app/cards/card/[cardId]/page.tsx (server component)
import Modal from "@/components/modal";

type CardModalProps = {
  params: {
    cardId: string;
  };
};

export default async function CardModal({ params }: CardModalProps) {
  const { cardId } = params;

  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return <Modal cardId={cardId}>Non Intercepted Route Content</Modal>;
}
