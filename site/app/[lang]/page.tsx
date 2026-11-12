import { notFound } from "next/navigation";
import { dict } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = dict[lang as keyof typeof dict];
  if (!t) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold">{t.name}</span>
        <nav className="flex gap-2 text-sm">
          {["ar", "fr", "en"].map((l) => (
            <a
              key={l}
              href={"/" + l}
              className={
                "rounded-full px-3 py-1 border " +
                (l === lang
                  ? "bg-white text-slate-950 border-white"
                  : "border-slate-600 text-slate-300")
              }
            >
              {l.toUpperCase()}
            </a>
          ))}
        </nav>
      </header>

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center bg-gradient-to-b from-indigo-900/60 to-slate-950">
        <h1 className="text-4xl md:text-6xl font-bold">{t.hello}</h1>
        <p className="text-xl text-indigo-300">{t.role}</p>
        <p className="max-w-md text-slate-300">{t.intro}</p>
        <a
          href="mailto:contact@example.com"
          className="mt-4 rounded-full bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400"
        >
          {t.contact}
        </a>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">{t.servicesTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
