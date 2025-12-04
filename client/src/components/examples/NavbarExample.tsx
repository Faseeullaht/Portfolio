import { Navbar } from '../Navbar';
import { ThemeProvider } from '../ThemeProvider';

export default function NavbarExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Navbar />
    </ThemeProvider>
  );
}
