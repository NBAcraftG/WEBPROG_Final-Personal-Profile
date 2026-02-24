<template>
  <header class="hero">
    <!-- ... existing code ... -->
  <div class="page-container">
    <main class="container">
      <h1>Hello, I’m Kurt</h1>
      <p class="subtitle">BSCS-SF student • Learning • Chilling • Breaking things safely</p>

      <section class="card">
        <p>
          This is my first trial webpage for WEBPROG.  
          I’m here to learn, experiment, and slowly turn confusion into competence.
        </p>
      </section>

      <nav class="links">
        <router-link to="/about">About Me</router-link>
        <router-link to="/contact">Contact Me</router-link>
      </nav>
    </main>
  </div>
</template>

<style scoped>
/* Reusing your CSS design */
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #def;
  background-image: radial-gradient(transparent 0.6em, #def 0.6em), conic-gradient(at 1em 1em, transparent 270deg, #4203 270deg), conic-gradient(at 1em 1em, transparent 270deg, #4204 270deg);
  background-size: 1em 1em, 4em 4em, 4em 4em;
  animation: bgX 12s infinite linear, bgY 12s infinite linear;
}

@keyframes bgX {
  0%, 100% { background-position-x: 0, 0, 1em, 2em, 3em; }
  50% { background-position-x: 0, -3em, -5em, 8em, 5em; }
}

.container {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  padding: 3rem;
  max-width: 600px;
  width: 90%;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #222; }
.subtitle { font-size: 1rem; color: #555; margin-bottom: 2rem; }
.card { background: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem; color: #333; line-height: 1.6; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); }
.links { display: flex; justify-content: center; gap: 1.5rem; }
.links a { text-decoration: none; color: #0066aa; font-weight: 600; position: relative; }
.links a::after { content: ""; position: absolute; left: 0; bottom: -4px; width: 0; height: 2px; background: #0066aa; transition: width 0.3s ease; }
.links a:hover::after { width: 100%; }
</style>