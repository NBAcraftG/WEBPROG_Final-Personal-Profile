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

.container {
  max-width: 800px;
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

h2 { color: #59a9e6; margin-bottom: 1rem; }

.guestbook-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input-field {
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.3);
  color: white;
  font-size: 1rem;
}

.input-field:focus {
  outline: none;
  border-color: #59a9e6;
}

.submit-btn {
  padding: 0.8rem;
  background: #59a9e6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.submit-btn:hover { background: #3b8ccf; }
.submit-btn:disabled { background: #555; cursor: not-allowed; }

.messages-list h3 {
  margin-bottom: 1rem;
  color: #ffbf4a;
}

.message-item {
  background: rgba(0,0,0,0.3);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 3px solid #59a9e6;
}

.msg-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #aaa;
}

.social-links { display: flex; gap: 1rem; flex-wrap: wrap; }

.social-btn {
  background: rgba(255,255,255,0.1);
  color: white;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.1);
}

.social-btn:hover { background: #59a9e6; border-color: #59a9e6; }

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

@media (max-width: 600px) {
  .container { padding: 1rem; }
  .card { padding: 1rem; }
  .back-btn { top: 100px; left: 10px; }
}
</style>