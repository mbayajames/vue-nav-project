<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">CarZone</router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/gallery" class="nav-link">Gallery</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="menu-toggle"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <svg
            class="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="container">
          <router-link to="/" class="mobile-link" @click="toggleMenu"
            >Home</router-link
          >
          <router-link to="/about" class="mobile-link" @click="toggleMenu"
            >About</router-link
          >
          <router-link to="/services" class="mobile-link" @click="toggleMenu"
            >Services</router-link
          >
          <router-link to="/gallery" class="mobile-link" @click="toggleMenu"
            >Gallery</router-link
          >
          <router-link to="/contact" class="mobile-link" @click="toggleMenu"
            >Contact</router-link
          >
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.navbar {
  background-color: #1f2937;
  color: white;
  padding: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.logo a:hover {
  color: #3b82f6;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
}

.nav-link {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -5px;
  left: 0;
  background-color: #3b82f6;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.menu-icon {
  width: 2rem;
  height: 2rem;
}

.mobile-menu {
  background-color: #1f2937;
  padding: 1.5rem 0;
  text-align: center;
}

.mobile-link {
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  padding: 1rem 0;
  transition: color 0.3s;
}

.mobile-link:hover {
  color: #3b82f6;
}

.content {
  padding: 2.5rem 1rem;
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    display: block;
  }

  .content {
    padding: 1.5rem;
  }
}
</style>
