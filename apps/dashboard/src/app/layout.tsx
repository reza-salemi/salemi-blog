import { Header, SideNav } from '../components';
import { PageWrapper } from '../components/PageWrapper';
import { ThemeProvider } from '../providers';
import './global.css';

export const metadata = {
  title: 'Welcome to dashboard',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="min-h-screen grid grid-rows-[80px_1fr] dark:bg-base-100 dark:text-base-content">
          <Header />
          <main className="flex">
            <SideNav />
            <PageWrapper>{children}</PageWrapper>
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
