import Image from "next/image";
function Icon({ name }: { name: "equipment" | "sonographer" | "interpretation" | "reports" }) {
  if (name === "equipment") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <rect x="4" y="5" width="16" height="10" rx="2" />
        <path d="M8 19h8" />
        <path d="M12 15v4" />
      </svg>
    );
  }

  if (name === "sonographer") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    );
  }

  if (name === "interpretation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M6 3v6a4 4 0 0 0 8 0V3" />
        <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
        <circle cx="20" cy="10" r="2" />
        <path d="M6 3H4" />
        <path d="M14 3h2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h1" />
    </svg>
  );
}

const services = [
  {
    title: "Echocardiograms",
    description: "Cardiac ultrasound studies interpreted by board-certified cardiologists.",
  },
  {
    title: "Carotid Ultrasound with CIMT",
    description: "Evaluate carotid artery disease and measure carotid intima-media thickness.",
  },
  {
    title: "AAA & Aorto-Iliac Ultrasound",
    description: "Comprehensive abdominal aorta and common iliac artery ultrasound evaluation with color flow Doppler, velocity measurements, and physician interpretation.",
  },
  {
    title: "Venous Ultrasound",
    description: "Venous evaluations including DVT and venous insufficiency studies.",
  },
  {
    title: "Arterial Ultrasound",
    description: "Upper and lower extremity arterial assessments and circulation studies.",
  },
  {
    title: "Thyroid & General Ultrasound",
    description: "Thyroid imaging and additional general ultrasound examinations.",
  },
];

const solutionSteps = [
  {
    title: "Equipment",
    icon: "equipment" as const,
    description: "Portable ultrasound equipment brought directly to your office.",
  },
  {
    title: "Sonographer",
    icon: "sonographer" as const,
    description: "Experienced, credentialed ultrasound professionals perform studies on-site.",
  },
  {
    title: "Interpretation",
    icon: "interpretation" as const,
    description: "Physician-interpreted reports available for clinical review.",
  },
  {
    title: "Reports",
    icon: "reports" as const,
    description: "Clear, professional documentation delivered back to the practice.",
  },
];

