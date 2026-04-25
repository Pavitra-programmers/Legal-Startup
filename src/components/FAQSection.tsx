import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  cite?: string;
}

const advocateFAQs: FAQItem[] = [
  {
    q: "Will joining this platform expose me to Bar Council disciplinary action?",
    a: "No. NyayaJustis is designed from the ground up around Bar Council of India compliance. You never advertise a fee — the citizen initiates an amount and you passively accept or decline. You are in the same legal position as a lawyer who receives an inbound call from a new client. BCI Rule 36 prohibits solicitation; it does not prohibit accepting inbound client requests. No BCI disciplinary panel has grounds to pursue action against an advocate using this model.",
    cite: "BCI Rules Part VI, Chapter II, Rule 36 | Indian Contract Act 1872, Section 2(a)",
  },
  {
    q: "Does my income from sessions count as fee-splitting with a non-advocate entity?",
    a: "No. BCI Rule 20 prohibits advocates from sharing professional fees with non-advocates. NyayaJustis eliminates this risk by structural design: your consultation fee is paid directly from the citizen to you — NyayaJustis never receives, holds, or routes any portion of it. The only amount the platform collects is its own separate technology fee charged to the citizen for the SOS infrastructure, recording, and evidence services. Two completely independent transactions to two separate parties.",
    cite: "BCI Rules Part VI, Chapter II, Rule 20 | Advocates Act 1961",
  },
  {
    q: "Are my sessions protected by attorney-client privilege?",
    a: "Yes. The moment you accept a session, privilege attaches under Section 126 of the Bharatiya Sakshya Adhiniyam 2023. All communication between you and the client is privileged from that point forward. The platform architecture enforces this technically — session recordings are encrypted on acceptance and stored in an access-controlled environment that no NyayaJustis employee can access without a valid court order.",
    cite: "Bharatiya Sakshya Adhiniyam 2023, Section 126 | IT Act 2000, Section 43A",
  },
  {
    q: "What am I legally liable for during a session?",
    a: "You provide real-time legal advice in good faith, in your capacity as an independent advocate. You are not a field authority — you cannot and are not expected to command police officers. Your role is advisory: guide the citizen's rights assertion, advise what to say and what not to sign, and create a documented witnessed record. The platform Terms & Conditions clearly define NyayaJustis as the technology intermediary and you as the independent professional. Outcomes of police interactions that occur contrary to your advice are outside your liability.",
  },
  {
    q: "What exactly am I paying for with an Advocate Pro subscription?",
    a: "You pay for platform access — the SOS matching engine, the AI legal assistant trained on Indian law, case analytics, encrypted session infrastructure, and your professional profile. This is a pure SaaS relationship. There is no per-client charge, no commission on your professional earnings, and no per-session fee deducted from what the citizen pays you. The platform is your customer; your clients are yours.",
    cite: "BCI Rules | Advocates Act 1961",
  },
  {
    q: "Can I be compelled to testify about what I witnessed in a session?",
    a: "Communications between you and the client during a session are privileged. What you witness of the police encounter itself — audio, video of the officer interaction — is a different matter and the recorded evidence (which is the citizen's, not yours) may be introduced in proceedings by the citizen. However, your advice to the client remains fully protected by Section 126 of the Bharatiya Sakshya Adhiniyam 2023.",
    cite: "BSA 2023, Section 126",
  },
];

