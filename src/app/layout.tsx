import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import './globals.css';
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: 'Herambh Software Technologies and Solutions',
  description: 'Building software that moves businesses forward.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleTagManager
        gtmId="GTM-PR3Q4D7G"
      />
    </html>
  );
}
