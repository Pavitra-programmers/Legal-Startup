import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const clauses = [
  {
    title: "Clause 1 — Nature of the Platform (Technology Intermediary, Not a Law Firm)",
    body: "NyayaJustis is a technology platform and intermediary service, not a law firm, legal services provider, or legal advice entity. NyayaJustis does not practice law, does not provide legal advice, and does not employ advocates. The platform provides technology infrastructure — including SOS routing, video call facilitation, session recording, encrypted cloud storage, evidence certification, and a legal marketplace matching engine. Any legal advice received through the platform is provided exclusively by the independent advocate who accepted the session. NyayaJustis is not a party to the advocate-client relationship and bears no liability for the content, accuracy, or outcome of any legal advice given.",
  },
  {
    title: "Clause 2 — Scope Limitation (Non-Cognizable Offences & Motor Vehicles Act Only)",
    body: "NyayaJustis is expressly and exclusively designed for use during non-cognizable offence encounters and Motor Vehicles Act disputes. The platform is not designed for, and must not be used in connection with, cognizable offences, FIR proceedings, criminal trials, bail hearings, court appearances, or any matter requiring physical legal representation. If a citizen's situation escalates to a cognizable arrest during a session, the platform will prompt the citizen to contact their personal advocate or a legal aid helpline, and session matching will terminate. NyayaJustis expressly disclaims all liability arising from use of the platform in situations outside this defined scope.",
  },
  {
    title: "Clause 3 — Recording Consent (Citizen)",
    body: "By activating the SOS function, the citizen expressly consents to the audio and video recording of the encounter and the live session. The citizen confirms they are a party to the interaction being recorded and that they initiate the recording willingly. The citizen acknowledges that NyayaJustis stores this recording in encrypted cloud storage for the retention period selected by the citizen's plan tier. The citizen is solely responsible for ensuring that their use of the recording function complies with applicable local laws, and NyayaJustis provides no warranty as to the admissibility of recordings in specific jurisdictions or courts.",
  },
  {
    title: "Clause 4 — Recording Consent (Advocate)",
    body: "By registering on NyayaJustis and accepting any session, the advocate expressly consents to the audio and video recording of all sessions they participate in. The advocate acknowledges that recordings are stored in encrypted, privilege-protected cloud storage and that NyayaJustis personnel cannot access session recordings without a valid court order. The advocate accepts that session recordings may be used by the citizen for legitimate legal purposes and that NyayaJustis is not liable for any third-party use of recordings beyond the platform's control.",
  },
  {
    title: "Clause 5 — Separation of Fees (Platform vs. Legal Consultation)",
    body: "The NyayaJustis platform fee and the advocate's consultation fee are two separate, independent transactions between separate parties for separate services. NyayaJustis collects only the platform or technology fee. The advocate's consultation fee is paid directly by the citizen to the advocate through a separate payment transaction. NyayaJustis does not receive, hold, aggregate, split, or disburse any portion of the advocate's professional fee. The citizen acknowledges and agrees to this separation prior to payment confirmation. NyayaJustis is not liable for any dispute between the citizen and the advocate regarding the consultation fee.",
  },
  {
    title: "Clause 6 — No Guarantee of Advocate Availability",
    body: "NyayaJustis does not guarantee that an advocate will accept any given SOS session at the citizen's offered price. Advocate acceptance is voluntary and independent. NyayaJustis provides best-effort real-time matching and availability indicators but does not guarantee connection within any specific time period. Citizens in genuine emergencies are advised not to rely solely on NyayaJustis and to maintain independent access to a personal advocate or legal aid service. NyayaJustis shall not be liable for any harm arising from failure to connect within a citizen's desired time frame.",
  },
  {
    title: "Clause 7 — Limitation of Liability",
    body: "NyayaJustis's total liability to any citizen or advocate for any claim arising from platform use is limited to the platform fee paid for the specific session in question. NyayaJustis is not liable for: outcomes of any legal proceedings; accuracy or completeness of any legal advice given by advocates; police action taken before or after a session; loss or corruption of recordings due to device failure, network outage, or force majeure; or any consequential, indirect, or punitive damages of any kind. NyayaJustis does not warrant that the platform's operation will be uninterrupted or error-free.",
  },
  {
    title: "Clause 8 — AI Assistant Disclaimer",
    body: "The Nyaya AI assistant provides general informational output about Indian law and is not legal advice. All AI output is clearly labeled as general information. The AI assistant is not a licensed advocate, does not create an advocate-client relationship, and should not be relied upon as a substitute for professional legal advice. NyayaJustis expressly disclaims all liability for any action taken or not taken based on AI assistant output. Citizens are always encouraged to consult a live advocate through the platform for their specific situation.",
  },
  {
    title: "Clause 9 — Data Privacy & Privilege Protection",
    body: "Session recordings and communications from the moment of advocate acceptance are treated as attorney-client privileged material. NyayaJustis will not access, share, sell, or use session content for any purpose without a valid court order. Pre-session data — encounter geography, case type, session duration, and other non-privileged metadata — may be aggregated and anonymised for platform improvement and public accountability reporting. No personally identifiable information is included in any data shared externally. The platform complies with the Digital Personal Data Protection Act 2023 and all applicable data protection obligations.",
  },
  {
    title: "Clause 10 — Governing Law & Dispute Resolution",
    body: "These terms are governed by the laws of India. All disputes between citizens and NyayaJustis, and between advocates and NyayaJustis, shall be subject to the exclusive jurisdiction of courts in the platform's registered city. Disputes between citizens and advocates arising from the consultation engagement are governed by the advocate-client engagement letter and are entirely outside NyayaJustis's jurisdiction. Citizens and advocates agree to attempt resolution through the platform's internal grievance mechanism before approaching courts, in accordance with Consumer Protection Act 2019 requirements.",
  },
];

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Nyaya<span className="text-primary">Justis</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-28 pb-24">
        {/* Header */}
        <div className="mb-12 sm:mb-16 border-b border-border pb-10">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed mb-4">
            These Terms of Service govern your use of the NyayaJustis platform — whether you are
            a citizen using the SOS service or an advocate joining the NyayaJustis network. Please
            read these terms carefully before using the platform.
          </p>
          <p className="text-xs text-muted-foreground/60 font-mono tracking-wide">
            Last updated: April 2026 · NyayaJustis · Early-stage platform
          </p>
        </div>

        {/* Notice box */}
        <div className="bg-primary/5 border border-primary/20 p-5 sm:p-6 mb-12 sm:mb-16">
          <p className="text-sm text-foreground/80 leading-relaxed">
            <strong className="font-semibold text-foreground">Important:</strong> NyayaJustis is a
            technology platform, not a law firm. Using this platform does not create a lawyer-client
            relationship between you and NyayaJustis. Any legal advice you receive is provided
            solely by the independent advocate you connect with. The platform currently operates
            within the scope of non-cognizable offences and Motor Vehicles Act disputes only.
          </p>
        </div>

        {/* Clauses */}
        <div className="space-y-10 sm:space-y-12">
          {clauses.map((clause, i) => (
            <div key={i} className="border-l-2 border-primary/20 pl-5 sm:pl-7">
              <h2 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-3 leading-snug">
                {clause.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {clause.body}
              </p>
            </div>
          ))}
        </div>

        {/* Questions */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-border">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
            Questions about these Terms?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            If you have questions about these Terms of Service or how the platform operates, reach
            out to us directly. We are an early-stage startup and we read every message.
          </p>
          <a
            href="mailto:stringcostdevs@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
