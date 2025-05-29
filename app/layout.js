import './globals.css';
import Header from './components/navbar';

export const metadata = {
  title: 'Ramakrishna Memorial Nursing Home',
  description: 'Your trusted healthcare partner',
  icons: {
    icon: '/favicon.ico.png', // PNG favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

