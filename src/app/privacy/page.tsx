

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200 md:p-12">
        <a
          href="/"
          className="mb-10 inline-flex text-sm font-semibold text-red-600 transition hover:text-red-700"
        >
          ← Back to ECHOHeart Imaging
        </a>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-600">
          HIPAA Privacy Notice
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
          Notice of Privacy Practices
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          This notice describes how medical information about you may be used and disclosed and how you can access this information. Please review it carefully.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Our Commitment to Your Privacy</h2>
            <p className="mt-3">
              ECHOHeart Imaging Services is committed to protecting the privacy and security of your health information. We are required by law to maintain the privacy of protected health information and to provide you with this Notice of Privacy Practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">How We May Use and Disclose Your Health Information</h2>
            <p className="mt-3">
              We may use and disclose your health information for treatment, payment, and healthcare operations. This may include performing your ultrasound examination, providing reports to your referring healthcare provider when applicable, collecting payment, maintaining records, communicating with you about appointments or reports, and conducting normal business operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Treatment</h2>
            <p className="mt-3">
              We may use or disclose your health information to provide diagnostic ultrasound services and to communicate results to your referring healthcare provider or other healthcare professionals involved in your care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Payment</h2>
            <p className="mt-3">
              We may use and disclose your health information to collect payment for services provided. ECHOHeart Imaging Services may operate as a self-pay provider and may collect payment at the time services are rendered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Healthcare Operations</h2>
            <p className="mt-3">
              We may use and disclose your health information for business operations, including quality review, recordkeeping, scheduling, compliance, and other administrative activities necessary to provide healthcare services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Other Uses and Disclosures</h2>
            <p className="mt-3">
              We may use or disclose your health information when required by law, for public health activities, to report abuse or neglect when required, to comply with legal proceedings, or to respond to lawful requests from government agencies or law enforcement when applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Request a copy of your health information.</li>
              <li>Request that we correct health information you believe is inaccurate.</li>
              <li>Request confidential communications.</li>
              <li>Request limits on certain uses or disclosures of your information.</li>
              <li>Receive a list of certain disclosures of your health information.</li>
              <li>Receive a paper copy of this notice upon request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Our Responsibilities</h2>
            <p className="mt-3">
              We are required to maintain the privacy and security of your protected health information, follow the terms of this notice, and notify you if a breach occurs that may have compromised the privacy or security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Complaints</h2>
            <p className="mt-3">
              If you believe your privacy rights have been violated, you may contact ECHOHeart Imaging Services using the information below. You may also file a complaint with the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint.
            </p>
          </section>

          <section className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Contact Information</h2>
            <p className="mt-3 font-semibold text-slate-950">ECHOHeart Imaging Services</p>
            <p>Administrative Office: 100 2nd Ave S, Suite 904S, St. Petersburg, FL 33701</p>
            <p>Phone: 813-820-1630</p>
            <p>Email: info@echoheartimaging.com</p>
          </section>

          <p className="text-sm text-slate-500">
            Effective Date: June 1, 2026
          </p>
        </div>
      </div>
    </main>
  );
}