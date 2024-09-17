import type { Metadata } from 'next';
import Navigation from './_components/molecules/Navigation';
import Socials from './_components/organisms/Socials';
import Providers from './_providers/Providers';
import Footer from './_components/molecules/Footer';
import Sidebar from './_components/organisms/Sidebar';

export const metadata: Metadata = {
  title: 'Gitarady - Nauka Gry na Gitarze i Ukulele 🎸 Warszawa | Online',
  description:
    'Nauka gry na: Gitarze akustycznej, elektrycznej i ukulele ⭐ Lekcje odbywają się stacjonarnie w Warszawie 🏠 lub Online w całej Polsce | Gwarancja zadowolenia ✔️',
  keywords:
    'lekcje gitary,nauka gry na gitarze, nauczyciel gitary, lekcje ukulele ,nauka gry na ukulele, nauczyciel ukulele',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body>
        <Providers>
          <Navigation />
          <Socials />
          <Sidebar />
          <main className='content'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
