<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const link = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="wrapper">
    <nav class="navbar">
      <img src="./assets/img/logo.png" alt="logo" class="logo">
      <div class="menu">
        <a @click.prevent="link('/')" href="#">Home</a>
        <a @click.prevent="link('/scamsType')" href="#">Scam Detection</a>
        <a href="#">Knowledge Hub</a>
        <a href="#">AI Chatbot</a>
      </div>
      <div class="social-icons">
        <a href="#"><i class="fab fa-github">🔍</i></a>
        <a href="#"><i class="fab fa-discord">📝</i></a>
        <a href="#"><i class="fab fa-reddit">🌐</i></a>
        <a href="#"><i class="fab fa-twitter">🐦</i></a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrapper {
  padding-top: 107px;
}

.navbar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  position: fixed;
  width: 100%;
  height: 107px;
  background-color: #0a0a0a;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.logo {
  width: 124px;
}

.menu {
  display: flex;
  gap: 40px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.menu a:hover {
  color: #0dc5e9;
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-icons a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #0dc5e9;
}
</style>
