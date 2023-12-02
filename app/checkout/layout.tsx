export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <main className="flex-1 py-8">
      <section className="container relative">
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          {children}
        </div>
      </section>
    </main>
  )
}