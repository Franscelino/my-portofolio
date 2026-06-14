# Claude Context - Portofolio Web Franscelino Melvyn

Dokumentasi ini menjelaskan struktur folder/file, peran tiap bagian, dan alur kerja aplikasi supaya mudah dipakai sebagai konteks oleh agent lain atau saat lanjut pengembangan.

## Ringkasan Aplikasi

Ini adalah portfolio web berbasis **React + Vite** dengan **Tailwind CSS** dan animasi memakai **motion**. Aplikasi menampilkan beberapa section utama di halaman depan, lalu menyediakan halaman detail untuk projects, experience, dan certifications melalui routing `react-router-dom`.

Alur besar aplikasi:
1. Browser membuka `index.html`.
2. React di-mount dari `src/main.jsx` ke elemen `#root`.
3. `src/App.jsx` membungkus aplikasi dengan router, navbar, custom cursor, main content, dan footer.
4. Halaman utama menampilkan section berurutan: Hero, About, Experience, Projects, Certifications, dan Contact.
5. Tombol atau link tertentu membawa user ke halaman detail berbasis route.
6. Data konten utama disimpan di `src/data` dan dirender oleh komponen UI di `src/components` serta halaman detail di `src/page`.

## Struktur Folder dan File

### Root project

| File/Folder | Fungsi |
|---|---|
| `index.html` | Entry HTML utama. Menyediakan `<div id="root">` tempat React dirender. Juga memuat title dan favicon. |
| `package.json` | Daftar dependency, script `dev/build/lint/preview`, dan metadata project. |
| `vite.config.js` | Konfigurasi Vite. Memakai plugin React dan Tailwind. |
| `tailwind.config.js` | Konfigurasi Tailwind untuk color palette, theme extension, dan scan path file. |
| `eslint.config.js` | Konfigurasi linting ESLint untuk file JS/JSX. |
| `README.md` | Masih berisi template bawaan Vite/React dan belum menjadi dokumentasi utama project ini. |
| `public/` | Asset statis yang diakses langsung via root path, seperti gambar, PDF CV, dan logo. |
| `src/` | Seluruh source code aplikasi React. |

### Folder `public/`

Folder ini menyimpan aset yang dipakai langsung dari path seperti `/profile.jpg`, `/Logo.svg`, atau `/Franscelino_Melvyn_CV.pdf`.

Isi umumnya terbagi menjadi:
| Kelompok asset | Contoh |
|---|---|
| Gambar profil dan logo | `profile.jpg`, `Logo.svg` |
| Sertifikat | `sertif1.png` sampai `sertif7.png`, `sertif_temanusaha.png` |
| Project assets | `landingTemanUsaha.png`, `Nexpathlanding.png`, `Clovio1.jpg`, `BukaPajak1.png`, dan lain-lain |
| Experience photos | `stuban*.jpg`, `techbin*.jpg`, `techblast*.jpg`, `fp*.jpg`, `fl*.jpg`, `database*.jpg`, `monad*.png`, `lisk*.png` |
| Dokumen | `CV_Melvyn.pdf`, `Franscelino_Melvyn_CV.pdf` |

Catatan: banyak komponen di React mengambil file dari `public/` secara langsung dengan path absolut, jadi nama file di folder ini harus tetap konsisten.

### Folder `src/`

#### Entry dan styling global

| File | Fungsi |
|---|---|
| `src/main.jsx` | Entry React. Mengimpor `index.css`, lalu me-render `<App />` ke root DOM. |
| `src/index.css` | Styling global. Mengaktifkan Tailwind, mengatur body, scrollbar, selection, utility class, dan animasi umum. |
| `src/App.jsx` | Root komponen aplikasi. Menyusun router, layout utama, section homepage, dan route halaman detail. |
| `src/App.css` | Sisa style template Vite bawaan. Tidak tampak menjadi pusat styling aplikasi saat ini. |

#### Folder `src/components/`

Komponen di sini adalah pembangun UI utama untuk halaman depan.

