<template>
<div class="page-wrapper">
  <button class="back-btn" @click="$router.back()">
    ← Back
  </button>
    <header class="hero">
      <h1>Contact Me</h1>
      <p>Leave a message in the guestbook or check out my social links.</p>
    </header>

    <main class="container">
      
      <!-- Social Media Section -->
      <section class="card">
        <h2>My Social Links</h2>
        <div class="social-links">
          <a href="mailto:kcbinas@student.apc.edu.ph" class="social-btn">Email</a>
          <a href="https://github.com/NBAcraftG" class="social-btn">GitHub</a>
          <a href="https://www.linkedin.com/in/kurt-gabriel-bi%C3%B1as-b1203b352/" class="social-btn">LinkedIn</a>
        </div>
      </section>

      <!-- Guestbook Section -->
      <section class="card">
        <h2>Guestbook</h2>
        
        <!-- Input Form -->
        <form @submit.prevent="submitMessage" class="guestbook-form">
          <input 
            v-model="name" 
            type="text" 
            placeholder="Your Name" 
            required 
            class="input-field"
          />
          <textarea 
            v-model="message" 
            placeholder="Your Message" 
            required 
            class="input-field"
            rows="3"
          ></textarea>
          <button type="submit" :disabled="loading" class="submit-btn">
            {{ loading ? 'Sending...' : 'Sign Guestbook' }}
          </button>
        </form>

        <!-- Messages List (GET Request) -->
        <div class="messages-list">
          <h3>Recent Messages</h3>
          <div v-if="loadingMessages" class="loading">Loading messages...</div>
          <div v-else-if="messages.length === 0" class="empty">No messages yet. Be the first!</div>
          
          <div v-for="msg in messages" :key="msg.id" class="message-item">
            <div class="msg-header">
              <strong>{{ msg.name }}</strong>
              <span class="msg-date">{{ formatDate(msg.created_at) }}</span>
            </div>
            <p>{{ msg.message }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const name = ref('')
const message = ref('')
const loading = ref(false)
const loadingMessages = ref(true)
const messages = ref([])

// 1. GET: Fetch messages on load
const fetchMessages = async () => {
  loadingMessages.value = true
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) {
    console.error('Error fetching:', error)
  } else {
    messages.value = data
  }
  loadingMessages.value = false
}

// 2. POST: Submit new message
const submitMessage = async () => {
  loading.value = true
  const { error } = await supabase
    .from('guestbook')
    .insert([
      { 
        name: name.value, 
        message: message.value 
      }
    ])

  if (error) {
    alert('Error submitting message: ' + error.message)
  } else {
    alert('Message sent successfully!')
    name.value = ''
    message.value = ''
    await fetchMessages()
  }
  loading.value = false
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString() + ' ' + new Date(dateStr).toLocaleTimeString()
}

onMounted(() => {
  fetchMessages()
})
</script>

<style scoped>
/* ===== GIF Background ===== */
.page-wrapper {
  min-height: 100vh;
  color: #f2f2f2;
  position: relative;
  overflow-x: hidden;
}

/* Background GIF */
.page-wrapper::before {
  content: "";
  position: fixed;
  inset: 0;
  background: url("https://miro.medium.com/v2/resize:fit:1308/1*1Fd4aYtGmfawalZbl4RJFw.gif")
              center / cover no-repeat;
  z-index: -2;
}

/* Dark overlay for readability */
.page-wrapper::after {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: -1;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
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
  margin-bottom: 1rem; 
}

/* Form Styles */
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

.input-field::placeholder {
  color: rgba(255,255,255,0.5);
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
  transition: background 0.3s;
}

.submit-btn:hover { background: #3b8ccf; }
.submit-btn:disabled { background: #555; cursor: not-allowed; }

/* Messages List */
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

.loading, .empty {
  text-align: center;
  color: rgba(255,255,255,0.6);
  padding: 1rem;
}

/* Social Links */
.social-links { 
  display: flex; 
  gap: 1rem; 
  flex-wrap: wrap; 
}

.social-btn {
  background: rgba(255,255,255,0.1);
  color: white; 
  padding: 0.6rem 1.2rem;
  text-decoration: none; 
  border-radius: 6px; 
  transition: 0.3s;
  border: 1px solid rgba(255,255,255,0.1);
}

.social-btn:hover { 
  background: #59a9e6; 
  border-color: #59a9e6;
}

/* Mobile Responsive */
@media (max-width: 600px) {
  .container { 
    padding: 0.5rem; 
  }
  .card { 
    padding: 1rem; 
  }
}
</style>