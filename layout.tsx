import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Facility Inspection Management System',
  description: 'Manage facility inspections, issues, and compliance reporting.',
};

import { NotificationProvider } from '@/lib/contexts/NotificationContext';
import { SearchProvider } from '@/lib/contexts/SearchContext';
import { InspectionProvider } from '@/lib/contexts/InspectionContext';
import { AuthProvider } from '@/lib/contexts/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NotificationProvider>
            <SearchProvider>
              <InspectionProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </InspectionProvider>
            </SearchProvider>
          </NotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