| File | Peran |
|---|---|
| `About.jsx` | Section “About Me” dengan statistik, tab journey/philosophy/goals, foto profil, dan tombol download CV. |
| `Certifications.jsx` | Section ringkasan sertifikasi. Menampilkan 3 item teratas dan tombol menuju halaman lengkap. |
| `Contact.jsx` | Section kontak berisi email, Instagram, LinkedIn, GitHub, Discord, dan phone. |
| `CustomCursor.jsx` | Cursor kustom untuk desktop/pointer fine. Mengikuti mouse dan berubah saat hover elemen interaktif. |
| `Experience.jsx` | Section ringkasan experience. Menampilkan kartu soft skills dan hard skills, lalu navigasi ke halaman detail. |
| `Footer.jsx` | Footer situs berisi copyright dan link kontak sosial. |
| `Hero.jsx` | Section pembuka homepage dengan judul utama, tagline, CTA, background dinamis, dan canvas 3D. |
| `Hero3DCanvas.jsx` | Background 3D untuk hero memakai `@react-three/fiber` dan `@react-three/drei`. |
| `Navbar.jsx` | Navbar fixed yang mengatur scroll anchor ke section homepage, menu mobile, dan tombol download CV. |
| `Projects.jsx` | Section proyek unggulan. Mengambil data dari `projectsData.js` dan mengarahkan ke halaman detail proyek. |
| `HelloWorld.vue` | Sisa komponen template Vue bawaan. Tidak dipakai oleh aplikasi React. |

#### Folder `src/data/`

Folder ini adalah sumber data konten. UI membaca data dari sini, bukan hardcoded di banyak tempat.

| File | Peran |
|---|---|
| `projectsData.js` | Semua data project: id, nama, deskripsi, thumbnail, link repo/demo, fitur, tantangan, pembelajaran, gallery. |
| `certificationsData.js` | Semua data sertifikasi dan penghargaan: id, issuer, tanggal, icon, gambar, achievements, skills. |
| `hardSkillsExperienceData.js` | Data pengalaman hard skills: akademik, bootcamp, workshop, tanggal, lokasi, foto, impact, lessons. |
| `softSkillsExperienceData.js` | Data pengalaman soft skills: organisasi, event, mentoring, public speaking, foto, impact, lessons. |

#### Folder `src/page/`

Halaman-halaman ini dipakai untuk tampilan detail berbasis route.

| File | Peran |
|---|---|
| `AllProjectsDetailsPage.jsx` | Menangani halaman detail project individual dan juga mode summary all projects. |
| `CertificationsPage.jsx` | Halaman detail semua sertifikasi dan awards. |
| `hardSkillsExperiencePage.jsx` | Halaman detail hard skills experience dengan gallery, animasi, dan visual fokus per item. |
| `softSkillsExperiencePage.jsx` | Halaman detail soft skills experience dengan struktur serupa hard skills, tetapi kontennya berbeda. |

#### Folder `src/assets/`

| File | Peran |
|---|---|
| `react.svg` | Aset bawaan template Vite/React. |
| `vue.svg` | Aset bawaan template Vue. |

#### File Vue legacy di `src/`

| File | Status |
|---|---|
| `App.vue` | Sisa template Vue, tidak dipakai oleh entry React. |
| `main.js` | Entry Vue bawaan, tetapi aplikasi aktif memakai `main.jsx`. |

## Alur Kerja Aplikasi

### 1. Bootstrap aplikasi

`index.html` memuat script module ke `/src/main.jsx`. File itu memanggil `createRoot(...).render(<App />)`.

### 2. Root layout

`App.jsx` membungkus seluruh aplikasi dengan `BrowserRouter`. Di level atas ada:
1. `CustomCursor` untuk efek pointer.
2. `Navbar` untuk navigasi global.
3. `main` yang berisi semua route.
4. `Footer` yang selalu tampil di bawah.

### 3. Homepage

Route `/` menampilkan section berurutan:
1. `Hero`
2. `About`
3. `Experience`
4. `Projects`
5. `Certifications`
6. `Contact`

Urutannya penting karena navbar memakai anchor scroll ke `id` section seperti `#about`, `#experience`, `#projects`, `#certifications`, dan `#contact`.

### 4. Navigasi section di homepage

`Navbar.jsx` menangani dua kondisi:
1. Jika berada di homepage, klik menu akan scroll halus ke section terkait.
2. Jika berada di route lain, navbar akan pindah dulu ke homepage, lalu scroll ke section target.

