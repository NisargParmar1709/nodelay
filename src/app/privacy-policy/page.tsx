import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NoDelay",
  description: "How NoDelay handles project data, personal information, and security commitments for orchestration projects.",
};

type Block = {
  title: string;
  intro?: string;
  items: string[];
};

const blocks: Block[] = [
  {
    title: "1. Controller details",
    intro: "NoDelay Ltd. is the controller for personal data collected through our website, demos, and client engagements. You can reach us at nodelay.tech@gmail.com for any privacy questions.",
    items: [
      "Mailing address and registered office details are supplied in your statement of work or on request.",
      "We appoint sub-processors only after diligence confirming equivalent security and confidentiality standards.",
    ],
  },
  {
    title: "2. Information we collect",
    items: [
      "Contact and account data that you voluntarily submit, such as name, email address, telephone number, company, job title, and project notes.",
      "Engagement artefacts, including datasets, prompts, workflows, or infrastructure details that you provide so we can scope and deliver services.",
      "Operational telemetry generated when we run automations on your behalf, such as workflow identifiers, timing, throughput, and success rates.",
      "Website usage data collected through essential cookies or analytics that help us understand aggregate performance. We do not use advertising cookies.",
    ],
  },
  {
    title: "3. How we use personal data",
    items: [
      "To respond to enquiries, schedule demos, prepare proposals, and manage customer relationships.",
      "To deliver, secure, and improve the automations, user interfaces, and operational artefacts agreed in the relevant statement of work.",
      "To send essential communications about service changes, security incidents, invoices, or contractual updates.",
      "To comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "4. Lawful bases for processing",
    intro: "We rely on the following legal grounds under UK GDPR and similar regulations, depending on the context of the processing:",
    items: [
      "Performance of a contract when we provide requested services or support existing engagements.",
      "Legitimate interests to operate and improve our business where those interests are not overridden by your rights.",
      "Consent for optional communications or where you actively agree to optional diagnostic tools.",
      "Compliance with legal obligations such as tax, accounting, or responding to lawful requests from authorities.",
    ],
  },
  {
    title: "5. Retention and security",
    items: [
      "Project environments are isolated per client. We restrict access using role-based controls and review it regularly.",
      "Unless an engagement requires longer retention, we delete or return project artefacts within thirty (30) days of completion. Accounting records may be stored for up to seven (7) years to meet legal obligations.",
      "We maintain administrative, technical, and physical safeguards proportional to the sensitivity of the information handled, including encrypted storage, network segmentation, and change monitoring.",
    ],
  },
  {
    title: "6. Sharing and international transfers",
    items: [
      "We do not sell or rent personal information. We share data only with vendors that help us deliver the Services, such as hosting, analytics, communication, or incident response partners.",
      "When data leaves the UK or EEA we rely on recognised safeguards, including adequacy decisions or standard contractual clauses, and ensure equivalent security commitments from our providers.",
      "We may disclose information if required by law, regulation, or court order, or to protect our rights or the safety of others.",
    ],
  },
  {
    title: "7. Your rights",
    items: [
      "You may request access to the personal data we hold about you, ask for corrections, request deletion, or object to certain processing activities.",
      "If we process data based on consent you can withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal.",
      "To exercise your rights contact nodelay.tech@gmail.com. We will respond within one month, or sooner where required by law.",
      "If you are unsatisfied with our response you have the right to lodge a complaint with the UK Information Commissioner's Office or your local supervisory authority.",
    ],
  },
  {
    title: "8. Children",
    items: [
      "Our Services are not directed to individuals under the age of 16, and we do not knowingly collect personal data from children. If you believe a child has provided us with information, please contact us so we can remove it.",
    ],
  },
  {
    title: "9. Updates",
    items: [
      "We may revise this Privacy Policy to reflect regulatory changes or improvements to our safeguards. We will post the revised policy with an updated date and inform active clients of material changes.",
    ],
  },
  {
    title: "10. Contact",
    items: [
      "For privacy enquiries, data subject requests, or security notifications email nodelay.tech@gmail.com. If you prefer encrypted communication, request our PGP details in your message.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell">
      <div className="section-shell__inner space-y-12">
        <header className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#111111] bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#111111]">
            Privacy
          </span>
          <h1 className="heading-section text-[#111111]">Privacy Policy</h1>
          <p className="body-lead mx-auto max-w-3xl text-[#4B5563]">
            This notice explains how NoDelay collects, uses, protects, and shares personal data in connection with our orchestration services and digital products.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[#748347]">
            Last updated: 05 January 2026
          </p>
        </header>

        <section className="space-y-10">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="space-y-4 rounded-[18px] border border-[#111111]/20 bg-white px-6 py-7 shadow-[6px_6px_0_#111111]"
            >
              <h2 className="text-left text-2xl font-display text-[#111111]">{block.title}</h2>
              {block.intro && (
                <p className="text-[0.95rem] leading-relaxed text-[#374151]">{block.intro}</p>
              )}
              <ul className="space-y-2 pl-5 text-[0.95rem] text-[#374151]">
                {block.items.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <footer className="rounded-[18px] border border-[#111111]/25 bg-[#F2F1E9] px-6 py-7 text-center">
          <p className="text-sm text-[#4B5563]">
            Need to raise a privacy request or report a data incident? Email
            {" "}
            <a href="mailto:nodelay.tech@gmail.com" className="font-medium text-[#111111] underline">
              nodelay.tech@gmail.com
            </a>
            {" "}
            and include your organisation name and preferred contact method.
          </p>
        </footer>
      </div>
    </main>
  );
}
