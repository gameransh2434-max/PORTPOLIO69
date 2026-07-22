import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Ansh | Portfolio',
  description: 'Discord bot & infrastructure developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0d0f0d] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}