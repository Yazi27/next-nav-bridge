export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full items-center justify-center">
      {children}
      {modal}
    </main>
  );
}
