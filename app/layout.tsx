import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#060b26',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Vértice EAD | Cursos Técnicos Reconhecidos pelo MEC & Diploma em 48h',
  description: 'Cursos técnicos 100% online reconhecidos pelo MEC e SISTEC com habilitação para CFT/CRT. Validação por competência profissional com diploma em até 48 horas úteis.',
  keywords: [
    'cursos técnicos',
    'EAD',
    'educação a distância',
    'cursos profissionalizantes',
    'Vértice EAD',
    'diploma em 48 horas',
    'certificação por competência',
    'CFT',
    'CRT',
    'Eletrotécnica EAD',
    'Mecânica EAD',
    'Segurança do Trabalho EAD'
  ],
  authors: [{ name: 'Vértice EAD' }],
  openGraph: {
    title: 'Vértice EAD | Cursos Técnicos Reconhecidos pelo MEC & Diploma em 48h',
    description: 'Transforme sua carreira com cursos técnicos reconhecidos pelo MEC e registrados no SISTEC. Estude 100% online no seu ritmo.',
    url: 'https://verticeead.com.br',
    siteName: 'Vértice EAD',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vértice EAD | Cursos Técnicos Reconhecidos pelo MEC',
    description: 'Cursos técnicos e profissionalizantes de alta qualidade na modalidade EAD com emissão de CFT/CRT.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
