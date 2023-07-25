"use client";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "translate-easy";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
export default Providers;