const differentiators = [
  "Orders sent directly to ECHOHeart Imaging",
  "We coordinate patient scheduling whenever possible",
  "Flexible appointment availability, including Saturdays",
  "Responsive communication throughout the process",
  "Professional reports delivered back to your office",
  "Local Tampa Bay support",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <a href="#top" className="flex items-center">
            <Image
              src="/logo.png"
              alt="ECHOHeart Imaging Services"
              width={260}
              height={80}
              priority
              className="h-auto w-36 md:w-52"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#practices" className="transition hover:text-red-600">
              For Practices
            </a>
            <a href="#services" className="transition hover:text-red-600">
              Services
            </a>
            <a href="#reports" className="transition hover:text-red-600">
              Sample Reports
            </a>
            <a href="#patients" className="transition hover:text-red-600">
              For Patients
            </a>
            <a href="#contact" className="transition hover:text-red-600">
              Contact
            </a>
          </nav>

          <a
            href="tel:8138201630"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            813-820-1630
          </a>
        </div>
        <nav className="border-t border-slate-200/70 bg-white md:hidden">
          <div className="flex gap-5 overflow-x-auto px-6 py-3 text-sm font-semibold text-slate-700">
            <a href="#practices" className="shrink-0 transition hover:text-red-600">
              Practices
            </a>
            <a href="#services" className="shrink-0 transition hover:text-red-600">
              Services
            </a>
            <a href="#reports" className="shrink-0 transition hover:text-red-600">
              Reports
            </a>
            <a href="#patients" className="shrink-0 transition hover:text-red-600">
              Patients
            </a>
            <a href="#contact" className="shrink-0 transition hover:text-red-600">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[85vh] items-center overflow-hidden pt-24 md:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(220,38,38,0.12),transparent_32%),linear-gradient(135deg,#ffffff_0%,#f8fafc_45%,#eef2f7_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
              Mobile Diagnostic Ultrasound
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-8xl">
              Keep more patient care in-house.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600 md:text-2xl md:leading-10">
              Add diagnostic ultrasound to your practice without purchasing
              equipment, hiring sonographers, or disrupting your workflow.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-red-600 px-8 py-4 text-center text-base font-semibold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700"
              >
                Schedule a Consultation
              </a>
              <a
                href="#practices"
                className="rounded-full border border-slate-300 px-8 py-4 text-center text-base font-semibold text-slate-950 transition hover:border-slate-950"
              >
                How It Works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-700">
                Tampa Bay Based
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-700">
                Serving Practices Since 2022
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-700">
                Physician-Interpreted Reports
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-700">
                Equipment & Sonographer Included
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/50 md:rounded-[3rem] md:p-4">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-white via-slate-50 to-slate-200 md:aspect-[4/3] md:rounded-[2.2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(220,38,38,0.12),transparent_34%)]" />
              <Image
                src="/mindraymx7.avif"
                alt="Mindray MX7 Ultrasound System used by ECHOHeart Imaging"
                width={800}
                height={600}
                className="relative h-full w-full object-contain p-4 md:p-8"
              />
              <div className="absolute left-6 top-6 hidden rounded-2xl border border-slate-200 bg-white/85 px-5 py-4 shadow-xl shadow-slate-300/40 backdrop-blur md:block">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                  Mobile Setup
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-950">
                  Equipment provided
                </p>
              </div>
              <div className="absolute bottom-6 right-6 hidden rounded-2xl border border-slate-200 bg-slate-950/90 px-5 py-4 text-white shadow-xl shadow-slate-300/40 backdrop-blur md:block">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                  Cardiac Reports
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Typically within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-400">
              The Problem
            </p>
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl lg:text-7xl">
              Sending patients out slows everything down.
            </h2>
          </div>
          <p className="max-w-3xl text-2xl leading-10 text-slate-300">
            Outside imaging can mean extra scheduling, delayed answers, and patients
            leaving your workflow. ECHOHeart Imaging helps practices offer ultrasound
            services on-site with equipment, sonographers, and physician-interpreted
            reports included.
          </p>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
            Our Solution
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl lg:text-7xl">
            Everything your practice needs. Without the overhead.
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            ECHOHeart Imaging provides the clinical imaging support your office needs while keeping the process simple for your team.
          </p>
          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {solutionSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm ring-1 ring-slate-200">
                  <Icon name={step.icon} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="bg-slate-50 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
                For Medical Practices
              </p>
              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl lg:text-7xl">
                Add ultrasound revenue without hiring staff.
              </h2>
              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
                ECHOHeart Imaging helps practices offer in-office diagnostic ultrasound while keeping existing workflows and billing processes in place.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-red-600"
              >
                Discuss Practice Options
              </a>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Equipment Provided",
                  text: "Portable ultrasound equipment brought directly to your office.",
                },
                {
                  title: "On-Site Sonographer",
                  text: "Experienced, credentialed ultrasound professionals perform studies in your practice.",
                },
                {
                  title: "Physician Interpretation",
                  text: "Reports are interpreted by board-certified cardiologists or radiologists, depending on the exam type.",
                },
                {
                  title: "Keep Your Current Billing Process",
                  text: "Your office continues using its current insurance billing process when appropriate.",
                },
                {
                  title: "Simple Monthly Invoice",
                  text: "ECHOHeart Imaging invoices your practice monthly for services provided.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-300">
                  Why Practices Partner With Us
                </p>
                <h3 className="text-4xl font-semibold leading-none tracking-[-0.04em] md:text-5xl">
                  More service lines. Less overhead.
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "No equipment purchase",
                  "No sonographer payroll",
                  "No training requirements",
                  "Faster patient convenience",
                  "Additional in-office revenue opportunities",
                  "Local Tampa Bay support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
                Services
              </p>
              <h2 className="text-5xl font-semibold leading-none tracking-[-0.06em] md:text-6xl lg:text-8xl">
                Focused imaging services.
              </h2>
            </div>
            <p className="max-w-xl text-xl leading-9 text-slate-600">
              Cardiac, vascular, and general ultrasound options for medical practices,
              concierge providers, and self-pay patients throughout Tampa Bay.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-slate-950 px-6 py-28 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-400">
              Practice Support
            </p>
            <h2 className="text-5xl font-semibold leading-none tracking-[-0.06em] md:text-6xl lg:text-8xl">
              We make it easy for your staff.
            </h2>
            <p className="mt-8 text-xl leading-9 text-slate-300">
              Your office sends the order and our team helps coordinate the next steps. We focus on responsive communication, flexible scheduling, and making the imaging process as smooth as possible for both patients and staff.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-xl font-medium text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reports" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
                Sample Reports
              </p>
              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl lg:text-7xl">
                Detailed reports. Clear clinical decisions.
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-slate-600">
              Review sample ECHOHeart Imaging reports to see the level of detail, measurements, findings, and physician interpretation delivered back to your office.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Sample Echocardiogram Report",
                description: "Complete echo report with measurements, Doppler data, findings, and board-certified cardiologist interpretation.",
                href: "/reports/redacted-echo.pdf",
              },
              {
                title: "Sample Carotid Ultrasound with CIMT Report",
                description: "Carotid duplex report with Doppler velocities, IMT values, findings, and physician interpretation.",
                href: "/reports/redacted-carotid-cimt.pdf",
              },
              {
                title: "Sample AAA Screening Report",
                description: "Abdominal aorta screening report with measurements, velocities, findings, and physician interpretation.",
                href: "/reports/redacted-aaa.pdf",
              },
            ].map((report) => (
              <div
                key={report.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-red-600 ring-1 ring-slate-200">
                  <Icon name="reports" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {report.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {report.description}
                </p>
                <a
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  View Sample Report
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="patients" className="bg-slate-50 px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
              For Patients
            </p>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Self-pay ultrasound options are available.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
              ECHOHeart Imaging provides self-pay diagnostic ultrasound services for patients throughout the Tampa Bay area. Call to discuss available exams, pricing, and scheduling options.
            </p>
            <a
              href="tel:8138201630"
              className="mt-10 inline-flex rounded-full bg-red-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700"
            >
              Call 813-820-1630
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "No insurance required",
              "Transparent self-pay pricing",
              "Fast scheduling when available",
              "Board-certified physician interpretation",
              "Professional reports",
              "Tampa Bay based service",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-7 text-lg font-semibold text-slate-950 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-white p-10 shadow-2xl shadow-slate-200 md:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
                Start The Conversation
              </p>
              <h2 className="text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
                Every practice is different.
              </h2>
              <p className="mt-8 text-2xl leading-10 text-slate-600">
                Let&apos;s discuss whether ECHOHeart Imaging is the right fit for yours.
              </p>
            </div>

            <div className="grid gap-4 text-lg font-medium">
              <a
                href="tel:8138201630"
                className="rounded-3xl border border-slate-200 p-6 transition hover:border-red-600"
              >
                Phone: 813-820-1630
              </a>
              <a
                href="mailto:info@echoheartimaging.com"
                className="rounded-3xl border border-slate-200 p-6 transition hover:border-red-600"
              >
                Email: info@echoheartimaging.com
              </a>
              <div className="rounded-3xl border border-slate-200 p-6">
                St. Petersburg, FL • Serving the Tampa Bay Area
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 ECHOHeart Imaging. All rights reserved.</p>
          <p>Mobile diagnostic ultrasound throughout Tampa Bay.</p>
        </div>
      </footer>
    </main>
  );
}
