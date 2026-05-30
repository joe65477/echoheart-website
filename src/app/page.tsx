import Image from "next/image";

const services = [
  "Echocardiograms",
  "Carotid Ultrasound with CIMT",
  "AAA Screening",
  "Venous Ultrasound",
  "Arterial Ultrasound",
  "Thyroid & General Ultrasound",
];

const solutionSteps = [
  "Equipment",
  "Sonographer",
  "Physician Interpretation",
  "Professional Reports",
];

const differentiators = [
  "No equipment purchase",
  "No sonographer hiring",
  "Flexible scheduling",
  "Direct communication",
  "Echo reports typically available within 24 hours",
  "Personalized service for your practice",
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
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
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
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
                Serving Tampa Bay
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
                Physician-interpreted reports
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
                Flexible practice partnerships
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
                Echo reports typically within 24 hours
              </div>
            </div>
          </div>

          <div className="relative rounded-[3rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/50">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-white via-slate-50 to-slate-200">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(220,38,38,0.12),transparent_34%)]" />
              <Image
                src="/mindraymx7.avif"
                alt="Mindray MX7 Ultrasound System used by ECHOHeart Imaging"
                width={800}
                height={600}
                className="relative h-full w-full object-contain p-8"
              />
              <div className="absolute left-6 top-6 rounded-2xl border border-slate-200 bg-white/85 px-5 py-4 shadow-xl shadow-slate-300/40 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                  Mobile Setup
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-950">
                  Equipment provided
                </p>
              </div>
              <div className="absolute bottom-6 right-6 rounded-2xl border border-slate-200 bg-slate-950/90 px-5 py-4 text-white shadow-xl shadow-slate-300/40 backdrop-blur">
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
            <h2 className="text-5xl font-semibold leading-none tracking-[-0.05em] md:text-7xl">
              Every referral out creates friction.
            </h2>
          </div>
          <p className="max-w-3xl text-2xl leading-10 text-slate-300">
            Patients wait. Staff coordinates. Care leaves your office. ECHOHeart Imaging
            gives practices a cleaner way to offer diagnostic imaging on-site while
            keeping communication simple and direct.
          </p>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
            Our Solution
          </p>
          <h2 className="max-w-3xl text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
            We bring everything.
          </h2>
          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {solutionSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-red-600 shadow-sm">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="bg-slate-50 px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
          <div className="sticky top-28">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
              Partnership Model
            </p>
            <h2 className="text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
              Your office bills insurance. We do the work.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
              Designed for practices that want to expand in-office diagnostic
              services while using their existing billing workflows.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "ECHOHeart Imaging provides mobile ultrasound equipment",
              "Experienced sonographers perform studies in your office",
              "Physician interpretation is available",
              "Your practice uses its existing billing process",
              "ECHOHeart Imaging invoices your practice monthly for services provided",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-xl font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
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
              <h2 className="text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
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
                key={service}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 text-2xl font-semibold tracking-tight transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-28 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-400">
              Responsive Service
            </p>
            <h2 className="text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
              Need an urgent study?
            </h2>
            <p className="mt-8 text-xl leading-9 text-slate-300">
              We work directly with practices to accommodate time-sensitive imaging
              needs whenever possible.
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
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
              Professional Reports
            </p>
            <h2 className="text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
              Clear reports. Confident decisions.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
              Sample reports help providers review the quality, format, and level
              of detail ECHOHeart Imaging delivers.
            </p>
          </div>

          <div className="rounded-[3rem] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-6">
                <div className="font-semibold">
                  <span className="text-red-600">ECHO</span>Heart Imaging Report
                </div>
                <div className="text-sm text-slate-500">Sample Preview</div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-2/3 rounded-full bg-slate-200" />
                <div className="h-4 w-1/2 rounded-full bg-slate-200" />
                <div className="h-4 w-5/6 rounded-full bg-slate-200" />
                <div className="mt-8 aspect-video rounded-2xl bg-slate-900" />
                <div className="h-4 w-3/4 rounded-full bg-slate-200" />
                <div className="h-4 w-1/3 rounded-full bg-slate-200" />
              </div>
            </div>
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
