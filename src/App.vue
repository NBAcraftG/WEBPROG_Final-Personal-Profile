<template>
  <div class="app-wrapper">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">Kurt's Portfolio</div>
        <div class="links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Me</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #111;
  color: white;
  min-height: 100vh;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar Styles */
.navbar {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: #59a9e6;
}

.links {
  display: flex;
  gap: 1.5rem;
}

.links a {
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.links a:hover,
.links a.router-link-active {
  color: #59a9e6;
}

/* Page Transition Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .links {
    gap: 1rem;
    font-size: 0.9rem;
  }
}
</style>