"use client";

import React from "react";
import StarField from "@/components/StarField";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Zap,
  MessageSquare,
  Wrench,
  Globe,
  LayoutDashboard,
  Server,
  Bot,
  ExternalLink,
  Mail,
  ArrowDown,
  Check,
} from "lucide-react";

// ─── Logo ───────────────────────────────────────────────────────────────────
function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textSize = size === "lg" ? "text-4xl" : size === "md" ? "text-2xl" : "text-xl";
  return (
    <div className="flex items-center gap-3">
      {/* Symbol */}
      <div className="relative flex items-center justify-center" style={{ width: 36, height: 36 }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            opacity: 0.2,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 18,
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          U
        </span>
        {/* orbit dot */}
        <span
          className="orbit-dot absolute"
          style={{
            width: 4,
            height: 4,
            background: "#06b6d4",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            marginTop: -2,
            marginLeft: -2,
          }}
        />
      </div>
      {/* Text */}
      <div className={`flex items-baseline gap-1 ${textSize}`} style={{ fontFamily: "var(--font-heading)" }}>
        <span style={{ fontWeight: 800, color: "#fff" }}>UJU</span>
        <span style={{ fontWeight: 300, color: "#9ca3af", letterSpacing: "0.15em", fontSize: "0.7em" }}>
          PLACE
        </span>
      </div>
    </div>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tech", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,10,0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo size="sm" />
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-primary"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "0.8rem",
            color: "#fff",
            textDecoration: "none",
            padding: "8px 20px",
            borderRadius: 8,
            letterSpacing: "0.02em",
          }}
        >
          Contact
        </a>
      </div>
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
      style={{ paddingTop: 80 }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <StarField count={100} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: "0.8rem",
            color: "#a5b4fc",
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            letterSpacing: "0.08em",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", display: "inline-block" }} />
          Full-stack Developer Portfolio
        </div>

        {/* Main logo */}
        <div className="flex justify-center mb-10">
          <Logo size="lg" />
        </div>

        {/* Headline */}
        <h1
          className="glow-text"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            color: "#fff",
          }}
        >
          아이디어를 현실로,{" "}
          <span className="gradient-text">빠르게.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--color-text-muted)",
            lineHeight: 1.8,
            maxWidth: 560,
            margin: "0 auto 3rem",
          }}
        >
          기획부터 디자인, 개발, 배포까지{" "}
          <span style={{ color: "#fff" }}>직접</span> 만들고 운영합니다.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#portfolio"
            className="btn-primary"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: 12,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            작업물 보기
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "var(--color-text-muted)",
              textDecoration: "none",
              padding: "16px 28px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
              transition: "color 0.2s, border-color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-muted)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            연락하기
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2"
        style={{ transform: "translateX(-50%)", animation: "twinkle 2s ease-in-out infinite alternate" }}
      >
        <ArrowDown size={20} color="rgba(255,255,255,0.3)" />
      </div>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────
