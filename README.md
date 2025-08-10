# ngeles.in - AI-Powered Excuse Generator

[![Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge&logo=vercel)](https://ngeles-in.vercel.app/)
[![Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/elhamsyahrianputra/ngeles.in)

Sebuah platform web berbasis AI untuk membuat sebuah alasan dari situasi yang diberikan. Dengan memanfaatkan AI, alasan yang dihasilkan bisa menjadi natural dan logis, disajikan melalui tampilan yang bersih dan minimalis untuk interaksi yang mudah.

![Tampilan Aplikasi ngeles.in](/landing.png)

## Deskripsi Proyek (Project Overview)

### Latar Belakang & Permasalahan

Banyak orang, terutama di kalangan muda, sering menghadapi situasi sosial yang canggung atau "mager" (malas gerak) namun merasa tidak enak untuk menolak sebuah ajakan secara langsung. Permasalahan spesifik yang ingin dipecahkan adalah kesulitan untuk menemukan alasan yang kreatif, logis, atau jenaka secara cepat untuk menolak sebuah situasi tanpa menyinggung perasaan orang lain.

### Tujuan Proyek

Tujuan utama `ngeles.in` sangat jelas: membangun sebuah aplikasi web fungsional yang menyediakan solusi instan untuk masalah ini. Proyek ini bertujuan untuk membantu pengguna mendapatkan alasan yang dapat diterima dengan mudah, cepat, dan efisien dengan memanfaatkan kekuatan AI Generatif.

### Pendekatan

Pendekatan yang diambil adalah membangun sebuah aplikasi *single-page* dengan desain yang minimalis untuk memudahkan pengguna berinteraksi dengan sistem. Aplikasi ini menggunakan model AI IBM Granite yang mengolah input situasi dari pengguna untuk kemudian menghasilkan alasan yang relevan dan kontekstual.

---

## Fitur (Features)

Fitur utama aplikasi dijelaskan secara sistematis sebagai berikut:

1.  **Generator Alasan Berbasis AI (AI-based Excuse Generator)**
    * **Cara Kerja:** Pengguna memasukkan sebuah situasi pada kolom input. Frontend kemudian mengirimkan input ini ke backend, yang selanjutnya memanggil API IBM Granite. Hasilnya dikembalikan dan ditampilkan secara dinamis kepada pengguna. Fungsi ini berjalan dengan baik dan menjadi inti dari aplikasi.

2.  **Desain Minimalis dan Responsif**
    * **Cara Kerja:** Didesain dengan pendekatan *mobile-first*, memastikan pengalaman pengguna yang optimal dan konsisten di berbagai ukuran layar, dari desktop hingga smartphone.

3.  **Tombol "Copy Text"**
    * **Cara Kerja:** Alasan yang dihasilkan dilengkapi dengan tombol "salin". Sebuah *event listener* JavaScript akan menyalin teks ke *clipboard* pengguna untuk kemudahan penggunaan di platform lain, seperti aplikasi chat.

4.  **Peringatan dan Penanganan Error (Warning & Error Handling)**
    * **Cara Kerja:** Sistem menampilkan pesan peringatan dalam bentuk *toast* untuk mengarahkan pengguna, contohnya ketika mencoba mencari alasan tanpa mengisi kolom situasi terlebih dahulu. Ini memastikan fungsi berjalan sesuai tujuan.

---

## Teknologi yang Digunakan (Technologies Used)

Setiap teknologi dipilih secara relevan untuk memenuhi kebutuhan proyek:

* **Bahasa Pemrograman: TypeScript**
    * **Alasan Pemilihan:** Dipilih untuk meningkatkan keandalan kode dengan *type safety*, yang membantu mencegah *bug* umum sebelum aplikasi dijalankan. Fitur seperti *autocompletion* juga secara signifikan mempercepat proses pengembangan.

* **Framework: Next.js**
    * **Alasan Pemilihan:** Sebagai *full-stack framework*, Next.js memungkinkan pembuatan endpoint API (`API Routes`) secara langsung di dalam proyek. Ini sangat menyederhanakan arsitektur karena tidak perlu membuat server terpisah untuk memanggil model AI IBM Granite dengan aman.

* **AI Model: IBM Granite**
    * **Alasan Pemilihan:** Model AI dari IBM ini memiliki kemampuan yang sangat relevan untuk kebutuhan proyek, yaitu menghasilkan teks yang kreatif, kontekstual, dan bervariasi berdasarkan *prompt* yang diberikan. Pemilihan ini juga sesuai dengan arahan dari *capstone project*.

* **Platform Deployment: Vercel**
    * **Alasan Pemilihan:** Sebagai pengembang Next.js, Vercel menyediakan dukungan kelas satu yang membuat proses *build*, optimisasi, dan *deployment* berjalan secara otomatis dan sangat efisien, terintegrasi langsung dengan repositori GitHub.

---

## Penjelasan Dukungan AI (AI Support Explanation)

AI digunakan secara sangat relevan dalam proyek ini, baik sebagai alat bantu pengembangan maupun sebagai inti dari fungsionalitas aplikasi.

### Cara Penggunaan AI

1.  **Perancangan Format Prompt:** Saya memanfaatkan layanan Replicate untuk mengakses model IBM Granite dan merancang sebuah format *prompt* yang spesifik untuk menghasilkan alasan yang sesuai (Bahasa Indonesia, sudut pandang orang pertama, logis/kreatif).

2.  **Generasi Kode & Refactoring:** Saya menggunakan IBM Granite untuk membantu membuat kode *fetching* data dari API, kemudian merefaktornya menggunakan `async/await` untuk meningkatkan keterbacaan dan efisiensi.

3.  **Bantuan Logika Pemrograman:** AI membantu dalam tugas spesifik seperti membuat fungsi untuk mengubah *array of strings* menjadi satu kalimat utuh menggunakan metode `.join()` di TypeScript.

4.  **Integrasi API sebagai Fitur Inti:** Pemanfaatan utama adalah menggunakan API dari AI Model IBM Granite yang disediakan oleh Replicate sebagai mesin utama pada proyek `ngeles.in`.

### Dampak Nyata Penggunaan AI

Dampak penggunaan AI terhadap aplikasi ini adalah **100% dari nilai fungsionalnya**. Tanpa integrasi AI, aplikasi ini tidak akan memiliki fitur utamanya. AI memungkinkan aplikasi untuk memberikan output yang dinamis, tidak terbatas, dan selalu baru untuk setiap pengguna, yang mustahil dicapai dengan data statis. Ini secara langsung menjawab permasalahan utama yang ingin diselesaikan oleh proyek.

---

## Instruksi Pemasangan (Setup Instructions)

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repository**
    ```bash
    git clone https://github.com/elhamsyahrianputra/ngeles.in.git
    ```

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd ngeles.in
    ```

3.  **Install Dependencies**
    ```bash
    pnpm install
    ```

4.  **Setup Environment Variables**
    * Buat file baru dengan nama `.env.local` di root direktori proyek.
    * Tambahkan kunci API Replicate Anda ke dalam file ini.
    ```env
    REPLICATE_API_TOKEN=your_replicate_api_token_here
    ```

5.  **Jalankan Development Server**
    ```bash
    pnpm run dev
    ```

6.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.
