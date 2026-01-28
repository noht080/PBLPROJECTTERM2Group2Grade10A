"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import BlurText from "../BlurText";
import Counter from "../Counter";
import BounceCards from "../BounceCards";

type Language = "en" | "th";

const content = {
  en: {
    title: "Project Documentation",
    subtitle:
      "Technical notes, build details, and demo instructions for the smart waste sorting bin.",
    systemTitle: "System Overview",
    systemBody:
      "Sensor detects metal → controller decides → servo directs item to metal or general bin.",
    hardwareTitle: "Hardware List",
    hardwareBody:
      "Metal detector, microcontroller (Arduino/ESP32), servo motor, frame, wiring, power.",
    testTitle: "Testing & Results",
    testBody:
      "Record accuracy across different objects, note false positives, and adjust thresholds.",
    demoTitle: "Demo Instructions",
    demoBody:
      "Prepare metal and non-metal samples, explain the detection step, then show the sorting action.",
    costTitle: "Estimated Cost",
    costBody: "Total cost to build the prototype.",
    costUnit: "THB",
    galleryTitle: "Project Work Photos",
    galleryBody: "Snapshots while building and testing the smart bin.",
    back: "Back to Home",
    toggleShort: "TH",
    toggleLabel: "ภาษาไทย",
  },
  th: {
    title: "เอกสารโครงงาน",
    subtitle:
      "บันทึกทางเทคนิค รายละเอียดการสร้าง และวิธีการสาธิตถังขยะคัดแยกอัจฉริยะ",
    systemTitle: "ภาพรวมระบบ",
    systemBody:
      "เซ็นเซอร์ตรวจโลหะ → คอนโทรลเลอร์ตัดสินใจ → เซอร์โวนำทางไปยังถังที่ถูกต้อง",
    hardwareTitle: "รายการอุปกรณ์",
    hardwareBody:
      "เซ็นเซอร์ตรวจโลหะ ไมโครคอนโทรลเลอร์ (Arduino/ESP32) เซอร์โวมอเตอร์ โครง สายไฟ และแหล่งจ่ายไฟ",
    testTitle: "การทดสอบและผลลัพธ์",
    testBody:
      "บันทึกความแม่นยำจากวัตถุหลากชนิด สังเกตการตรวจผิดพลาด และปรับค่าให้เหมาะสม",
    demoTitle: "ขั้นตอนการสาธิต",
    demoBody:
      "เตรียมตัวอย่างโลหะและไม่ใช่โลหะ อธิบายขั้นตอนตรวจจับ แล้วสาธิตการคัดแยก",
    costTitle: "ค่าใช้จ่ายโดยประมาณ",
    costBody: "งบประมาณรวมสำหรับสร้างต้นแบบ",
    costUnit: "บาท",
    galleryTitle: "ภาพระหว่างทำโครงงาน",
    galleryBody: "ภาพบรรยากาศการสร้างและทดสอบถังขยะอัจฉริยะ",
    back: "กลับหน้าหลัก",
    toggleShort: "EN",
    toggleLabel: "English",
  },
} as const;

export default function DocsPage() {
  const [language, setLanguage] = useState<Language>("en");
  const t = useMemo(() => content[language], [language]);
  const textKey = (id: string) => `${language}-${id}`;

  const handleToggle = () => {
    setLanguage((prev) => (prev === "en" ? "th" : "en"));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-14 md:px-10">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 hover:bg-white/10"
            >
              <span>←</span>
              <BlurText
                key={textKey("back")}
                as="span"
                display="inline-flex"
                className="text-xs font-semibold uppercase tracking-wide text-white/70"
                text={t.back}
              />
            </Link>
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition hover:bg-white/10"
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
                className="text-[10px] font-medium normal-case text-white/60"
                text={t.toggleLabel}
              />
            </button>
          </div>
          <BlurText
            key={textKey("title")}
            text={t.title}
            as="h1"
            className="text-3xl font-semibold text-white md:text-4xl"
          />
          <BlurText
            key={textKey("subtitle")}
            text={t.subtitle}
            className="text-sm leading-6 text-white/70 md:text-base"
          />
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <BlurText
              key={textKey("system-title")}
              text={t.systemTitle}
              as="h2"
              className="text-xl font-semibold text-white"
            />
            <BlurText
              key={textKey("system-body")}
              text={t.systemBody}
              className="mt-3 text-sm leading-6 text-white/70"
            />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <BlurText
              key={textKey("hardware-title")}
              text={t.hardwareTitle}
              as="h2"
              className="text-xl font-semibold text-white"
            />
            <BlurText
              key={textKey("hardware-body")}
              text={t.hardwareBody}
              className="mt-3 text-sm leading-6 text-white/70"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <BlurText
            key={textKey("test-title")}
            text={t.testTitle}
            as="h2"
            className="text-xl font-semibold text-white"
          />
          <BlurText
            key={textKey("test-body")}
            text={t.testBody}
            className="mt-3 text-sm leading-6 text-white/70"
          />
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <BlurText
            key={textKey("demo-title")}
            text={t.demoTitle}
            as="h2"
            className="text-xl font-semibold text-white"
          />
          <BlurText
            key={textKey("demo-body")}
            text={t.demoBody}
            className="mt-3 text-sm leading-6 text-white/70"
          />
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <BlurText
            key={textKey("cost-title")}
            text={t.costTitle}
            as="h2"
            className="text-xl font-semibold text-white"
          />
          <BlurText
            key={textKey("cost-body")}
            text={t.costBody}
            className="mt-3 text-sm leading-6 text-white/70"
          />
          <div className="mt-6 flex items-end gap-3">
            <Counter
              value={1000}
              fontSize={72}
              textColor="#ffffff"
              fontWeight={600}
              gradientFrom="rgba(10,10,10,0.9)"
              gradientTo="transparent"
            />
            <span className="text-lg font-semibold text-white/70">
              {t.costUnit}
            </span>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <BlurText
            key={textKey("gallery-title")}
            text={t.galleryTitle}
            as="h2"
            className="text-xl font-semibold text-white"
          />
          <BlurText
            key={textKey("gallery-body")}
            text={t.galleryBody}
            className="mt-3 text-sm leading-6 text-white/70"
          />
          <div className="mt-6 flex justify-center">
            <BounceCards
              images={[
                "/globe.svg",
                "/next.svg",
                "/vercel.svg",
                "/window.svg",
                "/file.svg",
              ]}
              containerWidth={380}
              containerHeight={340}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
