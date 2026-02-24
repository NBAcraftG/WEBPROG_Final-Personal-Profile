<template>
  <nav class="navbar">
    <div class="logo">Kurt's Profile</div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/contact">Contact & Guestbook</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo { color: white; font-weight: bold; font-size: 1.2rem; }
.links a {
  color: #ccc;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s;
}
.links a.router-link-active, .links a:hover {
  color: #59a9e6;
}
</style>