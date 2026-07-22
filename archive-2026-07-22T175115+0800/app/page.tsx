'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Terminal, 
  Server, 
  Bot, 
  ShieldCheck, 
  Lock, 
  Music, 
  Heart, 
  ExternalLink,
  Cpu,
  Boxes,
  ArrowRight,
  Download,
  Menu,
  X,
  Briefcase
} from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    {
      num: '01',
      tag: 'PRIMARY',
      title: 'Discord Server Dev',
      desc: 'Full server architecture — roles, permissions, channels, bots, webhooks. I set up communities from scratch and make them actually work.',
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />
    },
    {
      num: '02',
      tag: 'HOBBY',
      title: 'Roaming in Minecraft',
      desc: 'Roaming in the minecraft world with friends and some times foes too,Wanna play with me come dm me.',
      icon: <Boxes className="w-6 h-6 text-purple-400" />
    },
    {
      num: '03',
      tag: 'CORE STACK',
      title: 'Bot Development',
      desc: 'Node.js-first Discord bots. Commands, events, databases, slash interactions. Built with discord.js.',
      icon: <Cpu className="w-6 h-6 text-purple-400" />
    },
    {
      num: '04',
      tag: 'BACKEND',
      title: 'Backend Systems',
      desc: 'Keeping things running smoothly. Linux VPS, uptime monitoring, automatic deployments, and databases.',
      icon: <Server className="w-6 h-6 text-purple-400" />
    },
    {
      num: '05',
      tag: 'DEVELOPER',
      title: 'Minecraft Developer',
      desc: 'Building custom Minecraft experiences — plugins, server configs, custom mechanics, and server integrations.',
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      num: '06',
      tag: 'TOOLING',
      title: 'Automation Pipelines',
      desc: 'Auto-moderation, scheduled tasks, webhook pipelines, role assignment flows. Set it and forget it.',
      icon: <Bot className="w-6 h-6 text-purple-400" />
    }
  ];

  const experience = [
    {
      role: 'Community Manager & Developer',
      org: 'Meowlix.gg',
      period: '2024 - Present',
      desc: 'Managing operations, payout workflows, staff coordination, and community growth for a top-tier Minecraft hosting platform.'
    },
    {
      role: 'Lead Bot Developer',
      org: 'Freelance & Private Communities',
      period: '2023 - Present',
      desc: 'Building customized Discord automation, verification suites, and moderation tools for high-member servers.'
    },
    {
      role: 'Infrastructure Maintainer',
      org: 'Linux VPS & Game Servers',
      period: '2022 - Present',
      desc: 'Configuring dedicated nodes, firewalls, and automated backup pipelines to ensure zero downtime.'
    }
  ];

  const stats = [
    { label: 'Uptime Record', value: '99.9%' },
    { label: 'Discord Bots Built', value: '15+' },
    { label: 'Communities Managed', value: '5+' },
    { label: 'Coffee Consumed', value: '∞' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#07050b] text-slate-100 font-sans selection:bg-purple-500 selection:text-black relative overflow-x-hidden scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#07050b]/90 backdrop-blur-md max-w-5xl mx-auto px-6 py-5 flex justify-between items-center border-b border-purple-900/30">
        <div className="text-2xl font-black tracking-tight">
          <a href="#about" className="flex items-center gap-1">
            <span className="text-purple-400">Port</span>
            <span className="text-fuchsia-400">folio</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
          <a href="#role" className="hover:text-purple-400 transition-colors">Role</a>
          <a href="#stats" className="hover:text-purple-400 transition-colors">Stats</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#favourites" className="hover:text-purple-400 transition-colors">Favourites</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-200 p-2 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] z-50 bg-[#0c0814] border-b border-purple-900/40 px-6 py-6 flex flex-col gap-4 text-center font-medium md:hidden shadow-2xl">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Home</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Skills</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Experience</a>
          <a href="#role" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Role</a>
          <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Stats</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Projects</a>
          <a href="#favourites" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Favourites</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-purple-400">Contact</a>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 min-h-[85vh] flex flex-col justify-center items-center text-center relative z-10 py-16">
        <p className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-3 text-purple-400">
          Developer & Community Manager
        </p>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Hey, I'm <span className="text-purple-400">Ansh</span>
        </h1>
        
        <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
          Just a guy named Ansh (age: unknown). Skilled at a lot of things, but pretty lazy by default. Currently keeping Meowlix.gg running smoothly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <a 
            href="#skills" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-600/30 text-base"
          >
            <span>Explore Skills</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#120b1f] hover:bg-[#1a102e] border border-purple-900/50 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all text-base"
          >
            <span>Connect / Resume</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* WORKSPACE BANNER */}
      <section className="max-w-4xl mx-auto px-6 my-12 relative z-10">
        <div className="bg-[#120b1f]/50 border border-purple-900/30 rounded-3xl overflow-hidden p-3">
          <div className="rounded-2xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop" 
              alt="Workspace Setup" 
              className="w-full h-[260px] sm:h-[380px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07050b] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 text-xs font-mono text-purple-400 bg-[#0c0814]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-purple-500/20">
              ⚡ BATTLESTATION SETUP
            </div>
          </div>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section id="skills" className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">EXPERTISE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Skills & Craft.</h2>
          <p className="text-slate-400 text-base mt-2 max-w-xl mx-auto">
            A blend of technical architecture and automation logic. If it runs on Discord or Linux, I build and optimize it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-[#120b1f]/50 border border-purple-900/30 p-6 rounded-3xl">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  {skill.icon}
                </div>
                <span className="text-xs font-mono text-slate-500 bg-[#120b1f] px-3 py-1 rounded-full border border-purple-900/40">{skill.num} / {skill.tag}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">TRACK RECORD</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Experience.</h2>
          <p className="text-slate-400 text-base mt-2 max-w-xl mx-auto">
            Where I've worked and what I've handled over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experience.map((exp, i) => (
            <div key={i} className="bg-[#120b1f]/50 border border-purple-900/30 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                  <Briefcase className="w-4 h-4" /> {exp.org}
                </div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-slate-400 text-sm mt-2 max-w-xl">{exp.desc}</p>
              </div>
              <span className="text-xs font-mono bg-purple-950/60 text-purple-300 px-4 py-2 rounded-full border border-purple-800/50 shrink-0">
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ROLE SECTION */}
      <section id="role" className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="bg-[#120b1f]/60 border border-purple-500/20 p-8 sm:p-12 rounded-3xl">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">CURRENT POSITION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 text-white">Manager at Meowlix.gg</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Meowlix.gg is a premier Minecraft hosting platform. As Manager, I oversee daily community interactions, payout operations, staff coordination, and platform uptime.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              'Community operations & vibe management',
              'Payouts & financial workflows',
              'Moderation system design',
              'Core platform infrastructure'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#120b1f]/80 border border-purple-900/40 p-4 rounded-2xl text-sm text-slate-200">
                <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://discord.gg/freehost" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            <span>Visit Meowlix.gg Community</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section id="stats" className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">PERFORMANCE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">System Stats.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#120b1f]/50 border border-purple-900/30 p-6 rounded-3xl text-center flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl font-black text-purple-400 mb-2">{stat.value}</span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section id="projects" className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="mb-10 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">PROJECTS & CODE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Built Systems.</h2>
        </div>

        <div className="bg-[#120b1f]/50 border border-purple-900/30 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center justify-center">
          <div className="p-5 rounded-2xl bg-purple-500/10 text-purple-400 mb-6 border border-purple-500/20">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Repositories Currently Private</h3>
          <p className="text-slate-400 text-sm max-w-md mb-8">
            My custom bots, plugins, and automation scripts are currently in private development.
          </p>
          <span className="text-xs font-mono bg-[#120b1f] text-purple-400 px-4 py-2 rounded-full border border-purple-500/30">
            SYSTEM STATUS: REPOS LOCKED
          </span>
        </div>
      </section>

      {/* 7. FAVORITES SECTION */}
      <section id="favourites" className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="mb-10 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">PERSONAL CORNER</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Favourites.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Song Card */}
          <div className="bg-[#120b1f]/50 border border-purple-900/30 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-6">
                <Music className="w-4 h-4" /> ON REPEAT
              </div>
              <h3 className="text-2xl font-bold text-white">Safar</h3>
              <p className="text-slate-400 text-sm mb-4">by Bayaan (Vocals Only)</p>
              <span className="inline-block bg-purple-950/80 text-purple-300 text-xs px-3 py-1 rounded-full mb-6 border border-purple-800/50">
                ● Hindi Track
              </span>
            </div>

            <div className="bg-[#0c0814] border border-purple-900/40 p-4 rounded-2xl mt-4 flex flex-col gap-3">
              <audio controls className="w-full h-10 accent-purple-400 focus:outline-none">
                <source src="https://files.catbox.moe/o6mlv7.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <a 
                href="https://soundcloud.com/hashamrana28/safar-bayaan-vocals-only" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-purple-400 hover:underline flex items-center justify-center gap-1 mt-1"
              >
                <span>Open in SoundCloud</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Person Card */}
          <div className="bg-[#120b1f]/50 border border-purple-900/30 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-6">
                <Heart className="w-4 h-4" /> FAVOURITE PERSON
              </div>
              
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#0c0814] border border-purple-900/50 flex items-center justify-center text-3xl mb-4">
                  👤
                </div>
                <h3 className="text-xl font-bold text-white">P...</h3>
                <p className="text-xs text-slate-500 mt-1">Identity Confidential</p>
              </div>
            </div>
            <p className="text-xs text-center text-slate-500">You know who you are. ❤️</p>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="bg-[#120b1f]/50 border border-purple-500/30 p-8 sm:p-12 rounded-3xl text-center">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4 text-white">Want to build something together?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm">
            Hit me up on Discord. I'm usually online managing servers or tweaking code setups.
          </p>

          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-purple-600/30 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>ansh_og0255 on Discord</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 py-10 border-t border-purple-900/30 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 relative z-10">
        <div>© 2026 @Ansh_og • THE OG</div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-purple-400">Home</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
        </div>
      </footer>

    </div>
  );
}