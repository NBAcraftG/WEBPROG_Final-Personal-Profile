<style scoped>
.page-wrapper {
  min-height: 100vh;
  color: #f2f2f2;
  position: relative;
  overflow-x: hidden;
  padding-top: 1rem;
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
  padding: 2rem 1rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffbf4a;
}

.hero h1 {
  color: #59a9e6;
  margin-top: 1rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
}

.card {
  background: rgba(15, 15, 15, 0.7);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
}

h2 {
  color: #59a9e6;
  margin-bottom: 0.75rem;
}

.card p, .card li {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

ul { padding-left: 1.2rem; }

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
  transition: transform 0.3s;
}

.gallery-img:hover { transform: scale(1.03); }

.footer {
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.4);
}

.back-btn {
  position: fixed;
  top: 90px;
  left: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  z-index: 100;
}

.back-btn:hover { background: #59a9e6; border-color: #59a9e6; }

@media (max-width: 768px) {
  .profile-img { width: 120px; height: 120px; }
  .container { padding: 1rem; }
  .card { padding: 1.2rem; }
  .back-btn { top: 100px; left: 10px; }
}
</style>