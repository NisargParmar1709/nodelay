import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NoDelay",
  description: "Understand the terms governing the use of NoDelay's orchestration and automation services.",
};

type Section = {
  title: string;
  body: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: "1. Engagement and scope",
    body: [
      "These Terms of Service (Terms) form the agreement between NoDelay Ltd. (NoDelay, we, us) and the client organisation that requests a demo, signs a proposal, or otherwise engages our orchestration and automation services (Client, you). By proceeding you confirm that you are authorised to bind your organisation to these Terms.",
      "Each project will be documented in an order form, proposal, or statement of work (SOW). The SOW governs any conflicting commercial detail, while these Terms control all other matters. Together they are the Agreement.",
    ],
  },
  {
    title: "2. Services and client obligations",
    body: [
      "NoDelay delivers discovery, design, automation engineering, and implementation support according to the agreed SOW. We will perform the Services using reasonable skill and care consistent with industry practice.",
      "You will provide timely access to personnel, systems, APIs, test data, and subject matter expertise needed for us to perform the Services. You are responsible for:",
    ],
    bullets: [
      "Ensuring inputs, credentials, and instructions supplied to NoDelay are accurate and lawful.",
      "Maintaining appropriate backups and fallbacks for critical business processes.",
      "Reviewing deliverables promptly and communicating acceptance or actionable feedback.",
    ],
  },
  {
    title: "3. Fees and payment",
    body: [
      "Fees and payment schedules are set out in the applicable SOW. Unless otherwise stated invoices are due within fifteen (15) days of the invoice date in the currency specified. Late payments may pause work until resolved, and we may charge interest at the lower of 1.5 percent per month or the maximum permitted by law.",
      "Either party may terminate the Agreement for convenience with fourteen (14) days written notice, or immediately if the other party materially breaches and fails to cure within ten (10) days after notice. You will pay all fees earned and reimbursable expenses incurred up to the termination effective date.",
    ],
  },
  {
    title: "4. Confidential information",
    body: [
      "Confidential Information means any non public information disclosed by a party relating to business plans, data, code, customers, security posture, or pricing. The receiving party will use the disclosing party's Confidential Information solely to perform its obligations, will protect it using at least reasonable care, and will share it only with personnel who need to know and are bound by duties of confidentiality.",
      "These obligations do not apply to information that becomes public through no fault of the receiving party, was already known, is independently developed, or is lawfully received from a third party. If disclosure is legally required the receiving party will provide prompt notice (where permitted) and cooperate to seek protective treatment.",
    ],
  },
  {
    title: "5. Data handling and security",
    body: [
      "We isolate client data per engagement, apply access controls based on least privilege, and remove project artefacts within thirty (30) days after completion unless legal retention or the SOW requires otherwise.",
      "Both parties will comply with applicable privacy, export, and data protection laws. If regulated personal data is processed, the parties will execute any required data processing agreement. You remain responsible for obtaining necessary consents from individuals whose data you supply.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "Each party retains ownership of its pre-existing materials and background intellectual property. Upon full payment, NoDelay grants you a perpetual, non-exclusive licence to use, copy, and modify the Deliverables identified in the SOW for your internal business purposes.",
      "NoDelay may re-use know-how, templates, and generic components that do not include your Confidential Information. Feedback that you voluntarily provide may be used to improve our services without restriction.",
    ],
  },
  {
    title: "7. Warranties and disclaimers",
    body: [
      "Each party warrants that it has the right and authority to enter the Agreement. NoDelay warrants that the Services will be provided in a professional manner and that we will not knowingly infringe third-party rights.",
      "Except as expressly stated, the Services and Deliverables are provided as is. To the maximum extent permitted by law, NoDelay disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. You are responsible for validating outputs before relying on them in production workflows.",
    ],
  },
  {
    title: "8. Indemnity and limitation of liability",
    body: [
      "Each party will indemnify the other against third-party claims arising from the indemnifying party's gross negligence, wilful misconduct, or violation of applicable law. The indemnified party must promptly notify the other and allow control of the defence and settlement.",
      "Neither party will be liable for indirect, incidental, special, consequential, or punitive damages, nor for lost profits, revenue, goodwill, or data. NoDelay's aggregate liability arising out of the Agreement will not exceed the fees paid or payable for the Services giving rise to the claim in the six (6) months preceding the event.",
    ],
  },
  {
    title: "9. Compliance and export",
    body: [
      "The Services must not be used in violation of international sanctions, export laws, or industry regulations. You represent that you are not on any government denied-party list and will not provide NoDelay with access to controlled data without prior written agreement.",
    ],
  },
  {
    title: "10. Governing law and disputes",
    body: [
      "These Terms are governed by the laws of England and Wales, excluding conflict of law principles. The parties will first attempt to resolve disputes through good-faith negotiations between senior representatives. If unresolved after thirty (30) days, either party may bring the dispute exclusively in the courts of England and Wales, and each party consents to that jurisdiction.",
    ],
  },
  {
    title: "11. Changes",
    body: [
      "We may update these Terms to reflect operational or legal changes. Material amendments will be communicated to the primary contact on record at least ten (10) days before they take effect. Continued use of our Services after the effective date constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "12. Contact",
    body: [
      "Questions about this Agreement should be directed to nodelay.tech@gmail.com or to the mailing address identified in your SOW. Notices must be in writing and are deemed given when delivered by email with confirmation, by courier, or by registered post.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="section-shell">
      <div className="section-shell__inner space-y-12">
        <header className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#111111] bg-[#D9F01B] px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#111111]">
            Terms
          </span>
          <h1 className="heading-section text-[#111111]">Terms of Service</h1>
          <p className="body-lead mx-auto max-w-3xl text-[#4B5563]">
            This Agreement explains the legal terms governing every discovery, prototype, or production engagement with NoDelay. Please review it carefully before granting us access to your data or systems.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[#748347]">
            Last updated: 05 January 2026
          </p>
        </header>

        <section className="space-y-10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="space-y-4 rounded-[18px] border border-[#111111] bg-white px-6 py-7 shadow-[6px_6px_0_#111111]"
            >
              <h2 className="text-left text-2xl font-display text-[#111111]">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph, index) => (
                  <p key={index} className="text-[0.95rem] leading-relaxed text-[#374151]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="space-y-2 pl-5 text-[0.95rem] text-[#374151]">
                  {section.bullets.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <footer className="rounded-[18px] border border-[#111111]/25 bg-[#F2F1E9] px-6 py-7 text-center">
          <p className="text-sm text-[#4B5563]">
            Have questions about these Terms or need a signed copy? Email
            {" "}
            <a href="mailto:nodelay.tech@gmail.com" className="font-medium text-[#111111] underline">
              nodelay.tech@gmail.com
            </a>
            {" "}
            and we will be in touch within one business day.
          </p>
        </footer>
      </div>
    </main>
  );
}
