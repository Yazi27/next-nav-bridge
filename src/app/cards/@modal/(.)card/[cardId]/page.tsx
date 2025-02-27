type CardModalProps = {
  params: {
    cardId: string;
  };
};

export default async function CardModal({ params }: CardModalProps) {
  const { cardId } = await params;

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <p>Intercept Route Content</p>;
}
