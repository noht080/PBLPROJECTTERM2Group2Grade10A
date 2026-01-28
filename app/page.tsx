"use client";

import { useEffect, useMemo, useState } from "react";
import Aurora from "./Aurora";
import BlurText from "./BlurText";
import CardNav from "./CardNav";
import ModelViewer from "./ModelViewer";

type Language = "en" | "th";

const content = {
  en: {
    brand: "PBL Smart Bin",
    badge: "PBL Project",
    badgeSubtitle: "Smart Waste Segregation Bin",
    title: "Automatic Rubbish Bin That Sorts Metal And Regular Waste",
    intro:
      "This project presents a prototype smart bin that detects metal objects and separates them from normal rubbish. The goal is to make recycling cleaner, faster, and more reliable in school and community spaces.",
    tags: ["Built for school showcase", "Sustainable design"],
    highlights: [
      {
        title: "Automatic sorting",
        description:
          "Metal is detected and separated from regular waste to reduce manual sorting.",
      },
      {
        title: "Cleaner recycling stream",
        description:
          "Pre-sorted bins improve recycling quality and reduce contamination.",
      },
      {
        title: "Real-world impact",
        description:
          "Designed for schools and public spaces to encourage responsible disposal.",
      },
    ],
    problemTitle: "Problem Statement",
    problemBody:
      "Mixed waste makes recycling inefficient and expensive. Metal items often end up in regular bins, which increases contamination. Our smart bin solves this by automatically separating metal from other rubbish at the point of disposal.",
    solutionTitle: "Solution Overview",
    solutionBody:
      "A compact bin uses a metal detection sensor and a small motorized flap to route waste into the correct container. The system is energy efficient and easy to maintain for daily use.",
    howTitle: "How It Works",
    howSteps: [
      "User drops waste into the inlet.",
      "A sensor checks for metal objects.",
      "A small mechanism directs metal to the metal bin.",
      "Non-metal items fall into the regular bin.",
    ],
    componentsTitle: "Core Components",
    components: [
      "Metal detection sensor",
      "Microcontroller (micro:bit)",
      "Servo motor or flap mechanism",
      "Dual bin container",
      "Power source and wiring",
    ],
    timelineTitle: "Project Timeline",
    timeline: [
      { label: "Research", detail: "2 weeks: study sorting methods and sensors." },
      { label: "Prototype", detail: "3 weeks: build and test core mechanism." },
      { label: "Refine", detail: "2 weeks: improve accuracy and durability." },
      { label: "Showcase", detail: "1 week: prepare demo and presentation." },
    ],
    impactTitle: "Expected Impact",
    impactBody:
      "Less contamination in recycling bins, increased recycling rates, and better waste-awareness for students.",
    audienceTitle: "Target Audience",
    audienceBody:
      "Schools, cafeterias, community centers, and public facilities.",
    demoTitle: "Demo Plan",
    demoBody:
      "Live test with metal and non-metal items to show sorting accuracy.",
    readyTitle: "Ready For The Showcase",
    readyBody:
      "This PBL solution highlights engineering, sustainability, and real community impact.",
    team: "Team: Your Name",
    class: "Class: Your Class",
    school: "School: Your School",
    heroCtaPrimary: "Get Started",
    heroCtaSecondary: "Learn More",
    viewerTitle: "3D Project Preview",
    viewerBody:
      "Place your 3D model file at public/model.glb to display it here. You can rotate, zoom, and explore the smart bin design.",
    viewerEmpty: "Add your file to public/model.glb to load the 3D preview.",
    navItems: [
      {
        label: "Project",
        links: [
          { label: "Home", href: "/", ariaLabel: "Go to home page" },
          { label: "Docs", href: "/docs", ariaLabel: "Open project docs" },
        ],
      },
      {
        label: "Build",
        links: [
          { label: "3D Preview", href: "#model-preview", ariaLabel: "Jump to 3D preview" },
          { label: "Timeline", href: "#timeline", ariaLabel: "Jump to timeline" },
        ],
      },
      {
        label: "Showcase",
        links: [
          { label: "Impact", href: "#impact", ariaLabel: "Jump to impact" },
          { label: "Demo", href: "#demo", ariaLabel: "Jump to demo plan" },
        ],
      },
    ],
    logoAlt: "Project logo",
    toggleLabel: "ภาษาไทย",
    toggleShort: "TH",
  },
  th: {
    brand: "PBL ถังอัจฉริยะ",
    badge: "โครงงาน PBL",
    badgeSubtitle: "ถังขยะคัดแยกอัจฉริยะ",
    title: "ถังขยะอัตโนมัติที่แยกโลหะและขยะทั่วไป",
    intro:
      "โครงงานนี้นำเสนอถังขยะอัจฉริยะต้นแบบที่ตรวจจับโลหะและแยกออกจากขยะทั่วไป เป้าหมายคือทำให้การรีไซเคลง่าย สะอาด และน่าเชื่อถือมากขึ้นในโรงเรียนและชุมชน",
    tags: ["สร้างเพื่อการนำเสนอในโรงเรียน", "ออกแบบเพื่อความยั่งยืน"],
    highlights: [
      {
        title: "การคัดแยกอัตโนมัติ",
        description:
          "ตรวจจับโลหะและแยกออกจากขยะทั่วไปเพื่อลดการคัดแยกด้วยมือ",
      },
      {
        title: "กระแสรีไซเคิลสะอาดขึ้น",
        description: "การแยกตั้งแต่ต้นช่วยลดการปนเปื้อน",
      },
      {
        title: "ผลกระทบจริงต่อสังคม",
        description:
          "ออกแบบสำหรับโรงเรียนและพื้นที่สาธารณะ เพื่อส่งเสริมการทิ้งขยะอย่างรับผิดชอบ",
      },
    ],
    problemTitle: "ปัญหาที่พบ",
    problemBody:
      "ขยะที่ปะปนทำให้การรีไซเคิลไม่มีประสิทธิภาพและมีค่าใช้จ่ายสูง วัสดุโลหะมักลงไปในถังทั่วไป ทำให้ปนเปื้อน ระบบของเราจะแยกโลหะออกตั้งแต่จุดทิ้ง",
    solutionTitle: "ภาพรวมของแนวทางแก้ไข",
    solutionBody:
      "ถังขนาดกะทัดรัดใช้เซ็นเซอร์ตรวจจับโลหะและแผ่นกั้นที่ขับด้วยมอเตอร์ เพื่อส่งขยะไปยังถังที่ถูกต้อง ระบบประหยัดพลังงานและดูแลง่าย",
    howTitle: "การทำงาน",
    howSteps: [
      "ผู้ใช้ทิ้งขยะลงช่องรับ",
      "เซ็นเซอร์ตรวจว่ามีโลหะหรือไม่",
      "กลไกเล็ก ๆ เปลี่ยนทางให้โลหะไปถังโลหะ",
      "ขยะไม่ใช่โลหะตกลงถังทั่วไป",
    ],
    componentsTitle: "ส่วนประกอบหลัก",
    components: [
      "เซ็นเซอร์ตรวจจับโลหะ",
      "ไมโครคอนโทรลเลอร์ (micro:bit)",
      "เซอร์โวมอเตอร์หรือแผ่นกั้น",
      "ถังคู่สำหรับแยกขยะ",
      "แหล่งจ่ายไฟและสายไฟ",
    ],
    timelineTitle: "ไทม์ไลน์โครงงาน",
    timeline: [
      { label: "วิจัย", detail: "2 สัปดาห์: ศึกษาวิธีคัดแยกและเซ็นเซอร์" },
      { label: "ต้นแบบ", detail: "3 สัปดาห์: สร้างและทดสอบกลไกหลัก" },
      { label: "ปรับปรุง", detail: "2 สัปดาห์: เพิ่มความแม่นยำและความทนทาน" },
      { label: "นำเสนอ", detail: "1 สัปดาห์: เตรียมสาธิตและพรีเซนต์" },
    ],
    impactTitle: "ผลลัพธ์ที่คาดหวัง",
    impactBody:
      "ลดการปนเปื้อนในถังรีไซเคิล เพิ่มอัตราการรีไซเคิล และสร้างจิตสำนึกให้ผู้เรียน",
    audienceTitle: "กลุ่มเป้าหมาย",
    audienceBody: "โรงเรียน โรงอาหาร ศูนย์ชุมชน และพื้นที่สาธารณะ",
    demoTitle: "แผนการสาธิต",
    demoBody:
      "ทดสอบแบบสดด้วยวัสดุโลหะและไม่ใช่โลหะเพื่อแสดงความแม่นยำในการแยก",
    readyTitle: "พร้อมสำหรับการนำเสนอ",
    readyBody:
      "โครงงานนี้แสดงทักษะด้านวิศวกรรม ความยั่งยืน และผลกระทบต่อชุมชน",
    team: "ทีม: ชื่อของคุณ",
    class: "ชั้นเรียน: ชั้นของคุณ",
    school: "โรงเรียน: โรงเรียนของคุณ",
    heroCtaPrimary: "เริ่มต้น",
    heroCtaSecondary: "ดูเพิ่มเติม",
    viewerTitle: "ตัวอย่างโครงงานแบบ 3 มิติ",
    viewerBody:
      "วางไฟล์โมเดล 3 มิติไว้ที่ public/model.glb เพื่อแสดงผล คุณสามารถหมุน ซูม และดูรายละเอียดได้",
    viewerEmpty: "เพิ่มไฟล์ของคุณไว้ที่ public/model.glb เพื่อโหลดตัวอย่าง 3 มิติ",
    navItems: [
      {
        label: "โครงงาน",
        links: [
          { label: "หน้าแรก", href: "/", ariaLabel: "กลับไปหน้าแรก" },
          { label: "เอกสาร", href: "/docs", ariaLabel: "เปิดเอกสารโครงงาน" },
        ],
      },
      {
        label: "การสร้าง",
        links: [
          { label: "ตัวอย่าง 3D", href: "#model-preview", ariaLabel: "ไปยังตัวอย่าง 3 มิติ" },
          { label: "ไทม์ไลน์", href: "#timeline", ariaLabel: "ไปยังไทม์ไลน์" },
        ],
      },
      {
        label: "นำเสนอ",
        links: [
          { label: "ผลลัพธ์", href: "#impact", ariaLabel: "ไปยังผลลัพธ์" },
          { label: "สาธิต", href: "#demo", ariaLabel: "ไปยังแผนสาธิต" },
        ],
      },
    ],
    logoAlt: "โลโก้โครงงาน",
    toggleLabel: "English",
    toggleShort: "EN",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = useMemo(() => content[language], [language]);
  const textKey = (id: string) => `${language}-${id}`;
  const modelUrl = "/model.glb";
  const [hasModel, setHasModel] = useState(false);
  const navItems = [
    {
      ...t.navItems[0],
      bgColor: "#0f3d2e",
      textColor: "#f0fdf4",
    },
    {
      ...t.navItems[1],
      bgColor: "#0a2b5f",
      textColor: "#eff6ff",
    },
    {
      ...t.navItems[2],
      bgColor: "#2f1b63",
      textColor: "#f5f3ff",
    },
  ];

  useEffect(() => {
    let isActive = true;
    fetch(modelUrl, { method: "HEAD" })
      .then((res) => {
        if (!isActive) return;
        setHasModel(res.ok);
      })
      .catch(() => {
        if (!isActive) return;
        setHasModel(false);
      });
    return () => {
      isActive = false;
    };
  }, [modelUrl]);

  const handleToggle = () => {
    setLanguage((prev) => (prev === "en" ? "th" : "en"));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="floating-blob" aria-hidden="true" />
      <button
        type="button"
        onClick={handleToggle}
        className="lang-toggle inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur transition hover:bg-white/20"
        aria-label={`Switch language to ${t.toggleLabel}`}
      >
        <BlurText
          key={textKey("toggle-short")}
          as="span"
          display="inline-flex"
          animateBy="letters"
          className="text-xs font-semibold uppercase tracking-wide text-white"
          text={t.toggleShort}
        />
        <BlurText
          key={textKey("toggle-label")}
          as="span"
          display="inline-flex"
          animateBy="words"
          className="text-[10px] font-medium normal-case text-white/70"
          text={t.toggleLabel}
        />
      </button>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:px-10">
        <header className="relative overflow-hidden rounded-3xl bg-zinc-950 p-8 shadow-sm md:p-12">
          <CardNav
            logo="/globe.svg"
            logoAlt={t.logoAlt}
            items={navItems}
            baseColor="rgba(10, 10, 10, 0.95)"
            menuColor="#ffffff"
            buttonBgColor="#ffffff"
            buttonTextColor="#111111"
            ctaLabel={t.heroCtaPrimary}
          />
          <Aurora className="opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
          <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col items-center gap-6 text-center text-white">
              <BlurText
                key={textKey("badge")}
                as="span"
                display="inline-flex"
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
                text={t.badge}
              />
              <BlurText
                key={textKey("title")}
                as="h1"
                className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl"
                text={t.title}
              />
              <BlurText
                key={textKey("intro")}
                className="max-w-2xl text-base leading-7 text-white/70 md:text-lg"
                text={t.intro}
              />
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-zinc-900 shadow-sm">
                  {t.heroCtaPrimary}
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm font-semibold text-white/70">
                  {t.heroCtaSecondary}
                </button>
              </div>
            </div>
          </div>
        </header>

        <section
          id="model-preview"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm md:grid-cols-[1.1fr_1fr] md:items-center md:p-10"
        >
          <div className="flex flex-col gap-4">
            <BlurText
              key={textKey("viewer-title")}
              as="h2"
              className="text-2xl font-semibold text-white"
              text={t.viewerTitle}
            />
            <BlurText
              key={textKey("viewer-body")}
              className="text-sm leading-6 text-white/70 md:text-base"
              text={t.viewerBody}
            />
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            {hasModel ? (
              <ModelViewer
                url={modelUrl}
                width="100%"
                height={360}
                environmentPreset="studio"
                autoRotate
                autoRotateSpeed={0.4}
                enableManualRotation={false}
                enableManualZoom
                enableMouseParallax={false}
                enableHoverRotation={false}
                defaultZoom={1.2}
                showScreenshotButton={false}
                fadeIn
              />
            ) : (
              <div className="flex h-[360px] items-center justify-center rounded-xl border border-dashed border-white/20 text-sm text-white/60">
                {t.viewerEmpty}
              </div>
            )}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {t.highlights.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm"
            >
              <BlurText
                key={textKey(`highlight-title-${index}`)}
                as="h2"
                className="text-lg font-semibold text-white"
                text={item.title}
              />
              <BlurText
                key={textKey(`highlight-desc-${index}`)}
                className="text-sm leading-6 text-white/70"
                text={item.description}
              />
            </article>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm md:p-8">
            <BlurText
              key={textKey("problem-title")}
              as="h2"
              className="text-2xl font-semibold text-white"
              text={t.problemTitle}
            />
            <BlurText
              key={textKey("problem-body")}
              className="mt-4 text-sm leading-6 text-white/70 md:text-base"
              text={t.problemBody}
            />
          </div>
          <div className="rounded-2xl bg-emerald-500/20 p-6 text-white shadow-sm md:p-8">
            <BlurText
              key={textKey("solution-title")}
              as="h2"
              className="text-2xl font-semibold"
              text={t.solutionTitle}
            />
            <BlurText
              key={textKey("solution-body")}
              className="mt-4 text-sm leading-6 text-white/80 md:text-base"
              text={t.solutionBody}
            />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm md:p-8">
            <BlurText
              key={textKey("how-title")}
              as="h2"
              className="text-2xl font-semibold text-white"
              text={t.howTitle}
            />
            <ol className="mt-4 flex flex-col gap-3 text-sm text-white/70 md:text-base">
              {t.howSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <BlurText
                    key={textKey(`how-step-${index}`)}
                    as="span"
                    display="inline-flex"
                    className="text-sm text-white/70 md:text-base"
                    text={step}
                  />
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm md:p-8">
            <BlurText
              key={textKey("components-title")}
              as="h2"
              className="text-2xl font-semibold text-white"
              text={t.componentsTitle}
            />
            <ul className="mt-4 grid gap-3 text-sm text-white/70 md:text-base">
              {t.components.map((part, index) => (
                <li
                  key={part}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <BlurText
                    key={textKey(`component-${index}`)}
                    as="span"
                    display="inline-flex"
                    className="text-sm text-white/70 md:text-base"
                    text={part}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="timeline"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm md:p-8"
        >
          <BlurText
            key={textKey("timeline-title")}
            as="h2"
            className="text-2xl font-semibold text-white"
            text={t.timelineTitle}
          />
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {t.timeline.map((item, index) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <BlurText
                  key={textKey(`timeline-label-${index}`)}
                  as="p"
                  className="text-sm font-semibold text-emerald-300"
                  text={item.label}
                />
                <BlurText
                  key={textKey(`timeline-detail-${index}`)}
                  className="mt-2 text-sm text-white/70"
                  text={item.detail}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <BlurText
              key={textKey("impact-title")}
              as="h2"
              className="text-lg font-semibold text-emerald-200"
              text={t.impactTitle}
            />
            <BlurText
              key={textKey("impact-body")}
              className="mt-3 text-sm leading-6 text-emerald-100"
              text={t.impactBody}
            />
          </div>
          <div id="demo" className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <BlurText
              key={textKey("audience-title")}
              as="h2"
              className="text-lg font-semibold text-white"
              text={t.audienceTitle}
            />
            <BlurText
              key={textKey("audience-body")}
              className="mt-3 text-sm leading-6 text-white/70"
              text={t.audienceBody}
            />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <BlurText
              key={textKey("demo-title")}
              as="h2"
              className="text-lg font-semibold text-white"
              text={t.demoTitle}
            />
            <BlurText
              key={textKey("demo-body")}
              className="mt-3 text-sm leading-6 text-white/70"
              text={t.demoBody}
            />
          </div>
        </section>

        <section className="flex flex-col items-start gap-4 rounded-2xl bg-black/70 px-6 py-10 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <BlurText
              key={textKey("ready-title")}
              as="h2"
              className="text-2xl font-semibold"
              text={t.readyTitle}
            />
            <BlurText
              key={textKey("ready-body")}
              className="mt-2 text-sm text-zinc-300 md:text-base"
              text={t.readyBody}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <BlurText
              key={textKey("team")}
              as="span"
              display="inline-flex"
              className="rounded-full bg-white/10 px-4 py-2 text-sm dark:bg-white/5"
              text={t.team}
            />
            <BlurText
              key={textKey("class")}
              as="span"
              display="inline-flex"
              className="rounded-full bg-white/10 px-4 py-2 text-sm dark:bg-white/5"
              text={t.class}
            />
            <BlurText
              key={textKey("school")}
              as="span"
              display="inline-flex"
              className="rounded-full bg-white/10 px-4 py-2 text-sm dark:bg-white/5"
              text={t.school}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
