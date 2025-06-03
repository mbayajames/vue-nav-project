<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Hero Section -->
      <section
        class="hero"
        style="
          background-image: url('https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200');
        "
        data-aos="fade-up"
      >
        <div class="hero-overlay">
          <h1>Our Services</h1>
          <p>Comprehensive automotive solutions tailored for you.</p>
        </div>
      </section>

      <!-- Services -->
      <section
        class="container services-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>Our Offerings</h2>
        <div class="service-grid">
          <div class="service-card" data-aos="zoom-in" data-aos-delay="200">
            <i class="fas fa-car service-icon"></i>
            <h3>Car Sales</h3>
            <p>Wide range of new and used vehicles.</p>
          </div>
          <div class="service-card" data-aos="zoom-in" data-aos-delay="300">
            <i class="fas fa-tools service-icon"></i>
            <h3>Maintenance</h3>
            <p>Expert repair and servicing.</p>
          </div>
          <div class="service-card" data-aos="zoom-in" data-aos-delay="400">
            <i class="fas fa-paint-roller service-icon"></i>
            <h3>Customization</h3>
            <p>Personalize your vehicle.</p>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section
        class="container pricing-section"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2>Pricing Plans</h2>
        <div class="pricing-table">
          <div class="pricing-card" data-aos="slide-up" data-aos-delay="600">
            <h3>Basic</h3>
            <p>$99/month</p>
          </div>
          <div class="pricing-card" data-aos="slide-up" data-aos-delay="700">
            <h3>Standard</h3>
            <p>$199/month</p>
          </div>
          <div class="pricing-card" data-aos="slide-up" data-aos-delay="800">
            <h3>Premium</h3>
            <p>$299/month</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section
        class="container cta-section"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <router-link to="/contact" class="cta-button">
          Get a Quote
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
import { RouterLink } from "vue-router";
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

h3 {
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  color: #1e3a8a;
  text-align: center;
}

p {
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #0a0a0a;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.services-section,
.pricing-section,
.cta-section {
  padding: 3rem 0;
}

.service-icon,
.cta-icon {
  font-size: 2rem;
  color: #3b82f6;
  margin-bottom: 1rem;
  display: block;
  transition: transform 0.3s;
}

.service-icon:hover,
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

  h3 {
    font-size: 1.4rem;
  }

  .service-icon {
    font-size: 1.5rem;
  }
}
</style>
