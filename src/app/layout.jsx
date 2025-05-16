import Header from "@/components/Header";
import Providers from "@/providers/Providers";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | رسادنت",
    default: "رسادنت",
  },
  description: "تسک استخدامی شرکت رسادنت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body cz-shortcut-listen="true">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
