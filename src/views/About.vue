<template>
<div class="page-wrapper">
  <!-- Add this button -->
  <button class="back-btn" @click="$router.back()">
    ← Back
  </button>

  <header class="hero">
    <!-- ... existing code ... -->
  <div class="page-wrapper">
    <header class="hero">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWejGFY4Kdx4Kh9qJumGdCAWoTU14NtUwtsQ&s" 
        alt="Profile Picture" 
        class="profile-img"
      >
      <h1>Personal Profile Web Page</h1>
    </header>

    <main class="container">
      <section class="card">
        <h2>About Me</h2>
        <p>
          Wassup y'all. I'm Kurt/NBAcraft, an aspiring Network Admin,
          Cybersecurity Analyst, and Cloud Security Analyst.
        </p>
      </section>

      <section class="card">
        <h2>Course</h2>
        <p>Computer Science with specialization in Cybersecurity and Forensics</p>
      </section>

      <section class="card">
        <h2>IT Experience</h2>
        <ul>
          <li>Fundamental skills in Cisco Packet Tracer</li>
          <li>Fundamental skills in Programming (Java, Python)</li>
          <li>Fundamental skills in Linux CLI commands</li>
          <li>Fundamental skills in SQL Workbench</li>
        </ul>
      </section>

      <section class="card">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>Playing Video Games</li>
          <li>Listening to RnB / Chill Music</li>
          <li>Watching Anime and Asian dramas</li>
        </ul>
      </section>

      <section class="card">
        <h2>Goals In Life</h2>
        <p>A life that's comfortable, stable, and not constantly on fire.</p>
      </section>

      <section class="card">
        <h2>Picture Gallery</h2>
        <div class="gallery-grid">
          <img 
            v-for="(image, index) in images" 
            :key="index" 
            :src="image" 
            alt="Gallery image" 
            class="gallery-img"
          >
        </div>
      </section>
    </main>
    
    <footer class="footer">
      <p>© 2026 NBAcraft. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlabRdbyaxtksjrtHxqUxxjb_I-bdDcSZzOw&s',
  'https://images8.alphacoders.com/926/thumb-1920-926145.png',
  'https://wallpapers.com/images/hd/ps4-anime-p5y7usqzrcuk05de.jpg',
  'https://c4.wallpaperflare.com/wallpaper/832/841/125/anime-your-lie-in-april-kaori-miyazono-kousei-arima-wallpaper-preview.jpg',
  'https://cdn.wallpapersafari.com/60/15/XkY4aA.jpg',
  'https://picfiles.alphacoders.com/347/thumb-347940.jpg'
]
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  color: #f2f2f2;
  position: relative;
  overflow-x: hidden;
}

.page-wrapper::before {
  content: "";
  position: fixed;
  inset: 0;
  background: url("https://miro.medium.com/v2/resize:fit:1308/1*1Fd4aYtGmfawalZbl4RJFw.gif")
              center / cover no-repeat;
  z-index: -2;
}

.page-wrapper::after {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: -1;
}

.hero {
  text-align: center;
  padding: 3rem 1rem 2.5rem;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.15),
    rgba(0,0,0,0)
  );
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffbf4a;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
}

.hero h1 {
  color: #59a9e6;
  margin-top: 1rem;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.card {
  background: rgba(15, 15, 15, 0.6);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.6);
}

h2 {
  color: #59a9e6;
  margin-bottom: 0.75rem;
}

.card p,
.card li {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

ul {
  padding-left: 1.2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.gallery-img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-img:hover {
  transform: scale(1.03);
}

.footer {
  text-align: center;
  padding: 1.5rem 1rem;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .profile-img {
    width: 120px;
    height: 120px;
  }

  .container {
    padding: 1rem;
  }

  .card {
    padding: 1.2rem;
  }
}
</style>