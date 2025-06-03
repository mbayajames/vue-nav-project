<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Hero Section -->
      <section
        class="hero"
        style="
          background-image: url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200');
        "
        data-aos="fade-up"
      >
        <div class="hero-overlay">
          <h1>Our Gallery</h1>
          <p>Explore our stunning collection of vehicles.</p>
        </div>
      </section>

      <!-- Gallery -->
      <section
        class="container gallery-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>Vehicle Showcase</h2>
        <div class="gallery-grid">
          <div
            class="gallery-card"
            v-for="(image, index) in images"
            :key="index"
            @click="openModal(index)"
            data-aos="zoom-in"
            :data-aos-delay="200 + index * 100"
          >
            <img :src="image.src" :alt="image.alt" class="gallery-image" />
            <i class="fas fa-search-plus gallery-icon"></i>
          </div>
        </div>
      </section>

      <!-- Modal -->
      <div class="modal" v-if="showModal" @click="closeModal">
        <div class="modal-content">
          <img
            :src="images[currentImage].src"
            :alt="images[currentImage].alt"
            class="modal-image"
          />
          <button class="close-button" @click="closeModal">×</button>
        </div>
      </div>

      <!-- CTA -->
      <section
        class="container cta-section"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <router-link to="/contact" class="cta-button">
          Inquire Now
          <i class="fas fa-arrow-right cta-icon"></i>
        </router-link>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p>© 2025 CarZone. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const images = ref([
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600",
    alt: "Car 1",
  },
  {
    src: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?auto=format&fit=crop&w=600",
    alt: "Car 2",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600",
    alt: "Car 3",
  },
]);

const showModal = ref(false);
const currentImage = ref(0);

const openModal = (index) => {
  currentImage.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.content {
  width: 100%;
  max-width: 1200px;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.hero-overlay {
  text-align: center;
}

.hero-overlay h1 {
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: white;
  margin-bottom: 1.8rem;
}

.hero-overlay p {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: white;
}

h2 {
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #1e3a8a;
  text-align: center;
  margin: 3.5rem 0;
}

h2::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #3b82f6;
  margin: 0.5rem auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.gallery-section,
.cta-section {
  padding: 3rem 0;
}

.gallery-card {
  position: relative;
  cursor: pointer;
}

.gallery-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #3b82f6;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.gallery-card:hover .gallery-icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

.cta-icon {
  font-size: 1.5rem;
  color: white;
  transition: transform 0.3s;
}

.cta-icon:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .page-wrapper {
    justify-content: flex-start;
    padding: 1rem 0;
  }

  .hero {
    min-height: 300px;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-overlay h1 {
    font-size: 1.8rem;
  }

  .hero-overlay p {
    font-size: 0.9rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .gallery-icon {
    font-size: 1.5rem;
  }
}
</style>
