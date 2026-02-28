// src/app/page.tsx
import { projects, skills } from "@/src/data/portofolio"; // Pastikan path import sesuai
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative overflow-hidden z-0">
      
      {/* ========================================= */}
      {/* ANIMASI LATAR BELAKANG (AURORA GLOW)      */}
      {/* ========================================= */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] -z-10 animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px] -z-10 animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 -z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide shadow-sm">
          Available for Work & Research
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Halo, Saya <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Sukma Nabila
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl text-slate-700 font-medium mb-8">
          Programmer & Systems Analyst
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
          Saya merancang arsitektur sistem yang efisien dan menerjemahkan kebutuhan bisnis yang rumit menjadi aplikasi yang fungsional, aman, dan mudah dikembangkan.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-200">
            Lihat Proyek Saya
          </a>
          <a href="mailto:sukmanabila93@gmail.com" className="px-6 py-3 bg-white/60 backdrop-blur-sm text-slate-700 font-medium rounded-lg border border-slate-300 hover:border-blue-400 hover:bg-white transition-all shadow-sm">
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. PROFIL SINGKAT (ABOUT ME) BARU         */}
      {/* ========================================= */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60 relative">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Frame Foto Profil */}
          <div className="relative shrink-0 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 relative rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <Image
                src="/images/Profil.png" 
                alt="Sukma Nabila Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Narasi Profil */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Tentang Saya</h3>
            <div className="w-16 h-1.5 bg-blue-600 rounded-full mb-6 mx-auto md:mx-0"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Sebagai seorang pengembang perangkat lunak sekaligus analis sistem, saya tidak hanya berfokus pada penulisan baris kode, melainkan bagaimana kode tersebut memecahkan masalah nyata. Pemahaman mendalam tentang siklus hidup pengembangan sistem memungkinkan saya merancang arsitektur aplikasi yang tangguh.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Saya memiliki eksplorasi teknis yang luas, mulai dari membangun antarmuka web modern menggunakan <strong>Next.js</strong> dan pengelolaan data berbasis <strong>Prisma</strong>, hingga pengembangan sistem website yang tangguh, saya juga menggunakan <strong>CodeIgniter 4</strong>, <strong>PHP</strong>, <strong>HTML</strong>, dan <strong>CSS</strong>. Selain itu, saya juga berpengalaman dalam pengembangan aplikasi <em>mobile</em> lintas platform dengan <strong>Flutter</strong> dan <strong>Dart</strong>.
            </p>
            <a href="#skills" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-indigo-600 transition-colors group">
              Lihat teknologi yang saya gunakan
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-1 transition-transform"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. PENDIDIKAN & PENGALAMAN (TIMELINE)     */}
      {/* ========================================= */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60 relative">
        <h3 className="text-3xl font-bold mb-2 text-slate-900">Pendidikan & Pengalaman</h3>
        <p className="text-slate-600 mb-12">Latar belakang akademis dan rekam jejak organisasi saya.</p>

        <div className="relative border-l-2 border-blue-200 ml-3 md:ml-6 space-y-12">
          
          {/* Item Timeline 1: Pendidikan */}
          <div className="relative pl-8 md:pl-10 group">
            {/* Lingkaran Indikator */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:scale-125 group-hover:border-indigo-500 transition-all duration-300"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h4 className="text-xl font-bold text-slate-800">Institut Pendidikan Indonesia (IPI) Garut</h4>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-max">
                Sekarang
              </span>
            </div>
            <p className="text-indigo-600 font-medium mb-3">S1 Sistem Informasi / Teknik Informatika</p>
            <p className="text-slate-600 leading-relaxed">
              Fokus pada rekayasa perangkat lunak, pengembangan aplikasi mobile, dan perancangan arsitektur sistem informasi.
            </p>
          </div>

          {/* Item Timeline 2: Penelitian */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:scale-125 group-hover:border-indigo-500 transition-all duration-300"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h4 className="text-xl font-bold text-slate-800">Peneliti Independen / Proyek Akademik</h4>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-max">
                2025 - 2026
              </span>
            </div>
            <p className="text-indigo-600 font-medium mb-3">Riset & Analisis Sistem</p>
            <p className="text-slate-600 leading-relaxed">
              Melakukan penelitian dan observasi langsung untuk perancangan sistem informasi, termasuk analisis kebutuhan perangkat lunak untuk institusi pendidikan dan manufaktur berskala besar.
            </p>
          </div>

          {/* Item Timeline 3: Organisasi */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:scale-125 group-hover:border-indigo-500 transition-all duration-300"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h4 className="text-xl font-bold text-slate-800">BEM Fakultas Ilmu Terapan dan Sains</h4>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0 w-max">
                2025 - 2026
              </span>
            </div>
            <p className="text-indigo-600 font-medium mb-3">Sekretaris II</p>
            <p className="text-slate-600 leading-relaxed">
              Bertanggung jawab atas pengelolaan administrasi organisasi, pengarsipan dokumen, dan koordinasi komunikasi antar divisi untuk mendukung kelancaran program kerja mahasiswa.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 4. SKILLS SECTION                           */}
      {/* ========================================= */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60 relative">
        <h3 className="text-3xl font-bold mb-2 text-slate-900">Keahlian & Teknologi</h3>
        <p className="text-slate-600 mb-10">Kombinasi antara perancangan sistem dan pengembangan perangkat lunak.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-sm animate-pulse"></span>
                {skill.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 shadow-sm group-hover:border-blue-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. PROJECTS SECTION                         */}
      {/* ========================================= */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60 relative">
        <h3 className="text-3xl font-bold mb-2 text-slate-900">Studi Kasus Proyek</h3>
        <p className="text-slate-600 mb-10">Beberapa sistem yang pernah saya analisis dan bangun.</p>
        
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col md:flex-row bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="md:w-2/5 bg-slate-100 relative overflow-hidden min-h-[300px]">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-indigo-600 font-bold text-sm mb-4 tracking-wider uppercase">
                  {project.role}
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold tracking-wider border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-auto pt-5 border-t border-slate-200">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors group/link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:animate-bounce"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0 .2-3.8s-1.2-.4-3.9 1.7a13.4 13.4 0 0 0-7 0C6.2 1.8 5 2.2 5 2.2a5.5 5.5 0 0 0 .2 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.6-5-2.5-5-3"/></svg>
                      Lihat Repository
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-10 mt-10 border-t border-slate-200/60 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Sukma Nabila. Dibuat menggunakan Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}