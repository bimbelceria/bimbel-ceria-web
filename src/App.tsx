/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  Users,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Star,
  Check,
  ArrowRight,
  Compass,
  Smile,
  ShieldCheck,
  TrendingUp,
  Instagram,
  Facebook,
  Youtube,
  Zap,
} from 'lucide-react';

// Local high-fidelity AI-generated assets
import heroImage from './assets/images/bimbel_ceria_hero_1790753889725.jpg';
import classroomImage from './assets/images/bimbel_classroom_1790753906958.jpg';
import mentoringImage from './assets/images/bimbel_mentoring_1790753924456.jpg';
import studentsGroupImage from './assets/images/bimbel_students_group_1790753941809.jpg';

export default function App() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick Trial Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgramModal, setSelectedProgramModal] = useState<string>('Semua Jenjang');

  // Contact form state
  const [formData, setFormData] = useState({
    nama: '',
    noHp: '',
    jenjang: 'SD',
    cabang: 'Pusat (Kebayoran)',
    pesan: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Trial Registration Modal Form State
  const [trialFormData, setTrialFormData] = useState({
    namaSiswa: '',
    namaOrtu: '',
    whatsapp: '',
    kelas: 'SD Kelas 4-6',
    hariPilihan: 'Sabtu Pagi',
  });
  const [trialSubmitted, setTrialSubmitted] = useState(false);

  // Floating WhatsApp Tooltip State
  const [showWaTooltip, setShowWaTooltip] = useState(true);

  // Validation for Contact Form
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.nama.trim()) {
      errors.nama = 'Nama lengkap wajib diisi';
    }
    if (!formData.noHp.trim()) {
      errors.noHp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+-\s]{9,16}$/.test(formData.noHp.trim())) {
      errors.noHp = 'Format nomor WhatsApp tidak valid';
    }
    if (!formData.pesan.trim()) {
      errors.pesan = 'Mohon sampaikan pertanyaan atau keluhan belajar anak Anda';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialFormData.namaSiswa || !trialFormData.whatsapp) {
      return;
    }
    setTrialSubmitted(true);
    setTimeout(() => {
      // Auto close after successful trial registration
      setTimeout(() => {
        setIsModalOpen(false);
        setTrialSubmitted(false);
        setTrialFormData({
          namaSiswa: '',
          namaOrtu: '',
          whatsapp: '',
          kelas: 'SD Kelas 4-6',
          hariPilihan: 'Sabtu Pagi',
        });
      }, 2000);
    }, 1000);
  };

  const openTrialModal = (programName = 'Semua Jenjang') => {
    setSelectedProgramModal(programName);
    setIsModalOpen(true);
  };

  const directWhatsApp = (customText?: string) => {
    const text = customText || 'Halo Admin Bimbel Ceria! Saya ingin bertanya dan konsultasi gratis mengenai program bimbingan belajar.';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-800 antialiased font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* 1. NAVBAR (STICKY) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Logo & Brand Wordmark */}
            <a href="#home" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-sky-400 flex items-center justify-center shadow-md shadow-amber-200/50 group-hover:scale-105 transition-transform duration-200">
                <Smile className="w-7 h-7 text-white stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-slate-900 tracking-tight leading-none">
                  Bimbel <span className="text-amber-500">Ceria</span>
                </span>
                <span className="text-[11px] font-medium text-sky-600 mt-1">
                  Belajar Ceria, Prestasi Nyata!
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
              <a href="#home" className="hover:text-amber-600 transition-colors py-1">
                Home
              </a>
              <a href="#tentang" className="hover:text-amber-600 transition-colors py-1">
                Tentang
              </a>
              <a href="#program" className="hover:text-amber-600 transition-colors py-1">
                Program
              </a>
              <a href="#keunggulan" className="hover:text-amber-600 transition-colors py-1">
                Keunggulan
              </a>
              <a href="#guru" className="hover:text-amber-600 transition-colors py-1">
                Guru
              </a>
              <a href="#testimoni" className="hover:text-amber-600 transition-colors py-1">
                Testimoni
              </a>
              <a href="#galeri" className="hover:text-amber-600 transition-colors py-1">
                Fasilitas
              </a>
              <a href="#kontak" className="hover:text-amber-600 transition-colors py-1">
                Kontak
              </a>
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => directWhatsApp('Halo Bimbel Ceria! Saya ingin konsultasi jadwal belajar.')}
                className="px-4 py-2.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors border border-sky-200/70"
              >
                Konsultasi WhatsApp
              </button>
              <button
                onClick={() => openTrialModal()}
                className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Daftar Trial Gratis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => openTrialModal()}
                className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 rounded-lg"
              >
                Trial Gratis
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-sky-100 px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Home
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Tentang Kami
            </a>
            <a
              href="#program"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Program Belajar (SD, SMP, SMA)
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Keunggulan Kami
            </a>
            <a
              href="#guru"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Tim Guru Pengajar
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Testimoni Siswa & Ortu
            </a>
            <a
              href="#galeri"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600 border-b border-slate-50"
            >
              Fasilitas & Galeri
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-amber-600"
            >
              Hubungi Kami
            </a>
            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  directWhatsApp();
                }}
                className="w-full py-2.5 text-xs font-semibold text-sky-800 bg-sky-100 rounded-xl"
              >
                Chat WhatsApp
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openTrialModal();
                }}
                className="w-full py-2.5 text-xs font-bold text-slate-900 bg-amber-400 rounded-xl shadow-sm"
              >
                Daftar Trial
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Subtitle Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>Bimbingan Belajar Interaktif & Ramah Anak</span>
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Wujudkan Prestasi Belajar Bersama{' '}
                <span className="relative inline-block text-amber-500">
                  Bimbel Ceria
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-amber-300 -z-10"
                    viewBox="0 0 250 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11C60 3 190 2 247 11"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Tagline & Subtitle */}
              <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl leading-relaxed">
                <span className="font-semibold text-slate-800">"Belajar Ceria, Prestasi Nyata!"</span> Pendampingan belajar tulus untuk siswa SD, SMP, dan SMA dengan metode menyenangkan, kelas kecil yang fokus, dan tutor bersahabat.
              </p>

              {/* 2 CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => openTrialModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-2xl shadow-lg shadow-amber-300/40 hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
                >
                  <span>Daftar Trial Gratis Sekarang</span>
                  <ArrowRight className="w-5 h-5 text-slate-900" />
                </button>
                <button
                  onClick={() => directWhatsApp('Halo Kak Admin Bimbel Ceria! Saya ingin konsultasi gratis untuk bimbingan belajar anak saya.')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-sky-800 bg-white hover:bg-sky-50 rounded-2xl border-2 border-sky-200/80 shadow-xs hover:border-sky-300 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5 text-sky-600" />
                  <span>Konsultasi Gratis via WA</span>
                </button>
              </div>

              {/* Trust Indicators / Social Proof */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                    1.200+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Alumni Siswa Berprestasi
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-sky-600">
                    98.4%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Lolos Sekolah Favorit & PTN
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-500">
                    4.9 / 5
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Tingkat Kepuasan Ortu
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Back card decorative ring */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-amber-300/40 via-sky-200/40 to-yellow-100 rounded-3xl transform rotate-2 -z-10" />

                {/* Main Hero Photo Container */}
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-sky-900/5 border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={heroImage}
                    alt="Siswa Bimbel Ceria belajar dengan ceria dan tutor ramah"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path issues
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Overlay Gradient at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                        Metode Belajar Interaktif
                      </div>
                      <div className="text-base font-bold leading-snug">
                        Suasana kelas ceria, hangat, dan tidak membosankan
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight 1: Kelas Kecil */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-3 px-4 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3 max-w-[210px] animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Maks. 6-8 Siswa</div>
                    <div className="text-[11px] text-slate-500">Perhatian tutor 100%</div>
                  </div>
                </div>

                {/* Floating Highlight 2: Garansi Nilai Naik */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Kurikulum Merdeka</div>
                    <div className="text-[10px] text-slate-500">Materi selalu terupdate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI SECTION */}
      <section id="tentang" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Asset */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-sky-50">
                <img
                  src={mentoringImage}
                  alt="Pendampingan privat dan ramah di Bimbel Ceria"
                  className="w-full h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Pendekatan Ramah & Bersahabat</div>
                      <div className="text-xs text-slate-500">Setiap anak dihargai keunikannya tanpa tekanan berlebih.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visi, Misi, Deskripsi (Maksimal 3 Paragraf Padat & Jelas) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Tentang Bimbel Ceria
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Membimbing dengan Hati, Menumbuhkan Potensi Alami Siswa
                </h2>
              </div>

              {/* Paragraf 1: Pengenalan & Filosofi */}
              <p className="text-slate-600 leading-relaxed text-base">
                <strong className="text-slate-900">Bimbel Ceria</strong> didirikan atas keyakinan bahwa setiap anak memiliki potensi luar biasa jika dibimbing dalam suasana yang mendukung, gembira, dan bebas dari rasa cemas. Kami bukan sekadar tempat menghafal rumus, melainkan rumah kedua bagi siswa SD, SMP, dan SMA untuk memahami konsep dasar pelajaran secara mendalam dan menyenangkan.
              </p>

              {/* Paragraf 2: Visi & Misi */}
              <p className="text-slate-600 leading-relaxed text-base">
                <strong className="text-slate-900">Visi & Misi Kami:</strong> Menjadi lembaga bimbingan belajar terbaik yang menumbuhkan kecintaan belajar sepanjang hayat (<em>lifelong learners</em>). Kami menerapkan kurikulum nasional terbaru (Kurikulum Merdeka) yang dikemas secara interaktif dengan analogi kehidupan sehari-hari, simulasi soal terstruktur, serta bimbingan karakter percaya diri.
              </p>

              {/* Paragraf 3: Keunggulan Pendekatan */}
              <p className="text-slate-600 leading-relaxed text-base">
                Dengan rasio kelas kecil maksimal 6 hingga 8 anak, para pengajar kami yang merupakan lulusan perguruan tinggi terkemuka dapat memetakan kebutuhan belajar spesifik tiap anak. Hasilnya, 98% siswa kami tidak hanya mengalami kenaikan nilai rapor yang signifikan, tetapi juga lebih mandiri dan antusias dalam menghadapi ujian sekolah maupun seleksi PTN.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/50">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-sm mb-2">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Fun Learning</h4>
                  <p className="text-xs text-slate-600 mt-1">Konsep materi dipahami lewat game dan studi kasus nyata.</p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-sm mb-2">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Personal Care</h4>
                  <p className="text-xs text-slate-600 mt-1">Konsultasi PR dan tugas tanpa batas waktu di luar jam kelas.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-sm mb-2">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Laporan Rutin</h4>
                  <p className="text-xs text-slate-600 mt-1">Orang tua menerima laporan perkembangan belajar berkala bulanan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM BELAJAR (SD, SMP, SMA) */}
      <section id="program" className="py-20 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
              Pilihan Jenjang Pendidikan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Program Belajar Terstruktur & Menyenangkan
            </h2>
            <p className="text-slate-600 text-base">
              Dirancang khusus sesuai tingkat perkembangan kognitif siswa dengan kurikulum terbaru, modul eksklusif ceria, dan simulasi ujian berkala.
            </p>
          </div>

          {/* 3 Program Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* CARD 1: SD */}
            <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-lg shadow-sky-950/5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Kelas 1 - 6 SD
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Ceria Junior (SD)
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    Membangun pondasi literasi, numerasi, dan kecintaan belajar dengan pendekatan visual & permainan edukatif tanpa beban berlebihan.
                  </p>
                </div>

                {/* Mata Pelajaran */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Mata Pelajaran:
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 font-medium">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Matematika Ceria</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">IPA & Alam</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Bahasa Indonesia</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Basic English</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Bimbingan PR</span>
                  </div>
                </div>

                {/* Fitur Utama */}
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>3x pertemuan / minggu (90 menit)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Maksimal 6 siswa per kelas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Modul warna-warni & lembar stiker prestasi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bebas konsultasi PR setiap hari</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-8 mt-8 border-t border-slate-100 space-y-4">
                <div>
                  <div className="text-xs text-slate-400">Investasi Belajar:</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-heading text-3xl font-extrabold text-slate-900">
                      Rp 350.000
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
                    *Hemat 15% untuk paket 1 semester
                  </div>
                </div>

                <button
                  onClick={() => openTrialModal('Program SD (Ceria Junior)')}
                  className="w-full py-3 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
                >
                  Pilih Program SD
                </button>
              </div>
            </div>

            {/* CARD 2: SMP (POPULAR / HIGHLIGHTED) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-sky-400 shadow-xl shadow-sky-400/10 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative group">
              {/* Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Paling Diminati
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                    Kelas 7 - 9 SMP
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Ceria Explorer (SMP)
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    Pendalaman materi sains dan logika matematika untuk persiapan ujian sekolah, asesmen nasional, dan target tembus SMA/SMK favorit impian.
                  </p>
                </div>

                {/* Mata Pelajaran */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Mata Pelajaran:
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 font-medium">
                    <span className="bg-sky-50 text-sky-900 px-2.5 py-1 rounded-lg">Matematika Aljabar & Geometri</span>
                    <span className="bg-sky-50 text-sky-900 px-2.5 py-1 rounded-lg">IPA Fisika & Biologi</span>
                    <span className="bg-sky-50 text-sky-900 px-2.5 py-1 rounded-lg">English Grammar & Speaking</span>
                    <span className="bg-sky-50 text-sky-900 px-2.5 py-1 rounded-lg">Bahasa Indonesia</span>
                  </div>
                </div>

                {/* Fitur Utama */}
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>3x - 4x pertemuan / minggu (100 menit)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Maksimal 7 siswa per kelas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bedah soal asesmen & strategi smart-formula</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Try Out rutin berkala berbasis CBT</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-8 mt-8 border-t border-slate-100 space-y-4">
                <div>
                  <div className="text-xs text-slate-400">Investasi Belajar:</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-heading text-3xl font-extrabold text-slate-900">
                      Rp 450.000
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-sky-600 font-medium mt-0.5">
                    *Termasuk bank soal dan akses modul digital
                  </div>
                </div>

                <button
                  onClick={() => openTrialModal('Program SMP (Ceria Explorer)')}
                  className="w-full py-3 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors shadow-md shadow-sky-500/20"
                >
                  Pilih Program SMP
                </button>
              </div>
            </div>

            {/* CARD 3: SMA */}
            <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-lg shadow-sky-950/5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Kelas 10 - 12 SMA / UTBK
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Ceria Champion (SMA)
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    Program intensif penguasaan materi SMA (IPA & IPS) dan drilling khusus persiapan SNBT / UTBK / Ujian Mandiri PTN impian.
                  </p>
                </div>

                {/* Mata Pelajaran */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Mata Pelajaran:
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 font-medium">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Matematika Wajib & Peminatan</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Fisika, Kimia, Biologi</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Ekonomi, Sosiologi, Geografi</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">TPS & Penalaran UTBK</span>
                  </div>
                </div>

                {/* Fitur Utama */}
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>4x pertemuan / minggu (120 menit)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Maksimal 8 siswa per kelas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Konseling jurusan PTN & simulasi rasionalisasi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Try Out SNBT berkala dengan scoring IRT</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-8 mt-8 border-t border-slate-100 space-y-4">
                <div>
                  <div className="text-xs text-slate-400">Investasi Belajar:</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-heading text-3xl font-extrabold text-slate-900">
                      Rp 550.000
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-amber-600 font-medium mt-0.5">
                    *Tersedia program super intensif garansi kelulusan
                  </div>
                </div>

                <button
                  onClick={() => openTrialModal('Program SMA (Ceria Champion)')}
                  className="w-full py-3 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
                >
                  Pilih Program SMA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEUNGGULAN SECTION (4 POIN UTAMA DENGAN IKON) */}
      <section id="keunggulan" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Mengapa Memilih Kami?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              4 Keunggulan Utama Bimbel Ceria
            </h2>
            <p className="text-slate-600 text-base">
              Kami memadukan kenyamanan belajar, kualitas pengajar unggul, dan kepedulian tulus untuk memastikan setiap anak berkembang maksimal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Keunggulan 1: Guru Berpengalaman */}
            <div className="p-7 rounded-3xl bg-amber-50/40 border border-amber-200/60 hover:border-amber-300 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mb-5 shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                Guru Berpengalaman & Sabar
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tutor lulusan PTN terbaik (UI, ITB, UGM) yang tersertifikasi pedagogik, ramah anak, serta terlatih mengajar dengan sabar tanpa menghakimi.
              </p>
            </div>

            {/* Keunggulan 2: Kelas Kecil */}
            <div className="p-7 rounded-3xl bg-sky-50/40 border border-sky-200/60 hover:border-sky-300 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-5 shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                Kelas Kecil (6-8 Siswa)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kapasitas dibatasi maksimal 6-8 siswa per ruangan. Guru dapat memperhatikan gaya belajar setiap anak secara personal dan mendalam.
              </p>
            </div>

            {/* Keunggulan 3: Kurikulum Terbaru */}
            <div className="p-7 rounded-3xl bg-amber-50/40 border border-amber-200/60 hover:border-amber-300 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mb-5 shadow-sm">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                Kurikulum Merdeka Terbaru
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Materi dirancang selaras dengan Kurikulum Merdeka nasional, diperkaya modul visual kreatif, pemecahan masalah kritis, dan latihan soal adaptif.
              </p>
            </div>

            {/* Keunggulan 4: Biaya Terjangkau */}
            <div className="p-7 rounded-3xl bg-sky-50/40 border border-sky-200/60 hover:border-sky-300 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-5 shadow-sm">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                Biaya Terjangkau & Garansi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Biaya bersahabat tanpa biaya tersembunyi. Dilengkapi jaminan peningkatan nilai rapor dan sesi bimbingan tambahan gratis jika anak tertinggal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GURU / TIM PENGAJAR SECTION */}
      <section id="guru" className="py-20 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Pengajar Berdedikasi
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Berkenalan dengan Kakak Pengajar Favorit
            </h2>
            <p className="text-slate-600 text-base">
              Sosok mentor yang bukan hanya cerdas secara akademis, namun juga menjadi sahabat belajar yang menginspirasi dan memahami anak.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guru 1 */}
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 p-1 mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="font-heading text-2xl font-bold text-amber-600">KS</span>
                </div>
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Kak Sarah, M.Pd</h4>
              <p className="text-xs font-semibold text-amber-600 mb-2">Spesialis Matematika SD & SMP</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Lulusan Pendidikan Matematika UNJ. Dikenal sangat sabar dan ahli menyederhanakan pecahan dan aljabar dengan games kartu angka.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Pengalaman Mengajar: 7 Tahun
              </div>
            </div>

            {/* Guru 2 */}
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-sky-400 to-sky-200 p-1 mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="font-heading text-2xl font-bold text-sky-600">KR</span>
                </div>
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Kak Reza, S.Si</h4>
              <p className="text-xs font-semibold text-sky-600 mb-2">Spesialis Fisika & IPA</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Alumni Fisika UI. Ahli menerangkan rumus fisika dengan eksperimen sederhana sehari-hari sehingga konsep melekat kuat di benak siswa.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Pengalaman Mengajar: 5 Tahun
              </div>
            </div>

            {/* Guru 3 */}
            <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-sky-200 p-1 mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="font-heading text-2xl font-bold text-amber-600">KN</span>
                </div>
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Kak Nabila, S.Hum</h4>
              <p className="text-xs font-semibold text-amber-600 mb-2">Spesialis Bahasa Inggris & Indo</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Lulusan Sastra Inggris UGM dengan sertifikasi TOEFL & IELTS. Mengajar bahasa dengan storytelling seru dan latihan percakapan percaya diri.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Pengalaman Mengajar: 6 Tahun
              </div>
            </div>

            {/* Guru 4 */}
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-sky-400 to-amber-200 p-1 mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="font-heading text-2xl font-bold text-sky-600">KD</span>
                </div>
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Kak Dimas, S.T</h4>
              <p className="text-xs font-semibold text-sky-600 mb-2">Master UTBK / Kimia SMA</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Alumni Teknik Kimia ITB. Mentor strategis pembahasan soal UTBK SNBT dengan trik eliminasi cerdas dan pemahaman konsep mendalam.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Pengalaman Mengajar: 8 Tahun
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONI SECTION (3 KARTU TESTIMONI ORANG TUA / SISWA) */}
      <section id="testimoni" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Kisah Keberhasilan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Apa Kata Orang Tua & Siswa Kami?
            </h2>
            <p className="text-slate-600 text-base">
              Kenyamanan dan kepuasan belajar nyata yang dirasakan langsung oleh ratusan keluarga mitra Bimbel Ceria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimoni 1: Orang Tua Siswa SD */}
            <div className="bg-[#FAFBFD] p-8 rounded-3xl border border-sky-100/80 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Dulu anak saya kalau diajak belajar Matematika selalu ngambek dan stres. Setelah 3 bulan les di Bimbel Ceria sama Kak Sarah, dia malah antusias nunggu jadwal les! Nilai rapornya dari 65 sekarang naik jadi 92. Terima kasih Bimbel Ceria!"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/60">
                <div className="w-11 h-11 rounded-full bg-amber-400 text-slate-900 font-bold flex items-center justify-center text-sm shrink-0">
                  BW
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Ibu Budiarti Wahyuni</div>
                  <div className="text-xs text-slate-500">Orang tua Kevin (Kelas 5 SD Al-Azhar)</div>
                </div>
              </div>
            </div>

            {/* Testimoni 2: Siswa SMP */}
            <div className="bg-[#FAFBFD] p-8 rounded-3xl border border-sky-200 shadow-md shadow-sky-500/5 flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                Tembus SMA Favorit
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Suasana belajarnya seru banget, gurunya gak kaku kayak di sekolah formal. Modulnya gampang dipahami, apalagi buat Fisika dan Matematika. Akhirnya saya berhasil lolos masuk SMA Negeri 8 Jakarta jalur prestasi!"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/60">
                <div className="w-11 h-11 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  AF
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Alif Fachrezi</div>
                  <div className="text-xs text-slate-500">Siswa Lulusan SMPN 115 Jakarta</div>
                </div>
              </div>
            </div>

            {/* Testimoni 3: Orang Tua Siswa SMA */}
            <div className="bg-[#FAFBFD] p-8 rounded-3xl border border-sky-100/80 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Konseling jurusan dan simulasi UTBK di Bimbel Ceria sangat akurat. Anak saya didampingi mulai dari analisis kelemahan materi sampai pemilihan prodi yang realistis. Puji syukur putri kami diterima di Fakultas Kedokteran UI!"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/60">
                <div className="w-11 h-11 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  DS
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Dr. Hendra Saputra</div>
                  <div className="text-xs text-slate-500">Orang tua Naura (Lolos FK UI 2025)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GALERI & FASILITAS (GRID 6 FOTO KEGIATAN BELAJAR) */}
      <section id="galeri" className="py-20 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Lingkungan Belajar Nyaman
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Fasilitas & Suasana Belajar Ceria
            </h2>
            <p className="text-slate-600 text-base">
              Setiap sudut ruang dirancang ergonomis, ber-AC sejuk, dan penuh inspirasi untuk merangsang konsentrasi serta kreativitas anak.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Foto 1: Ruang Kelas Modern */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={classroomImage}
                  alt="Ruang Kelas Ceria Ber-AC Nyaman"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Ruang Kelas Ber-AC & Ergonomis
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Pencahayaan alami hangat dengan meja kursi standar sekolah internasional.
                </p>
              </div>
            </div>

            {/* Foto 2: Mentoring 1-on-1 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={mentoringImage}
                  alt="Sesi Bimbingan Privat PR 1-on-1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Pojok Bimbingan Privat 1-on-1
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Area khusus konsultasi PR dan pemantapan materi tanpa distraksi.
                </p>
              </div>
            </div>

            {/* Foto 3: Kelompok Siswa & Diskusi */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={studentsGroupImage}
                  alt="Diskusi Kelompok Seru Siswa Ceria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Diskusi Interaktif & Kolaborasi
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Siswa dilatih berani bertanya, berpendapat, dan saling mendukung teman.
                </p>
              </div>
            </div>

            {/* Foto 4: Perpustakaan Mini & Pojok Baca */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-amber-50 flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-heading text-base font-bold text-slate-900">
                      Pojok Baca & Literasi Sains
                    </h5>
                    <p className="text-xs text-slate-500 max-w-[220px] mx-auto mt-1">
                      Koleksi buku ensiklopedia anak, komik sains, dan novel edukatif bergambar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Perpustakaan Mini & Bank Soal
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Akses gratis ratusan referensi buku dan bank soal terlengkap 10 tahun terakhir.
                </p>
              </div>
            </div>

            {/* Foto 5: Mini Science Lab / Eksperimen */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-sky-50 flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-500 text-white flex items-center justify-center">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-heading text-base font-bold text-slate-900">
                      Mini Science Demo
                    </h5>
                    <p className="text-xs text-slate-500 max-w-[220px] mx-auto mt-1">
                      Praktik fisika & kimia sederhana yang aman untuk memahami fenomena alam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Kit Eksperimen Sains Interaktif
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Belajar sains bukan sekadar teori di papan tulis, tapi diamati secara langsung.
                </p>
              </div>
            </div>

            {/* Foto 6: Ruang Santai & Snack Corner */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-amber-50/60 flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center">
                    <Smile className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-heading text-base font-bold text-slate-900">
                      Snack Corner & Rest Area
                    </h5>
                    <p className="text-xs text-slate-500 max-w-[220px] mx-auto mt-1">
                      Air mineral, camilan sehat gratis, dan tempat rileks sejenak saat jeda belajar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Lounge Santai & Snack Sehat
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Menjaga energi dan mood anak agar selalu senang saat pulang bimbingan belajar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER (DAFTAR TRIAL GRATIS 1X PERTEMUAN) */}
      <section className="py-16 bg-gradient-to-r from-amber-400 via-amber-300 to-sky-300 relative overflow-hidden">
        {/* Soft Decorative circles */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-slate-900 text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Spesial Bulan Ini: Kuota Terbatas untuk 15 Pendaftar Pertama</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Daftar Trial Gratis 1x Pertemuan Sekarang!
          </h2>

          <p className="text-base sm:text-lg font-medium text-slate-800 max-w-2xl mx-auto leading-relaxed">
            Rasakan langsung pengalaman belajar ceria bersama tutor favorit kami tanpa dipungut biaya sepeser pun. Cocokkan suasana kelas sebelum memutuskan mendaftar.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openTrialModal('Trial Gratis 1x Pertemuan')}
              className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-slate-900 bg-white hover:bg-slate-50 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-center"
            >
              Klaim Trial Gratis 1x Pertemuan
            </button>
            <button
              onClick={() => directWhatsApp('Halo, saya ingin tanya syarat dan jadwal untuk Trial Gratis 1x Pertemuan di Bimbel Ceria.')}
              className="w-full sm:w-auto px-7 py-4 text-base font-bold text-slate-900 bg-amber-200/90 hover:bg-amber-100 rounded-2xl border border-amber-400/40 transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-slate-900" />
              <span>Tanya Jadwal via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* 10. KONTAK & FORMULIR KONSULTASI */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Info Alamat, Jam Kerja & Kontak */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Hubungi Kami
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                  Mari Berkonsultasi Mengenai Kebutuhan Belajar Anak Anda
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Tim konsultan akademik Bimbel Ceria siap membantu menganalisis gaya belajar anak dan merekomendasikan program terbaik yang paling efektif.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Alamat */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Alamat Kampus Utama</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Jl. Melati Raya No. 42, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12150
                    </p>
                    <div className="text-[11px] text-sky-600 font-medium mt-1">
                      (50 meter dari Stasiun MRT / Akses mudah kendaraan umum)
                    </div>
                  </div>
                </div>

                {/* Telepon & WA */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Telepon & WhatsApp Resmi</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      WhatsApp: <strong className="text-slate-800">+62 812-3456-7890</strong>
                    </p>
                    <p className="text-xs text-slate-600">
                      Telepon Kantor: <strong className="text-slate-800">(021) 7890-1234</strong>
                    </p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Jam Operasional & Konsultasi</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Senin - Jumat: <strong>08.00 - 19.30 WIB</strong>
                    </p>
                    <p className="text-xs text-slate-600">
                      Sabtu: <strong>08.00 - 16.00 WIB</strong> (Minggu & Libur Nasional: Tutup)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Korespondensi</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      halo@bimbelceria.sch.id / pendaftaran@bimbelceria.sch.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Kontak dengan Validasi */}
            <div className="lg:col-span-7 bg-[#FAFBFD] p-8 sm:p-10 rounded-3xl border border-sky-100 shadow-xl shadow-sky-900/5">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Formulir Konsultasi & Pendaftaran
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Isi data singkat berikut. Kakak konsultan kami akan menghubungi Anda dalam waktu maksimal 2 jam kerja.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-900">
                    Pesan Terkirim dengan Sukses!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{formData.nama}</strong>. Tim Bimbel Ceria telah menerima permohonan konsultasi untuk jenjang <strong>{formData.jenjang}</strong>. Kami akan segera menghubungi nomor WhatsApp <strong>{formData.noHp}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        nama: '',
                        noHp: '',
                        jenjang: 'SD',
                        cabang: 'Pusat (Kebayoran)',
                        pesan: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
                  >
                    Kirim Pertanyaan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nama Lengkap Siswa / Orang Tua <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Ibu Rina / Kevin Danendra"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                        formErrors.nama ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.nama && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{formErrors.nama}</p>
                    )}
                  </div>

                  {/* No WhatsApp & Jenjang Kelas */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Contoh: 08123456789"
                        value={formData.noHp}
                        onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                          formErrors.noHp ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.noHp && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{formErrors.noHp}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Jenjang Sekolah Siswa <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.jenjang}
                        onChange={(e) => setFormData({ ...formData, jenjang: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                      >
                        <option value="SD">SD (Kelas 1 - 6)</option>
                        <option value="SMP">SMP (Kelas 7 - 9)</option>
                        <option value="SMA">SMA (Kelas 10 - 12)</option>
                        <option value="UTBK">Intensif UTBK / SNBT PTN</option>
                      </select>
                    </div>
                  </div>

                  {/* Pilihan Cabang */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Lokasi Cabang Pilihan
                    </label>
                    <select
                      value={formData.cabang}
                      onChange={(e) => setFormData({ ...formData, cabang: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    >
                      <option value="Pusat (Kebayoran)">Cabang Utama - Kebayoran Baru (Jaksel)</option>
                      <option value="Tebet">Cabang 2 - Tebet Raya (Jaksel)</option>
                      <option value="Kelapa Gading">Cabang 3 - Kelapa Gading (Jakut)</option>
                      <option value="Bintaro">Cabang 4 - Bintaro Sektor 7 (Tangsel)</option>
                      <option value="Online">Kelas Bimbel Interaktif Online (Seluruh Indonesia)</option>
                    </select>
                  </div>

                  {/* Pesan atau Kebutuhan Belajar */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Pertanyaan atau Kendala Belajar Anak <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan kendala belajar siswa, mata pelajaran yang ingin diperbaiki, atau pertanyaan seputar jadwal..."
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none ${
                        formErrors.pesan ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.pesan && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{formErrors.pesan}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-900" />
                    <span>Kirim Formulir Konsultasi Gratis</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Privasi data Anda aman. Kami tidak akan pernah mengirimkan spam promosi berlebihan.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: Brand Info (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 flex items-center justify-center">
                  <Smile className="w-6 h-6 text-slate-900 stroke-[2.5]" />
                </div>
                <span className="font-heading text-xl font-bold tracking-tight text-white">
                  Bimbel <span className="text-amber-400">Ceria</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Lembaga bimbingan belajar profesional untuk siswa SD, SMP, dan SMA. Belajar ceria dengan guru terbaik, suasana nyaman, dan prestasi nyata.
              </p>
              {/* Tagline */}
              <div className="text-xs font-semibold text-amber-300">
                "Belajar Ceria, Prestasi Nyata!"
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="Instagram Bimbel Ceria"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="Facebook Bimbel Ceria"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-colors text-slate-300"
                  aria-label="YouTube Bimbel Ceria"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Program Belajar (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
                Program Belajar
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#program" className="hover:text-white transition-colors">
                    Bimbel SD (Kelas 1 - 6)
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-white transition-colors">
                    Bimbel SMP (Kelas 7 - 9)
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-white transition-colors">
                    Bimbel SMA (IPA & IPS)
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-white transition-colors">
                    Intensif Persiapan SNBT / UTBK
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-white transition-colors">
                    Kelas Privat 1-on-1 di Rumah
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Link Cepat (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
                Link Cepat
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#keunggulan" className="hover:text-white transition-colors">
                    Keunggulan
                  </a>
                </li>
                <li>
                  <a href="#guru" className="hover:text-white transition-colors">
                    Profil Guru
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-white transition-colors">
                    Testimoni
                  </a>
                </li>
                <li>
                  <a href="#galeri" className="hover:text-white transition-colors">
                    Fasilitas
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Kontak & Kantor (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
                Kantor Pusat
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Jl. Melati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12150
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <div>WhatsApp: +62 812-3456-7890</div>
                <div>Telepon: (021) 7890-1234</div>
                <div>Email: halo@bimbelceria.sch.id</div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openTrialModal()}
                  className="px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
                >
                  Daftar Trial 1x Pertemuan
                </button>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} Bimbel Ceria. Hak Cipta Dilindungi Undang-Undang.
            </div>
            <div className="flex items-center gap-6">
              <a href="#tentang" className="hover:text-slate-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#program" className="hover:text-slate-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#kontak" className="hover:text-slate-400 transition-colors">
                Pusat Bantuan
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON (KANAN BAWAH) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        {/* Interactive Speech Bubble Tooltip */}
        {showWaTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-sky-100 text-xs font-medium max-w-xs animate-in fade-in slide-in-from-right-2 duration-300 relative">
            <span>Halo! Ada yang bisa kami bantu seputar bimbingan belajar?</span>
            <button
              onClick={() => setShowWaTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Tutup pesan"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute right-[-6px] bottom-3 w-3 h-3 bg-white rotate-45 border-r border-t border-sky-100" />
          </div>
        )}

        {/* WhatsApp Icon Button */}
        <button
          onClick={() => directWhatsApp()}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Hubungi WhatsApp Bimbel Ceria"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>
      </div>

      {/* 13. QUICK TRIAL REGISTRATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 relative space-y-5 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Trial Gratis 1x Pertemuan</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Daftar Kelas Uji Coba Gratis
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Program terpilih: <span className="font-semibold text-slate-800">{selectedProgramModal}</span>
              </p>
            </div>

            {trialSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Pendaftaran Trial Berhasil!
                </h4>
                <p className="text-xs text-slate-600">
                  Tim Bimbel Ceria akan mengirimkan konfirmasi jadwal dan ruangan via WhatsApp ke nomor <strong>{trialFormData.whatsapp}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nama Lengkap Siswa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama panggilan atau lengkap anak"
                    value={trialFormData.namaSiswa}
                    onChange={(e) => setTrialFormData({ ...trialFormData, namaSiswa: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nomor WhatsApp (Ortu / Siswa)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08xxxxxxxxxx"
                    value={trialFormData.whatsapp}
                    onChange={(e) => setTrialFormData({ ...trialFormData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Kelas Siswa
                    </label>
                    <select
                      value={trialFormData.kelas}
                      onChange={(e) => setTrialFormData({ ...trialFormData, kelas: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="SD Kelas 1-3">SD Kelas 1-3</option>
                      <option value="SD Kelas 4-6">SD Kelas 4-6</option>
                      <option value="SMP Kelas 7-8">SMP Kelas 7-8</option>
                      <option value="SMP Kelas 9">SMP Kelas 9</option>
                      <option value="SMA Kelas 10-11">SMA Kelas 10-11</option>
                      <option value="SMA Kelas 12 / UTBK">SMA Kelas 12 / UTBK</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Pilihan Hari
                    </label>
                    <select
                      value={trialFormData.hariPilihan}
                      onChange={(e) => setTrialFormData({ ...trialFormData, hariPilihan: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="Sabtu Pagi (09.00)">Sabtu Pagi (09.00)</option>
                      <option value="Sabtu Siang (13.30)">Sabtu Siang (13.30)</option>
                      <option value="Senin Sore (16.00)">Senin Sore (16.00)</option>
                      <option value="Rabu Sore (16.00)">Rabu Sore (16.00)</option>
                      <option value="Jumat Sore (16.00)">Jumat Sore (16.00)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all mt-2"
                >
                  Konfirmasi Booking Trial Gratis
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  100% Gratis tanpa biaya pendaftaran tersembunyi.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
