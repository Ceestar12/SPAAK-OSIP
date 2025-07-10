import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Real-world experience for your students/alumni",
  "Portfolio-worthy project participation",
  "Exposure to mentorship and collaborative teamwork",
  "Access to Demo Day and potential hiring opportunities",
  "Branding & recognition as an OSIP Partner Institution",
];

const Index = () => {
  return (
    <div className="font-inter bg-brand-light min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full pt-16 md:pt-20 px-2 pb-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Header Block */}
          <div className="mb-1">
            <div className="text-base font-semibold text-brand-navy uppercase tracking-wider mb-2">
              One-Shot Innovation Program <span className="text-brand-gold">(OSIP)</span>
            </div>
            <hr className="border-brand-navy/40 mb-3" />
            <h1 className="text-2xl md:text-4xl font-bold text-brand-navy mb-3 leading-tight max-w-2xl">
              Bring Your Tech Ideas to Life with the One-Shot Innovation Program (OSIP)
            </h1>
          </div>

          {/* Problem Statement */}
          <section className="mb-7">
            <div className="text-brand-navy text-[1.07rem] leading-relaxed">
              Every day, brilliant ideas are born, ideas that could solve real problems and improve lives. Yet, most of them never make it past the idea stage. Why?
              <ul className="list-disc pl-6 my-2 space-y-1">
                <li>Innovators struggle to find the technical talent and support to execute.</li>
                <li>Tech talents graduate with skills but have no real-world experience to apply them.</li>
                <li>Investors want MVPs, not concepts.</li>
              </ul>
              This gap between ideas and execution is what the One-Shot Innovation Program (OSIP) is built to bridge.
            </div>
          </section>

          {/* What is OSIP */}
          <section id="about" className="mb-8 flex flex-col md:flex-row gap-6 md:items-center scroll-mt-20">
            <div className="flex-1">
              <div className="text-xl font-semibold text-brand-gold mb-1">
                What is OSIP?
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white shadow-md py-5 px-6 text-brand-navy/95 text-[1.06rem] leading-relaxed border border-gray-200 max-w-xl"
              >
                The One-Shot Innovation Program (OSIP) is a 6–8 week accelerator-style initiative designed to bring innovators and tech talents together to co-develop real products from scratch.
                <br /><br />
                Each OSIP cycle selects 10 promising innovators and pairs them with skilled tech talents, developers, designers, analysts, and product managers to bring their ideas to life.
              </motion.div>
            </div>
            <div className="flex-1 hidden md:block">
              <img
                src="/Gemini_Generated_Image_96iluz96iluz96il (1).webp"
                alt="Collaborative team working on innovation"
                className="rounded-xl border border-gray-200 shadow-md w-full h-auto object-cover max-h-[280px]"
              />
            </div>
          </section>

          {/* Why Partner with Us */}
          <section id="why-partner" className="mb-8 flex flex-col md:flex-row gap-6 md:items-center scroll-mt-20">
            <div className="flex-1 hidden md:block">
              <img
                src="/Gemini_Generated_Image_atvpktatvpktatvp1.webp"
                alt="Collaborative team working on innovation"
                className="rounded-xl border border-gray-200 shadow-md w-full h-auto object-cover max-h-[280px]"
              />
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-brand-gold mb-1">
                Why Partner with Us?
                <span className="block w-16 h-[2px] rounded bg-brand-gold mt-2 mb-4"></span>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-brand-navy text-[1.07rem] leading-relaxed mb-1">
                  As a tech training institution, you train the talents. OSIP gives them a launchpad to apply what they've learned in real-world, impact-driven projects.
                </div>
                <div>
                  <div className="font-semibold mb-1 text-brand-navy">Benefits to Your Institution:</div>
                  <ul className="space-y-1">
                    {points.map((point, idx) => (
                      <li key={`point-${idx}`} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 min-w-5 mt-[2px]" size={19} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Ready to Build Section */}
          <section id="contact" className="mb-7 scroll-mt-20">
            <h2 className="text-xl font-semibold text-brand-gold mb-2">Ready to Build?</h2>
            <div className="text-brand-navy text-[1.07rem] leading-relaxed space-y-2">
              <div>
                <span className="font-bold">Innovators</span> – Bring your idea, find your team, and get it done.{" "}
                <a href="https://tinyurl.com/osip-initiative" className="text-brand-gold hover:underline">Apply Now</a>
              </div>
              <div>
                <span className="font-bold">Tech Talents</span> – Level up your skills, work on real products, and grow your network.{" "}
                <a href="https://tinyurl.com/osip-talent" className="text-brand-gold hover:underline">Join The Talent Pool</a>
              </div>
              <div>
                <span className="font-bold">Tech Schools</span> – Empower your students, showcase your institution, and become an OSIP Partner.
              </div>
              <div>
                <span className="font-bold">Questions?</span> – Reach out anytime:{" "}
                <a href="mailto:osip@decisionspaak.com" className="text-brand-gold hover:underline">osip@decisionspaak.com</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