function About() {
  const strengths = [
    {
      icon: <MessageSquare size={22} />,
      title: "커뮤니케이션 비용 제로",
      desc: "기획·디자인·개발을 한 사람이 직접 설계하고 실행합니다.",
    },
    {
      icon: <Zap size={22} />,
      title: "빠른 실행력",
      desc: "AI 도구를 적극 활용해 빠르게 프로토타입하고 결과물을 만들어냅니다.",
    },
    {
      icon: <Wrench size={22} />,
      title: "운영 경험 기반 설계",
      desc: "만들고 끝이 아닌, 실제 운영까지 경험한 구조 설계를 지향합니다.",
    },
  ];

  return (
    <section id="about" style={{ padding: "120px 24px", background: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em" }}>
            ABOUT
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              color: "#fff",
            }}
          >
            한 사람이 만드는{" "}
            <span className="gradient-text">밀도 높은 결과물</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.9,
              maxWidth: 620,
              marginBottom: "4rem",
            }}
          >
            IT 기업에서 5년간 100만+ 사용자 플랫폼을 설계·운영했습니다.
            프론트엔드부터 백엔드, 인프라까지 직접 다루는 풀스택 개발자입니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {strengths.map((s, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className="card-hover gradient-border"
                style={{
                  background: "var(--color-surface)",
                  borderRadius: 16,
                  padding: "32px 28px",
                  border: "1px solid var(--color-border)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(99,102,241,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#818cf8",
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#fff",
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────
function Services() {
  const items = [
    {
      icon: <Globe size={24} />,
      title: "웹사이트 구축",
      desc: "Next.js 기반 반응형 웹, 홈페이지, 랜딩페이지. SEO 최적화와 성능까지 고려한 완성도 높은 결과물.",
      color: "#6366f1",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "관리자 시스템 / CMS",
      desc: "콘텐츠를 직접 관리할 수 있는 어드민 구축. 복잡한 데이터도 직관적으로 다룰 수 있게 설계.",
      color: "#a855f7",
    },
    {
      icon: <Server size={24} />,
      title: "API 서버 개발",
      desc: "Spring Boot 기반 안정적인 백엔드 시스템. 확장성과 보안을 염두에 둔 아키텍처 설계.",
      color: "#06b6d4",
    },
    {
      icon: <Bot size={24} />,
      title: "AI 연동 서비스",
      desc: "ChatGPT, Claude, Gemini 연동 기능 개발. 서비스에 꼭 맞는 AI 기능을 빠르게 녹여냅니다.",
      color: "#10b981",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "120px 24px",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em" }}>
            SERVICES
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff",
              marginBottom: "4rem",
            }}
          >
            할 수 있는 것
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="card-hover"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 20,
                  padding: "36px 32px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${item.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    marginBottom: 24,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#fff",
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ───────────────────────────────────────────────────────────────
function Portfolio() {
  const projects = [
    {
      title: "위스키로그",
      subtitle: "위스키 바틀샵 가격 비교 플랫폼",
      tags: ["Next.js", "Supabase", "Tailwind", "Cloudinary"],
      desc: "기획·디자인·개발 전 과정 1인 진행. PWA 지원으로 앱처럼 설치 가능한 위스키 가격 비교 서비스.",
      href: "https://whiskylog.ujuplace.com",
      available: true,
      accent: "#f59e0b",
    },
    {
      title: "프렙잇",
      subtitle: "AI 면접 시뮬레이터",
      tags: ["Next.js", "PWA", "OpenAI", "Google Play"],
      desc: "AI 면접관이 실전처럼 질문하고 상세 피드백을 제공하는 면접 연습 서비스. 기획·디자인·개발·배포 1인 진행.",
      href: "https://prepit.ujuplace.com",
      available: true,
      accent: "#c24b38",
    },
    {
      title: "냉장고 레시피",
      subtitle: "AI 기반 재료 맞춤 레시피 추천",
      tags: ["Next.js", "Supabase", "Vercel"],
      desc: "AI가 냉장고 재료를 분석하여 만들 수 있는 레시피를 추천해주는 서비스.",
      href: null,
      available: false,
      accent: "#10b981",
    },
    {
      title: "법무법인 홈페이지 시안",
      subtitle: "성범죄·마약 전문 법무법인 디자인",
      tags: ["UI/UX Design", "Responsive"],
      desc: "클래식 / 미니멀 두 가지 콘셉트의 디자인 시안. 신뢰감과 전문성을 중심에 둔 구성.",
      href: "https://cano721.github.io/law-firm-design-v1/",
      available: true,
      accent: "#6366f1",
    },
  ];

  return (
    <section id="portfolio" style={{ padding: "120px 24px", background: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em" }}>
            PORTFOLIO
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff",
              marginBottom: "4rem",
            }}
          >
            작업 사례
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className="card-hover"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 20,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Top bar */}
                <div
                  style={{
                    height: 4,
                    background: `linear-gradient(90deg, ${p.accent}, ${p.accent}80)`,
                  }}
                />

                <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "#fff",
                        marginBottom: 6,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--color-text-muted)", marginBottom: 16 }}>
                      {p.subtitle}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2" style={{ marginBottom: 24 }}>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: p.accent,
                            background: `${p.accent}14`,
                            border: `1px solid ${p.accent}30`,
                            borderRadius: 6,
                            padding: "3px 10px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {p.available && p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: p.accent,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "gap 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
                    >
                      사이트 방문 <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.82rem",
                        color: "var(--color-text-subtle)",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 6,
                        padding: "4px 12px",
                        display: "inline-block",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      준비중
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Stack ──────────────────────────────────────────────────────────────
function TechStack() {
  const categories = [
    {
      label: "Frontend",
      color: "#6366f1",
      items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      label: "Backend",
      color: "#a855f7",
      items: ["Java", "Spring Boot", "Node.js"],
    },
    {
      label: "Database",
      color: "#06b6d4",
      items: ["MariaDB", "MySQL", "Supabase", "Redis"],
    },
    {
      label: "Infrastructure",
      color: "#f59e0b",
      items: ["AWS", "Vercel", "Docker", "Cloudflare"],
    },
    {
      label: "AI",
      color: "#10b981",
      items: ["OpenAI", "Anthropic", "Gemini"],
    },
  ];

  return (
    <section
      id="tech"
      style={{
        padding: "120px 24px",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          bottom: "-50px",
          left: "-50px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em" }}>
            TECH STACK
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff",
              marginBottom: "4rem",
            }}
          >
            기술 스택
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 80}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: cat.color,
                    letterSpacing: "0.1em",
                    minWidth: 120,
                  }}
                >
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#fff",
                        background: "var(--color-surface-2)",
                        border: `1px solid ${cat.color}25`,
                        borderRadius: 8,
                        padding: "8px 16px",
                        transition: "border-color 0.2s, background 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}60`;
                        (e.currentTarget as HTMLElement).style.background = `${cat.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}25`;
                        (e.currentTarget as HTMLElement).style.background = "var(--color-surface-2)";
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const [copied, setCopied] = React.useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("cano7211@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const emailChannel = {
    icon: <Mail size={20} />,
    label: "이메일",
    value: copied ? "복사됨!" : "cano7211@gmail.com",
    color: "#6366f1",
  };
  const channels = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.507 3 2 6.634 2 11.128c0 2.918 1.94 5.476 4.862 6.918-.152.556-.985 3.583-1.015 3.81 0 0-.02.166.088.23.108.064.235.03.235.03.31-.043 3.59-2.35 4.155-2.748.539.08 1.1.122 1.675.122 5.493 0 10-3.634 10-8.128S17.493 3 12 3z"/>
        </svg>
      ),
      label: "카카오톡",
      value: "카카오 채널 문의",
      href: "https://pf.kakao.com",
      color: "#f59e0b",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px 160px",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <StarField count={40} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em" }}>
            CONTACT
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            연락처
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            궁금한 점이 있으시면 편하게 연락 주세요.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* 이메일 - 클립보드 복사 */}
            <button
              onClick={copyEmail}
              className="card-hover"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "28px 20px",
                background: copied ? `${emailChannel.color}15` : "var(--color-surface)",
                border: `1px solid ${copied ? emailChannel.color + "40" : "var(--color-border)"}`,
                borderRadius: 16,
                cursor: "pointer",
                color: "inherit",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${emailChannel.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: emailChannel.color,
                }}
              >
                {copied ? <Check size={20} /> : emailChannel.icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.82rem", color: "var(--color-text-subtle)", marginBottom: 4 }}>
                  {emailChannel.label}
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: copied ? emailChannel.color : "#fff" }}>
                  {emailChannel.value}
                </div>
              </div>
            </button>
            {/* 나머지 채널 - 링크 */}
            {channels.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  padding: "28px 20px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${ch.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ch.color,
                  }}
                >
                  {ch.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.82rem", color: "var(--color-text-subtle)", marginBottom: 4 }}>
                    {ch.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}>
                    {ch.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        padding: "40px 24px",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo size="sm" />
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--color-text-subtle)" }}>
          © 2025 UJU Place. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["About", "Services", "Portfolio", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.82rem",
                color: "var(--color-text-subtle)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-subtle)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
