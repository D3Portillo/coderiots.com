import Navigation from "@/app/Navigation"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Content */}
      <div className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-black text-riot-red mb-8">
              Code Riots Terms of Service
            </h1>

            <div className="text-white/70 mb-8">
              <strong>Last Updated:</strong> August 18, 2025
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                1. Introduction
              </h2>

              <p className="mb-4 leading-relaxed">
                These Terms of Service ("Terms") provide the terms and
                conditions under which you, whether personally or on behalf of
                an entity ("you" or "your"), are permitted to use, interact with
                or otherwise access the platform and services provided by Radish
                Solutions LLC ("the Company," "we," "us," or "our"). These
                Terms, together with any documents and additional terms or
                policies that are appended hereto or that expressly incorporate
                these Terms by reference as well as our Privacy Policy
                (collectively, the "Terms"), constitute a binding agreement
                between you and us.
              </p>

              <p className="mb-4 leading-relaxed">
                These Terms are applicable to (i) all content, educational
                functionality, and information features (the "Content Features")
                available on CodeRiots.com (the "Site") and any other site to
                which the Terms are posted (each, as applicable, an "Interface")
                and (ii) software, including but not limited to the
                blockchain-based features (the "Blockchain Features") that may
                be available to users by connecting their self-hosted wallets
                via an Interface, including but not limited to the Site (the
                "Technology Features" and together with the Content Features,
                the "Features").
              </p>

              <p className="mb-4 leading-relaxed">
                The Site primarily functions to provide educational hackathon
                experiences, coding challenges, English language learning
                opportunities, and community-driven competitive programming
                events. The platform may include crypto-based backing and reward
                systems for participants and spectators.
              </p>

              <div className="bg-riot-red/10 border border-riot-red/30 p-6 rounded-lg mb-6">
                <p className="font-bold text-riot-red mb-2">NOTICE:</p>
                <p className="text-sm leading-relaxed">
                  PLEASE REVIEW THE TERMS CAREFULLY. BY ACCESSING, INTERACTING
                  WITH OR USING THE SITE OR ANY OTHER INTERFACE (INCLUDING BY
                  LINKING YOUR WALLET, OR OTHERWISE CREATING AN ACCOUNT ON THE
                  SITE), ANY INTERFACE OR ANY FEATURE, YOU AGREE THAT YOU ARE
                  ABLE TO ENTER INTO A BINDING AGREEMENT AND, AS SUCH, HAVE
                  READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE TERMS,
                  INCLUDING THE BINDING ARBITRATION AGREEMENT AND CLASS ACTION
                  WAIVER BELOW. IF YOU DO NOT AGREE TO ALL OF THE TERMS, YOU ARE
                  NOT AUTHORIZED TO INTERACT WITH, ACCESS OR USE ANY INTERFACE
                  OR FEATURE.
                </p>
              </div>

              <div className="bg-white/10 border border-white/25 p-6 rounded-lg">
                <p className="font-bold text-white mb-2">
                  RESTRICTED JURISDICTIONS:
                </p>
                <p className="text-sm leading-relaxed">
                  Use of certain Features involving cryptocurrency transactions
                  may not be available to persons or entities who reside in, are
                  located in, are incorporated in, or have their principal place
                  of business in jurisdictions where such activities are
                  restricted or prohibited. Users are responsible for ensuring
                  compliance with their local laws and regulations.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                2. The Platform and Services
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                2.1 Description of Services
              </h3>
              <p className="mb-4 leading-relaxed">
                Code Riots is an educational platform that provides:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-white/80">
                <li>Short-duration, high-energy hackathon experiences</li>
                <li>Coding challenges and programming competitions</li>
                <li>
                  English language learning integrated with technical education
                </li>
                <li>Community features and participant networking</li>
                <li>Optional crypto-based backing and reward systems</li>
                <li>Live streaming and spectator engagement features</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                2.2 Blockchain Integration
              </h3>
              <p className="mb-4 leading-relaxed">
                Certain Features may involve blockchain technology,
                cryptocurrency transactions, and smart contracts. When you
                interact with these Features:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-white/80">
                <li>
                  You maintain full control and custody of your digital assets
                </li>
                <li>
                  Transactions are processed on decentralized networks outside
                  our control
                </li>
                <li>All blockchain transactions are irreversible and final</li>
                <li>
                  You are responsible for your wallet security and private keys
                </li>
                <li>Network fees and gas costs are your responsibility</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                2.3 Educational Purpose
              </h3>
              <p className="mb-4 leading-relaxed">
                Code Riots is primarily an educational platform. All competitive
                elements, including any crypto-backed competitions, are designed
                to enhance the learning experience and provide real-world
                application of programming and language skills.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                3. User Responsibilities and Representations
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                3.1 Eligibility Requirements
              </h3>
              <p className="mb-4 leading-relaxed">
                As a condition to accessing or using the Site or Features, you
                represent and warrant:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">
                    Age and Authority
                  </h4>
                  <p className="text-sm text-white/80">
                    You are at least 18 years of age or have reached the age of
                    majority in your jurisdiction. If entering on behalf of an
                    entity, you have legal authority to bind such entity.
                  </p>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">
                    Technical Competence
                  </h4>
                  <p className="text-sm text-white/80">
                    You possess sufficient knowledge and skills to participate
                    in coding challenges, understand blockchain technology (if
                    using crypto features), and take responsibility for your
                    digital assets.
                  </p>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">
                    Legal Compliance
                  </h4>
                  <p className="text-sm text-white/80">
                    Your use of the Platform complies with all applicable laws
                    in your jurisdiction, including those relating to online
                    education, cryptocurrency, and international competitions.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                3.2 Prohibited Conduct
              </h3>
              <p className="mb-4 leading-relaxed">You agree not to:</p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-white/80">
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Engage in fraudulent, deceptive, or manipulative behavior
                  during competitions
                </li>
                <li>
                  Share or collaborate on individual challenges unless
                  explicitly permitted
                </li>
                <li>
                  Attempt to circumvent platform security measures or access
                  controls
                </li>
                <li>
                  Use automated tools, bots, or scripts to gain unfair
                  advantages
                </li>
                <li>
                  Harass, discriminate against, or abuse other participants
                </li>
                <li>Share inappropriate, offensive, or harmful content</li>
                <li>Attempt to reverse engineer or copy platform technology</li>
                <li>
                  Use the platform for money laundering or other illegal
                  financial activities
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                3.3 Financial Risks and Acknowledgment
              </h3>
              <div className="bg-riot-red/10 border border-riot-red/30 p-6 rounded-lg">
                <p className="font-bold text-riot-red mb-2">
                  IMPORTANT RISK DISCLOSURE:
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  Participation in crypto-backed competitions involves
                  significant financial risk. You acknowledge and understand
                  that:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    You may lose the entire amount of cryptocurrency you
                    contribute or stake
                  </li>
                  <li>
                    Cryptocurrency values are highly volatile and unpredictable
                  </li>
                  <li>Blockchain transactions are irreversible and final</li>
                  <li>
                    Technical failures or smart contract vulnerabilities may
                    result in loss of funds
                  </li>
                  <li>
                    Regulatory changes may affect the availability or legality
                    of crypto features
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                4. Competition Rules and Fair Play
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                4.1 Competition Integrity
              </h3>
              <p className="mb-4 leading-relaxed">
                Code Riots is committed to maintaining fair, educational, and
                engaging competitions. All participants must:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-white/80">
                <li>
                  Complete challenges independently unless team collaboration is
                  explicitly permitted
                </li>
                <li>
                  Use only approved resources, tools, and programming languages
                </li>
                <li>Respect time limits and submission deadlines</li>
                <li>
                  Communicate respectfully with other participants and staff
                </li>
                <li>
                  Report any technical issues or suspected violations promptly
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                4.2 Judging and Results
              </h3>
              <p className="mb-4 leading-relaxed">
                Competition results are determined through a combination of
                automated testing, peer review, and expert evaluation. The
                Company reserves the right to review and verify all submissions
                for compliance with competition rules and terms of service.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                4.3 Prizes and Rewards
              </h3>
              <p className="mb-4 leading-relaxed">
                Prizes may include cryptocurrency, tokens, educational
                resources, career opportunities, or other valuable
                consideration. All prizes are subject to applicable tax
                obligations in your jurisdiction, which are your sole
                responsibility.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                5. Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                5.1 Platform Ownership
              </h3>
              <p className="mb-4 leading-relaxed">
                The Company owns all right, title, and interest in the Code
                Riots platform, including but not limited to software, content,
                trademarks, and proprietary methodologies. You are granted a
                limited, non-exclusive, revocable license to use the platform in
                accordance with these Terms.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                5.2 User-Generated Content
              </h3>
              <p className="mb-4 leading-relaxed">
                You retain ownership of code, solutions, and other content you
                create during competitions. However, by participating, you grant
                the Company a limited license to:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-white/80">
                <li>
                  Display your submissions for judging and educational purposes
                </li>
                <li>
                  Share anonymized examples of excellent work with future
                  participants
                </li>
                <li>
                  Use aggregated data and insights for platform improvement
                </li>
                <li>
                  Showcase participant achievements in marketing and promotional
                  materials (with permission)
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                6. Privacy and Data Protection
              </h2>

              <p className="mb-4 leading-relaxed">
                Your privacy is important to us. Our collection, use, and
                protection of your personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by
                reference. By using the Platform, you consent to our data
                practices as described in the Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                6.1 Educational Data
              </h3>
              <p className="mb-4 leading-relaxed">
                We may collect and analyze data about your learning progress,
                coding patterns, and platform engagement to provide personalized
                educational experiences and improve our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                7. Disclaimers and Limitations of Liability
              </h2>

              <div className="bg-white/10 border border-white/25 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  7.1 Service Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  THE PLATFORM AND ALL SERVICES ARE PROVIDED "AS IS" AND "AS
                  AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT, OR UNINTERRUPTED SERVICE.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                7.2 Educational Outcomes
              </h3>
              <p className="mb-4 leading-relaxed">
                While we strive to provide high-quality educational experiences,
                we make no guarantees regarding specific learning outcomes,
                skill acquisition, or career advancement as a result of platform
                participation.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                7.3 Limitation of Liability
              </h3>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <p className="text-sm leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE
                  COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                  TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, ARISING
                  OUT OF OR RELATING TO YOUR USE OF THE PLATFORM. OUR TOTAL
                  LIABILITY SHALL NOT EXCEED $1,000 OR THE AMOUNT YOU PAID TO US
                  IN THE 12 MONTHS PRECEDING THE CLAIM, WHICHEVER IS GREATER.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                8. Modifications and Termination
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                8.1 Terms Modifications
              </h3>
              <p className="mb-4 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material
                changes will be communicated through the Platform or via email.
                Continued use of the Platform after changes constitutes
                acceptance of the modified Terms.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                8.2 Service Modifications
              </h3>
              <p className="mb-4 leading-relaxed">
                We may modify, suspend, or discontinue any aspect of the
                Platform at any time, with or without notice. We are not liable
                for any consequences resulting from such modifications.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                8.3 Termination
              </h3>
              <p className="mb-4 leading-relaxed">
                Either party may terminate this agreement at any time. We may
                suspend or terminate your access immediately for violation of
                these Terms. Upon termination, your right to use the Platform
                ceases, but provisions regarding intellectual property,
                disclaimers, and dispute resolution survive.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                9. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                9.1 Informal Resolution
              </h3>
              <p className="mb-4 leading-relaxed">
                Before pursuing formal legal action, parties agree to attempt
                resolution through good-faith negotiation for a period of 60
                days after written notice of the dispute.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                9.2 Arbitration Agreement
              </h3>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <p className="text-sm leading-relaxed mb-4">
                  Any unresolved disputes shall be settled by binding
                  arbitration in accordance with the rules of the American
                  Arbitration Association. Arbitration shall take place in
                  Delaware, United States, and shall be conducted in English.
                </p>
                <p className="text-sm leading-relaxed font-semibold">
                  BY AGREEING TO THESE TERMS, YOU WAIVE YOUR RIGHT TO A JURY
                  TRIAL AND TO PARTICIPATE IN CLASS ACTION LAWSUITS.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                10. Governing Law and General Terms
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                10.1 Governing Law
              </h3>
              <p className="mb-4 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of the State of Delaware, United States, without regard to
                conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                10.2 Severability
              </h3>
              <p className="mb-4 leading-relaxed">
                If any provision of these Terms is found to be unenforceable,
                the remaining provisions shall continue in full force and
                effect.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                10.3 Entire Agreement
              </h3>
              <p className="mb-4 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the
                entire agreement between you and Radish Solutions LLC regarding
                the Code Riots platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                11. Contact Information
              </h2>

              <div className="bg-black/50 p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Radish Solutions LLC
                </h3>
                <p className="text-white/80 mb-2">
                  Operating Code Riots Platform
                </p>
                <p className="text-white/80 mb-4">
                  For questions regarding these Terms of Service, please contact
                  us at:
                </p>
                <p className="text-white font-mono">legal@coderiots.com</p>
                <p className="text-white/60 text-sm mt-4">
                  We will respond to inquiries within 5 business days.
                </p>
              </div>
            </section>

            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2025 Radish Solutions LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
