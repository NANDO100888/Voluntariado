import "./globals.css";

export const metadata = {
  title: "Voluntariado SCZ",
  description: "Plataforma de voluntariado en Santa Cruz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
