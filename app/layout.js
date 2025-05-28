import './globals.css';
import Header from './components/navbar';

export const metadata = {
  title: 'MediCare',
  description: 'Your trusted healthcare partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

