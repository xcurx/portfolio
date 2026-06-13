import { CrosshairIcon } from "@/components/ui/crosshair-icon";

export function AchievementsSection() {
  const achievements = [
    {
      title: "Winner",
      issuer: "Smart India Hackathon 2025",
      date: "National Level",
      highlight: true
    },
    {
      title: "Finalist",
      issuer: "Smart India Hackathon 2024",
      date: "National Level",
    },
    {
      title: "3rd Place",
      issuer: "IIT BHU Hackitout",
      date: "Hackathon",
    },
  ];

  return (
    <section id="achievements" className="py-32 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-20 text-center text-white">
        Achievements
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {achievements.map((achievement, idx) => (
          <div key={idx} className={`relative w-full border p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl shadow-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 rounded-xl ${achievement.highlight ? 'border-violet-500/50 shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]' : 'border-white/10 hover:border-violet-500/30'}`}>
            <CrosshairIcon className={`absolute h-6 w-6 -top-3 -left-3 z-20 transition-colors ${achievement.highlight ? 'text-violet-500' : 'text-white/20 group-hover:text-violet-500'}`} />
            <CrosshairIcon className={`absolute h-6 w-6 -bottom-3 -left-3 z-20 transition-colors ${achievement.highlight ? 'text-violet-500' : 'text-white/20 group-hover:text-violet-500'}`} />
            <CrosshairIcon className={`absolute h-6 w-6 -top-3 -right-3 z-20 transition-colors ${achievement.highlight ? 'text-violet-500' : 'text-white/20 group-hover:text-violet-500'}`} />
            <CrosshairIcon className={`absolute h-6 w-6 -bottom-3 -right-3 z-20 transition-colors ${achievement.highlight ? 'text-violet-500' : 'text-white/20 group-hover:text-violet-500'}`} />
            
            {achievement.highlight && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg z-10">
                Major Win
              </div>
            )}

            <div className="flex flex-col h-full justify-center mt-2">
              <h3 className={`text-2xl font-bold mb-3 leading-snug ${achievement.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400' : 'text-white'}`}>{achievement.title}</h3>
              <div className="flex flex-col gap-4 mt-2">
                <span className="text-neutral-300 font-medium">{achievement.issuer}</span>
                <span className="text-neutral-500 font-mono text-xs border border-white/10 px-3 py-1.5 rounded-full w-fit bg-white/5">{achievement.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
