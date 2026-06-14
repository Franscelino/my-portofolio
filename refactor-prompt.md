# Prompt: Refactoring & Redesign Portfolio Web — Franscelino Melvyn

## Konteks Proyek

Kamu adalah senior frontend engineer dan UI/UX designer yang bertugas melakukan **refactoring menyeluruh** dan **redesign visual** pada portfolio web milik **Franscelino Melvyn**.

Portfolio ini dibangun dengan:
- **React + Vite** sebagai base framework
- **Tailwind CSS** untuk styling utility-first
- **motion (Framer Motion)** untuk animasi
- **react-router-dom** untuk routing multi-page
- **@react-three/fiber** dan **@react-three/drei** untuk canvas 3D di Hero section

---

## Struktur File yang Ada (Jangan Diubah Tanpa Alasan Jelas)

### Entry & Root
- `index.html` → entry HTML, mount ke `<div id="root">`
- `src/main.jsx` → entry React, render `<App />`
- `src/App.jsx` → root layout: BrowserRouter, Navbar, CustomCursor, Routes, Footer
- `src/index.css` → global styles: Tailwind directives, scrollbar, body, utility class

### Komponen Halaman Utama (`src/components/`)
- `Hero.jsx` + `Hero3DCanvas.jsx` → section pembuka dengan canvas 3D
- `About.jsx` → statistik, tab Journey/Philosophy/Goals, foto profil
- `Experience.jsx` → ringkasan experience, navigasi ke halaman detail
- `Projects.jsx` → 4 project unggulan dari data
- `Certifications.jsx` → 3 sertifikat teratas
- `Contact.jsx` → link ke email, Instagram, LinkedIn, GitHub, Discord, phone
- `Navbar.jsx` → sticky navbar, scroll anchor ke section homepage
- `Footer.jsx` → copyright dan link sosial
- `CustomCursor.jsx` → kursor kustom desktop

### Halaman Detail (`src/page/`)
- `AllProjectsDetailsPage.jsx` → mode summary semua project + mode detail per project
- `CertificationsPage.jsx` → semua sertifikasi lengkap
- `hardSkillsExperiencePage.jsx` → detail hard skills experience
- `softSkillsExperiencePage.jsx` → detail soft skills experience

### Sumber Data (`src/data/`)
- `projectsData.js` → data project (id, nama, deskripsi, thumbnail, fitur, tantangan, gallery)
- `certificationsData.js` → data sertifikasi (issuer, tanggal, icon, achievements, skills)
- `hardSkillsExperienceData.js` → data experience hard skills (akademik, bootcamp, workshop)
- `softSkillsExperienceData.js` → data experience soft skills (organisasi, event, mentoring)

### Routing (di `src/App.jsx`)
- `/` → Homepage (Hero → About → Experience → Projects → Certifications → Contact)
- `/projects/:id` → Detail satu project
- `/projects/all-details-summary` → Summary semua project
- `/experience/soft-skills` → Detail soft skills
- `/experience/hard-skills` → Detail hard skills
- `/certifications` → Halaman semua sertifikasi

---

## Design System Baru: "The Dark Canvas"

Terapkan design system berikut secara konsisten di **semua file komponen dan halaman**.

### Color Palette
```
--color-bg-primary:    #0B0B0B   /* Deep charcoal, background utama */
--color-bg-secondary:  #1A1A1A   /* Matte dark gray, card & section separator */
--color-text-primary:  #FFFFFF   /* Crisp white, heading utama */
--color-text-muted:    #8A8A8A   /* Silver/slate, subtext & metadata */
--color-accent:        #00E5FF   /* Cyan/electric turquoise, elemen interaktif & glow */
--color-border:        #2A2A2A   /* Border subtle untuk card/divider */
```

