<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const link = (path) => {
    router.push(path)
}
</script>

<template>
    <div class="container">
        <div class="hero">
            <h1 class="hero-title">Enhance Your Scam Awareness</h1>

            <div class="cards-container">
                <div class="card" @click="link('/scamsType')">
                    <h2 class="card-title">Scam Type</h2>
                    <p class="card-desc">Understand the different types of online scams</p>
                </div>

                <div class="card">
                    <h2 class="card-title">Reporting Steps</h2>
                    <p class="card-desc">Get the scam reporting tutorial and flowchart</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p class="copyright">©2025 ScamDetek. All rights reserved.</p>
            <p class="tagline">Protect yourself from online scam.</p>
        </div>

        <div class="chatbot-icon">
            <div class="chat-bubble">💬</div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#0dc5e9" fill-opacity="0.2" />
                <path
                    d="M28 22C28 24.2091 26.2091 26 24 26H16C13.7909 26 12 24.2091 12 22V18C12 15.7909 13.7909 14 16 14H24C26.2091 14 28 15.7909 28 18V22Z"
                    fill="#0dc5e9" />
                <circle cx="16" cy="20" r="1.5" fill="white" />
                <circle cx="20" cy="20" r="1.5" fill="white" />
                <circle cx="24" cy="20" r="1.5" fill="white" />
            </svg>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1920x1080');
    background-size: cover;
    background-position: center;
}

.hero {
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 80px);
}

.hero-title {
    font-size: 60px;
    margin-bottom: 120px;
    text-align: center;
    background: linear-gradient(to right, #0dc5e9, #9ee85b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(13, 197, 233, 0.3);
}

.cards-container {
    display: flex;
    justify-content: center;
    gap: 60px;
    width: 100%;
    cursor: pointer;
}

.card {
    background-color: rgba(20, 20, 20, 0.7);
    border-radius: 20px;
    padding: 30px;
    width: 320px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(70, 70, 70, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(13, 197, 233, 0.2);
}

.card-title {
    font-size: 30px;
    margin-bottom: 20px;
    color: #0dc5e9;
}

.card-desc {
    font-size: 16px;
    line-height: 1.6;
    color: #e0e0e0;
}

.footer {
    text-align: center;
    padding: 20px;
    background-color: rgba(10, 10, 10, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
}

.copyright {
    font-size: 14px;
    color: #888;
    margin-bottom: 5px;
}

.tagline {
    font-size: 12px;
    color: #666;
}

.chatbot-icon {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: rgba(13, 197, 233, 0.2);
    border-radius: 50%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 100;
}

.chat-bubble {
    position: absolute;
    top: -20px;
    right: -10px;
    background-color: #0dc5e9;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .navbar {
        padding: 20px;
        flex-direction: column;
        gap: 20px;
    }

    .menu,
    .social-icons {
        gap: 15px;
    }

    .hero {
        padding: 20px;
        height: auto;
    }

    .hero-title {
        font-size: 36px;
        margin-bottom: 60px;
    }

    .cards-container {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .card {
        width: 90%;
    }
}
</style>
