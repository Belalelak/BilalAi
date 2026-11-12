import "../globals.css";

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "fr" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}