### Typography
- **Display/Headings:** Sans-serif geometris/neo-grotesque — letter-spacing lebar (`tracking-widest` atau `tracking-[0.15em]`), font-weight bold/black
- **Body:** Clean sans-serif atau monospace-inspired — untuk deskripsi panjang dan metadata
- **Accent text/label:** Uppercase dengan tracking lebar, ukuran kecil — untuk eyebrow text dan label kategori
- **Scale yang digunakan:**
  - `text-6xl` / `text-7xl` → Hero headline
  - `text-4xl` / `text-5xl` → Section title
  - `text-xl` / `text-2xl` → Card title
  - `text-sm` / `text-base` → Body text
  - `text-xs` uppercase → Label/eyebrow/metadata

### Layout
- **Asymmetric grid** — whitespace luas, jangan cramped
- Section padding vertikal: minimal `py-24` atau `py-32`
- Container max-width: `max-w-7xl mx-auto px-6`
- Card backgrounds: `bg-[#1A1A1A]` dengan `border border-[#2A2A2A]`
- Border-radius: minimal — gunakan `rounded-lg` maksimal, hindari `rounded-2xl` atau lebih besar

### Accent & Glow Effect
- Elemen interaktif (button, link, hover state): gunakan `#00E5FF`
- Glow effect: `box-shadow: 0 0 20px rgba(0, 229, 255, 0.3)`
- Hover transition: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Underline animation pada link: expand dari kiri ke kanan via `scaleX`

### Navbar
- Background: `backdrop-filter: blur(12px)` + `background: rgba(11, 11, 11, 0.8)`
- Border bottom: `border-b border-[#2A2A2A]`
- CTA button "Download CV": border 1px solid, hover fill solid + invert text color
- Logo "FM" atau nama lengkap di sisi kiri

---

## Perubahan Konten Penting

### Tambahkan Data Magang Baru

Tambahkan ke **`src/data/hardSkillsExperienceData.js`** (atau file yang paling relevan):

```js
{
  id: "kalbe-internship",
  title: "Intern Full Stack Application",
  company: "Kalbe Consumer Health",
  type: "internship",
  status: "ongoing", // sedang berjalan
  startDate: "2025", // sesuaikan dengan tanggal aktual
  endDate: "Present",
  location: "Jakarta, Indonesia",
  description: "Menjalankan magang sebagai Full Stack Application Intern di Kalbe Consumer Health, salah satu divisi dari Kalbe Farma Group — perusahaan farmasi terbesar di Asia Tenggara.",
  impact: [
    // Isi dengan pencapaian/kontribusi aktual yang kamu kerjakan
  ],
  techStack: [
    // Isi dengan tech stack yang kamu pakai di Kalbe
  ],
  lessons: [
    // Isi dengan lessons learned
  ],
  photos: [] // tambahkan jika ada
}
```

**Pastikan data ini muncul di:**
- `Experience.jsx` (section ringkasan) — tampilkan sebagai highlighted card "Currently at"
- `hardSkillsExperiencePage.jsx` — muncul di urutan paling atas (paling baru)
- Pertimbangkan untuk menampilkan badge "Ongoing" atau "Now" di card ini

---

## Tugas Refactoring Per File

### 1. `src/index.css`
- Hapus semua warna lama, ganti dengan CSS custom properties dari design system baru
- Pastikan `body` background default adalah `#0B0B0B`
- Scrollbar: dark minimal (thumb `#2A2A2A`, track transparan)
- Tambahkan utility class untuk glow: `.glow-accent { box-shadow: 0 0 20px rgba(0,229,255,0.3); }`

### 2. `src/components/Navbar.jsx`
- Terapkan backdrop-blur + semi-transparent background
- Pastikan logo/nama di kiri, menu di tengah, CTA di kanan
- CTA "Download CV": style outline, hover → solid fill dengan text invert
- Active state menu: warna accent `#00E5FF`
- Smooth scroll ke section ID tetap dipertahankan

