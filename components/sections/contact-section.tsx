import { MagneticButton } from "@/components/ui/magnetic-button";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-8 max-w-4xl mx-auto flex flex-col items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl shadow-2xl p-10 md:p-16 rounded-3xl flex flex-col items-center text-center relative z-10 hover:border-violet-500/30 transition-colors duration-500">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">together</span>
        </h2>
        <p className="text-neutral-400 mb-12 max-w-md mx-auto text-lg">
          I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <a href="mailto:suj5al78@gmail.com" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all group">
            <Mail className="w-5 h-5 text-neutral-400 group-hover:text-violet-400" />
            <span className="text-sm font-medium text-neutral-300 group-hover:text-white">suj5al78@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/sujal-kachhawah-058564291" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all group">
            <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-violet-400" />
            <span className="text-sm font-medium text-neutral-300 group-hover:text-white">Sujal Kachhawah</span>
          </a>
        </div>

        <MagneticButton className="bg-white text-black border-transparent hover:bg-neutral-200 hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full font-bold text-lg">
          Say Hello
        </MagneticButton>

        <div className="mt-16 flex items-center gap-2 text-neutral-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>Nagpur, India</span>
        </div>
      </div>
    </section>
  );
}
