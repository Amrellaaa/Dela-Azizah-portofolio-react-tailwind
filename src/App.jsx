import React from "react";

export default function App() {
  return (
    <div className="font-sans text-slate-800">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-bold text-purple-700">Dela</h1>
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li><a href="#about" className="hover:text-purple-500">About</a></li>
              <li><a href="#projects" className="hover:text-purple-500">Projects</a></li>
              <li><a href="#skills" className="hover:text-purple-500">Skills</a></li>
              <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="uppercase tracking-widest text-sm text-slate-500 mb-2">Hello, I'm</h3>
            <h1 className="text-4xl font-bold text-purple-600 mb-4">Dela <span className="text-purple-800">Azizah</span></h1>
            <p className="mb-4 text-slate-600">I'm an Informatics Engineering student at Pamulang University. I’m currently learning web development (HTML, CSS, JavaScript) and basic programming (C++, Java), building small projects to sharpen my skills.</p>
            <a href="#projects" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">See My Work</a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="foto1.jpg" alt="foto_dela" className="w-72 h-72 rounded-full object-cover border-4 border-slate-200 shadow-lg" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-slate-500 uppercase tracking-widest mb-2">My Projects</h3>
          <h1 className="text-3xl text-center font-bold text-slate-800 mb-10">Learning Portfolios</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4">
              <img src="Portfolio1.png" alt="Wisata Spot Bogor" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-semibold mb-2">Wisata Spot Bogor</h4>
              <p className="text-slate-600 text-sm mb-2">Website wisata sederhana menggunakan HTML & CSS untuk menampilkan informasi tempat wisata di Bogor.</p>
              <a href="https://github.com/Amrellaaa/Web-Wisata" className="text-purple-600 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4">
              <img src="portfolio2.png" alt="Daftar Kontak" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-semibold mb-2">Aplikasi Daftar Kontak</h4>
              <p className="text-slate-600 text-sm mb-2">Aplikasi daftar kontak sederhana yang dibuat menggunakan React dan Tailwind CSS.</p>
              <a href="https://github.com/Amrellaaa/aplikasi-kontak-tailwind" className="text-purple-600 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-slate-500 uppercase tracking-widest mb-2">My Learning</h3>
          <h1 className="text-3xl text-center font-bold text-slate-800 mb-8">Skills & Tools</h1>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-700 mb-6 list-disc list-inside">
            <li>HTML & CSS</li>
            <li>JavaScript (dasar)</li>
            <li>C++ (dasar)</li>
            <li>Java (dasar)</li>
            <li>SQL (dasar)</li>
            <li>Git & GitHub</li>
          </ul>
          <p className="text-center text-slate-600">Saya masih dalam tahap belajar dan aktif membuat proyek kecil sebagai latihan. Saya percaya bahwa keterampilan akan berkembang seiring waktu dan konsistensi.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-slate-500 uppercase tracking-widest mb-2">Get In Touch</h3>
          <h1 className="text-3xl text-center font-bold text-slate-800 mb-8">Contact Me</h1>
          <form className="max-w-xl mx-auto mb-6">
            <input type="text" placeholder="Name" name="name" className="w-full p-3 mb-4 border border-gray-300 rounded" required />
            <input type="email" placeholder="Email" name="email" className="w-full p-3 mb-4 border border-gray-300 rounded" required />
            <textarea placeholder="Your Message" name="message" rows="6" className="w-full p-3 mb-4 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Send Message</button>
          </form>
          <div className="text-center text-slate-700">
            <p><strong>Email:</strong> amrella578@gmail.com</p>
            <p><strong>Phone:</strong> +62 851-2360-5451</p>
            <p><strong>Location:</strong> Pamulang, Tangerang Selatan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