### 3. `src/components/Hero.jsx`
- Headline besar (`text-6xl` atau `text-7xl`), font-weight black, letter-spacing lebar
- Tagline: *"Designing the future of digital elegance."* atau versi yang kamu pilih
- Sub-tagline: deskripsi singkat sebagai creative technologist / full stack developer
- CTA "Explore My Work" dengan arrow icon, hover glow cyan
- Background: tetap gunakan `Hero3DCanvas.jsx` (canvas 3D), pastikan warna ambient sesuai palette baru (gelap, dengan aksen cyan)

### 4. `src/components/About.jsx`
- Stats counter: 4 kolom, angka `text-5xl` bold, label `text-sm` uppercase muted
- Tab Journey/Philosophy/Goals: tab active state = accent color, non-active = muted
- Foto profil: tetap ada, rounded minimal
- Tombol Download CV: style konsisten dengan navbar CTA

### 5. `src/components/Experience.jsx`
- Tampilkan card dua kategori: Hard Skills & Soft Skills
- Tambahkan highlight visual untuk magang Kalbe (badge "Currently" atau border accent)
- Navigasi ke halaman detail tetap dipertahankan

### 6. `src/components/Projects.jsx`
- 4 project unggulan dalam grid
- Card hover: image scale-105, overlay muncul dengan info + CTA "View Project"
- Kursor custom saat hover card → pertahankan dari `CustomCursor.jsx`
- Tombol "View All Projects" → link ke `/projects/all-details-summary`

### 7. `src/components/Certifications.jsx`
- 3 sertifikat teratas, card minimal
- Tombol "View All Certifications" → link ke `/certifications`

### 8. `src/components/Contact.jsx`
- Email ditampilkan besar (`text-3xl` atau lebih)
- Hover effect: underline expand kiri ke kanan via CSS `scaleX`
- Social links horizontal, rapi, dengan icon dari lucide-react
- Tagline: *"Let's create something extraordinary."*

### 9. `src/components/Footer.jsx`
- Copyright di kiri, social links di kanan
- Minimal dan clean, bukan besar-besaran

### 10. Halaman Detail (`src/page/`)
- Konsisten dengan design system yang sama
- Header section setiap halaman: breadcrumb sederhana (Home > Section > Item)
- Gallery foto: grid responsif, hover slight overlay
- IntersectionObserver reveal tetap dipertahankan

---

## Aturan Implementasi

1. **Jangan ubah struktur routing di `src/App.jsx`** kecuali ada tambahan route baru yang memang dibutuhkan
2. **Jangan ubah struktur data di `src/data/`** — hanya tambah/edit konten, jangan ganti shape/key yang sudah ada kecuali ada kebutuhan spesifik
3. **File legacy Vue** (`App.vue`, `main.js`, `HelloWorld.vue`) — abaikan, jangan disentuh
4. **Asset di `public/`** — path absolutnya tidak boleh berubah tanpa sinkronisasi ke semua komponen yang memakainya
5. **Animasi:** Pertahankan `motion` (Framer Motion), fokus pada `fadeInUp`, `staggerChildren`, dan hover micro-interaction. Hindari animasi berlebihan yang membuat terasa "AI-generated"
6. **Responsivitas:** Semua perubahan harus responsif — mobile-first dengan breakpoint `sm`, `md`, `lg`, `xl`
7. **Konsistensi:** Setiap warna harus referensi CSS custom property atau Tailwind config — tidak ada hardcoded hex di JSX

---

## Output yang Diharapkan

Untuk setiap file yang dimodifikasi, berikan:
1. File lengkap yang sudah direfactor (bukan diff/patch)
2. Penjelasan singkat apa yang berubah dan alasannya
3. Jika ada keputusan desain yang perlu konfirmasi, tandai dengan `// TODO: konfirmasi` di kode

Mulai dari `src/index.css` → `tailwind.config.js` → `Navbar.jsx` → `Hero.jsx`, lalu komponen lain secara berurutan.
