type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  )
}
