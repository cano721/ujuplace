import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UJU Place | 풀스택 개발자 포트폴리오",
  description:
    "기획부터 디자인, 개발, 배포까지 직접 만들고 운영합니다. IT 기업 5년 경험의 풀스택 개발자 포트폴리오.",
  keywords: ["웹개발", "풀스택", "Next.js", "스프링부트", "포트폴리오", "개발자"],
  openGraph: {
    title: "UJU Place | 풀스택 개발자 포트폴리오",
    description: "기획부터 배포까지 직접 만들고 운영하는 풀스택 개발자입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