const citizenFAQs: FAQItem[] = [
  {
    q: "Is it legal to record a police officer during a traffic stop in India?",
    a: "Yes, within limits. India does not have a two-party consent recording law. As a party to the interaction, you have the right to record your own encounter — this flows from Article 19(1)(a) and Article 21 of the Constitution. Recording police officers performing a public duty in a public space has been upheld in principle by Indian courts. NyayaJustis recording activates at the SOS press and records only the encounter you are actively part of. The evidence package also includes a Section 65B of the Bharatiya Sakshya Adhiniyam 2023 certified certificate, making the recording court-admissible — not just a raw video file.",
    cite: "Art. 19 & 21, Constitution of India | Section 65B, Bharatiya Sakshya Adhiniyam 2023 (BSA 2023)",
  },
  {
    q: "Can the lawyer on the call actually do anything — can they order the police to leave me alone?",
    a: "A lawyer cannot issue commands to police officers remotely, and they will never claim otherwise. What they do is far more powerful in practice: they advise you exactly what to say and what not to sign, guide you to assert your Article 22 rights correctly, coach you to request the officer's identification and grounds for detention, and — most critically — create a documented, timestamped, professionally witnessed record of everything that happens. The deterrence effect of a recorded, lawyer-witnessed interaction is substantial. Misconduct becomes nearly impossible to deny.",
    cite: "Art. 22(1), Constitution of India | D.K. Basu v. State of West Bengal (1997) SC",
  },
  {
    q: "What if no lawyer is available when I press SOS?",
    a: "The platform shows you real-time availability before you commit your session request. If no lawyer accepts your initial offer within a short window, the platform prompts you with guidance on adjusting your request. In the rare case of true unavailability, you are directed to legal aid helplines. NyayaJustis does not guarantee connection speed, which is why we advise every user to also maintain independent access to a personal advocate — and to activate SOS the moment a stop begins, not after things escalate.",
    cite: "Consumer Protection Act 2019, Section 2(9)",
  },
  {
    q: "Can the recording actually be used as evidence in court?",
    a: "Yes, if properly generated. Under Section 65B of the Bharatiya Sakshya Adhiniyam 2023, electronic records are admissible as evidence when accompanied by a certificate from a responsible official attesting to the recording conditions. NyayaJustis builds this certification chain into every evidence package. This transforms your phone video into legally admissible evidence — usable in court, before a Human Rights Commission, or in a formal police complaint proceeding.",
    cite: "Section 65B, Bharatiya Sakshya Adhiniyam 2023 (BSA 2023) | Anvar P.V. v. P.K. Basheer (2014) SC",
  },
  {
    q: "Does this work for serious criminal cases or FIRs?",
    a: "NyayaJustis is currently designed for non-cognizable encounters — traffic stops, roadside document checks, challan disputes, and situations where you are questioned but not formally arrested for a cognizable offence. It is not designed for FIR proceedings, criminal trials, or bail hearings. If your situation escalates to a cognizable arrest during a session, the platform immediately guides you to the appropriate resources — a personal advocate or legal aid helpline — and session matching terminates. This scope is deliberate, not a limitation: a focused product serves you better than one that overreaches.",
    cite: "BNSS 2023, First Schedule | Motor Vehicles Act 1988",
  },
  {
    q: "Who can see my session recordings?",
    a: "You own your session recording. From the moment your advocate accepts, the session is encrypted and stored in a privilege-protected environment that NyayaJustis staff cannot access without a court order. NyayaJustis will never sell, share, or use the content of your session for any commercial purpose. Any data used for platform improvement or public accountability reporting is drawn exclusively from anonymised, non-session metadata — never from your conversation.",
    cite: "BSA 2023, Section 126 | Digital Personal Data Protection Act 2023",
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => (
  <div className="border-b border-border">
    <button
      className="w-full text-left py-5 sm:py-6 flex items-start justify-between gap-4 group"
      onClick={onToggle}
    >
      <span className="font-heading text-base sm:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
        {item.q}
      </span>
      <ChevronDown
        className={`w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        strokeWidth={1.5}
      />
    </button>
    {isOpen && (
      <div className="pb-5 sm:pb-6">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 sm:pl-5">
          {item.a}
        </p>
        {item.cite && (
          <p className="mt-3 text-[11px] text-primary/60 font-mono tracking-wide pl-4 sm:pl-5">
            § {item.cite}
          </p>
        )}
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openAdvocate, setOpenAdvocate] = useState<number | null>(null);
  const [openCitizen, setOpenCitizen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background relative">
      <div className="absolute top-8 sm:top-12 left-4 sm:left-6 md:left-12 text-6xl sm:text-8xl md:text-[12rem] font-heading font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
        FAQ
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">
          Frequently Asked Questions
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground max-w-2xl leading-tight mb-4">
          Your questions, answered honestly.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-16 sm:mb-20 leading-relaxed">
          These answers have been developed with reference to specific Indian law provisions.
          Whether you are an advocate considering joining the platform or a citizen who wants
          to understand exactly what you are getting — this is for you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* For Advocates */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold bg-primary/10 px-3 py-1.5 border border-primary/20">
                For Advocates
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div>
              {advocateFAQs.map((item, i) => (
                <FAQAccordionItem
                  key={i}
                  item={item}
                  isOpen={openAdvocate === i}
                  onToggle={() => setOpenAdvocate(openAdvocate === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* For Citizens */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold bg-primary/10 px-3 py-1.5 border border-primary/20">
                For Citizens
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div>
              {citizenFAQs.map((item, i) => (
                <FAQAccordionItem
                  key={i}
                  item={item}
                  isOpen={openCitizen === i}
                  onToggle={() => setOpenCitizen(openCitizen === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
