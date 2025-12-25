import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaReact, FaNodeJs, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Pendidikan</a></li>
          <li><a href="#skills">Kemampuan</a></li>
          <li><a href="#experience">Pengalaman</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <img src="/profile.jpg" alt="Hosni Mubarok" className="profile-photo" />
        <h1>Hosni Mubarok</h1>
        <p>Saya adalah lulusan mahasiswa Teknik Informatika di Universitas Komputer Indonesia (UNIKOM) yang passionate dalam pengembangan web dan teknologi IoT.</p>
        <p>Tujuan saya adalah terus berkembang menjadi developer yang inovatif, berkontribusi pada proyek-proyek teknologi yang bermanfaat bagi masyarakat, serta siap berkolaborasi dalam tim profesional. </p>
        <a href="#contact" className="cta-button">Hubungi Saya</a>
      </section>

      <section id="education" className="section fade-in">
        <h2>Pendidikan</h2>
        <ul>
          <li>2021-2025: <a href="https://www.unikom.ac.id/" target="_blank" rel="noopener noreferrer">Universitas Komputer Indonesia</a>, S1 Teknik Informatika</li>
          <li>2018-2021: <a href="https://www.smktignc.sch.id/" target="_blank" rel="noopener noreferrer">SMA TI Garuda Nusantara</a>, Jurusan RPL</li>
        </ul>
      </section>

      <section id="skills" className="section fade-in">
        <h2>Kemampuan</h2>
        <ul className="skills-list">
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS</li>
          <li><FaJs /> JavaScript</li>
          <li><FaPhp /> PHP</li>
          <li><FaDatabase /> MySQL</li>
          <li><FaReact /> React.js</li>
          <li><FaNodeJs /> Express.js</li>
        </ul>
      </section>

      <section id="experience" className="section fade-in">
        <h2>Pengalaman</h2>
        <ul>
          <li>Pt Mediatama Kreasi Informatika (2024): Web Developer (magang)</li>
          <ul>
            <li>Mengembangkan dan memelihara website menggunakan HTML, CSS, dan JavaScript.</li>
            <li>Menggunakan framework seperti React untuk meningkatkan performa aplikasi web.</li>
            <li>Mengelola basis data dan membuat API sederhana untuk kebutuhan website interaktif.</li>
          </ul>
        </ul>
      </section>

      <section id="projects" className="section fade-in">
      <h2>Proyek GitHub</h2>
      <div className="project-card">
        <div className="project-content">
          <img src="https://clearpond.com.au/wp-content/uploads/2025/01/smart-pond-dashboard.jpg" alt="Screenshot Kolam Cerdas App" className="project-image" /> {/* Ganti dengan screenshot aslimu */}
          <div className="project-details">
            <h3>Kolam Cerdas App</h3>
            <p>Aplikasi web inovatif yang dirancang untuk memantau dan mengelola kolam ikan secara pintar menggunakan teknologi IoT. Proyek ini membantu petani ikan mengoptimalkan kondisi air secara real-time, mengurangi risiko kematian ikan, dan meningkatkan efisiensi pemberian pakan. Proyek ini mengintegrasikan sensor IoT dengan backend API untuk data yang akurat dan responsif.</p>
            <ul className="project-features">
              <li><strong>Fitur Utama:</strong></li>
              <li>Monitoring real-time suhu air, tingkat pH, dan kejernihan air melalui dashboard intuitif.</li>
              <li>Pengaturan otomatis pakan ikan berdasarkan jadwal atau kondisi sensor.</li>
              <li>Notifikasi alert jika parameter air keluar dari batas aman.</li>
              <li>Integrasi dengan perangkat IoT seperti Esp32 untuk pengumpulan data.</li>
            </ul>
            <p><strong>Tech Stack:</strong> React.js (frontend), Express.js (backend), Node.js, IoT protocols (MQTT), dan database untuk logging data.</p>
            <a href="https://github.com/KeraSakti666/kolam-cerdas-app" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub /> Lihat di GitHub</a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-content">
          <img src="https://images.ctfassets.net/sygt3q11s4a9/2jEDuL7sQakLVVsTSGAz37/836e1d6a0c0ac7d2246bc26a7863636b/0_jugM60aMp6xWngO5" alt="Screenshot Wallet App" className="project-image" /> {/* Ganti dengan screenshot aslimu */}
          <div className="project-details">
            <h3>Wallet</h3>
            <p>Sebuah aplikasi mobile sederhana untuk mengelola aset kripto, fokus pada keamanan dan kemudahan penggunaan. Proyek ini dibuat untuk mempelajari konsep blockchain wallet, termasuk manajemen kunci pribadi dan transaksi dasar. Cocok untuk pemula yang ingin belajar crypto tanpa risiko tinggi, dengan fitur backup yang aman untuk mencegah kehilangan aset.</p>
            <ul className="project-features">
              <li><strong>Fitur Utama:</strong></li>
              <li>Deposit dan withdraw aset kripto dengan integrasi API wallet sederhana (misalnya testnet).</li>
              <li>Sistem backup menggunakan secret phrase (mnemonic) dan private key untuk restorasi wallet.</li>
              <li>Tampilan saldo real-time dan riwayat transaksi.</li>
            </ul>
            <p><strong>Tech Stack:</strong> React Native (cross-platform mobile), Redux untuk state management, dan library crypto seperti ethers.js untuk handle wallet.</p>
            <a href="https://github.com/KeraSakti666/Wallet" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub /> Lihat di GitHub</a>
          </div>
        </div>
      </div>
    </section>

      <section id="contact" className="section fade-in">
        <h2>Kontak</h2>
        <p><FaEnvelope /> Email: <a href="mailto:hosnimubarok121@gmail.com">hosnimubarok121@gmail.com</a></p>
        <p><FaLinkedinIn /> LinkedIn: <a href="https://www.linkedin.com/in/hosni-mubarok-967b52388/">Hosni Mubarok</a></p>
        <p><FaMapMarkerAlt /> Alamat: Kp.sinarmukti 02/04, Desa selacau, Kec. batujajar 40561 Kabupaten Bandung barat</p>
      </section>
    </div>
  );
}

export default App;