### 5. Projects workflow

`Projects.jsx` mengambil 4 project unggulan dari `projectsData.js`.

Alur user:
1. Klik kartu project untuk pindah ke `/projects/:id`.
2. Klik tombol “View All Projects” untuk pindah ke `/projects/all-details-summary`.
3. Di halaman summary, user bisa pilih project tertentu untuk lihat detailnya.

`AllProjectsDetailsPage.jsx` mendukung dua mode:
1. Mode summary: daftar semua project.
2. Mode detail: detail satu project berdasarkan `id` dari route.

### 6. Experience workflow

`Experience.jsx` menampilkan ringkasan dua kategori experience.

Alur user:
1. Klik card soft skills menuju `/experience/soft-skills`.
2. Klik card hard skills menuju `/experience/hard-skills`.
3. Masing-masing halaman detail menampilkan daftar pengalaman lengkap, gallery foto, dan informasi pendukung.

### 7. Certifications workflow

`Certifications.jsx` menampilkan ringkasan 3 sertifikat teratas.

Alur user:
1. Klik tombol “View All Certifications” menuju `/certifications`.
2. `CertificationsPage.jsx` menampilkan semua sertifikat lengkap beserta gambar, achievements, skills, dan credential link jika tersedia.

### 8. Contact and external links

`Contact.jsx` menampilkan kartu kontak yang semuanya berupa link keluar: email, Instagram, LinkedIn, GitHub, Discord, dan phone.

### 9. Animasi dan interaksi

Sebagian besar komponen memakai:
1. `motion` untuk animasi masuk, hover, dan transisi.
2. `lucide-react` untuk ikon.
3. `IntersectionObserver` untuk reveal-on-scroll di halaman detail.
4. `CustomCursor` dan class `interactive-hover` untuk affordance visual.

## Sumber Data dan Hubungan Antar File

| Sumber data | Dipakai oleh |
|---|---|
| `src/data/projectsData.js` | `Projects.jsx`, `AllProjectsDetailsPage.jsx` |
| `src/data/certificationsData.js` | `Certifications.jsx`, `CertificationsPage.jsx` |
| `src/data/hardSkillsExperienceData.js` | `hardSkillsExperiencePage.jsx` |
| `src/data/softSkillsExperienceData.js` | `softSkillsExperiencePage.jsx` |

Prinsipnya: komponen UI hanya membaca data, sementara isi konten utama disimpan di file data supaya mudah diperbarui.

## Catatan Penting untuk Pengembangan

1. `src/App.vue`, `src/main.js`, dan `src/components/HelloWorld.vue` adalah sisa template Vue. Aplikasi aktif tidak memakainya.
2. Ada duplikasi beberapa aset CV, misalnya `CV_Melvyn.pdf` dan `Franscelino_Melvyn_CV.pdf`. Pastikan file yang dipakai link UI tetap konsisten.
3. Beberapa halaman detail mengandalkan nama class seperti `experience-card`, `cert-card`, `animated-bg-elements`, dan `blob-effect` untuk animasi/reveal. Jika class diubah, logic observer atau styling bisa terdampak.
4. `Navbar.jsx` bergantung pada id section di homepage. Jika section baru ditambahkan, menu dan id perlu disinkronkan.
5. `App.jsx` adalah pusat routing. Jika route baru dibuat, tambahkan di sini agar navigasi tetap terkontrol.

## Ringkasan Arsitektur Singkat

```
index.html
  -> src/main.jsx
    -> src/App.jsx
      -> Navbar / CustomCursor / Footer
      -> Routes
        -> homepage sections
        -> project detail pages
        -> experience detail pages
        -> certifications page
      -> data from src/data
      -> assets from public/
```

## Tujuan File Ini

File ini disiapkan sebagai konteks kerja untuk agent berikutnya. Saat mengubah fitur, utamakan:
1. Menjaga struktur berbasis data di `src/data`.
2. Menjaga route di `src/App.jsx` tetap menjadi source of truth.
3. Menghindari perubahan acak pada file legacy Vue kecuali memang mau dibersihkan.
