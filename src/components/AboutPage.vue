<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Hero Section -->
      <section
        class="hero"
        style="
          background-image: url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200');
        "
        data-aos="fade-up"
      >
        <div class="hero-overlay">
          <h1>About CarZone</h1>
          <p>
            Discover our passion for delivering exceptional automotive
            experiences.
          </p>
        </div>
      </section>

      <!-- Company History -->
      <section
        class="container history-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>Our Story</h2>
        <div class="content-grid">
          <p>
            Since 2010, CarZone has evolved from a small dealership into a
            trusted leader in the automotive industry, delivering quality
            vehicles and unparalleled service.
          </p>
        </div>
      </section>

      <!-- Mission -->
      <section
        class="container mission-section"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>Our Mission</h2>
        <div class="content-grid">
          <p>
            We empower our customers with top-tier cars and services, ensuring
            every journey is safe, stylish, and satisfying.
          </p>
        </div>
      </section>

      <!-- Team -->
      <section
        class="container team-section"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div class="team-card" data-aos="zoom-in" data-aos-delay="400">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200"
              alt="Alex Carter"
              class="team-image"
            />
            <i class="fas fa-crown team-icon"></i>
            <h3>Alex Carter</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="team-card" data-aos="zoom-in" data-aos-delay="500">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
              alt="Sarah Lee"
              class="team-image"
            />
            <i class="fas fa-headset team-icon"></i>
            <h3>Sarah Lee</h3>
            <p>Sales Manager</p>
          </div>
          <div class="team-card" data-aos="zoom-in" data-aos-delay="600">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200"
              alt="Mike Torres"
              class="team-image"
            />
            <i class="fas fa-wrench team-icon"></i>
            <h3>Mike Torres</h3>
            <p>Service Director</p>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section
        class="container testimonials-section"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <h2>What Our Customers Say</h2>
        <div class="testimonials-grid">
          <div
            class="testimonial-card"
            data-aos="slide-up"
            data-aos-delay="800"
          >
            <i class="fas fa-quote-left testimonial-icon"></i>
            <p>
              "CarZone made buying my dream car so easy! Great service and
              friendly staff."
            </p>
            <h3>Jane Doe</h3>
          </div>
          <div
            class="testimonial-card"
            data-aos="slide-up"
            data-aos-delay="900"
          >
            <i class="fas fa-quote-left testimonial-icon"></i>
            <p>
              "The team at CarZone is top-notch. They went above and beyond to
              help me."
            </p>
            <h3>John Smith</h3>
          </div>
          <div
            class="testimonial-card"
            data-aos="slide-up"
            data-aos-delay="1000"
          >
            <i class="fas fa-quote-left testimonial-icon"></i>
            <p>"Best dealership experience ever! Highly recommend CarZone."</p>
            <h3>Emily Brown</h3>
          </div>
        </div>
      </section>

      <!-- CTA Button -->
      <section
        class="container cta-section"
        data-aos="fade-up"
        data-aos-delay="1100"
      >
        <router-link to="/contact" class="cta-button">
          Contact Us Today
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

.history-section,
.mission-section,
.testimonials-section,
.cta-section {
  padding: 3rem 0;
}

.content-grid {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.team-section {
  padding: 3rem 0;
}

.team-image {
  width: clamp(120px, 15vw, 150px);
  height: clamp(120px, 15vw, 150px);
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 3px solid #3b82f6;
}

.team-icon,
.testimonial-icon,
.cta-icon {
  font-size: 1.5rem;
  color: #3b82f6;
  margin: 0.5rem auto;
  display: block;
  transition: transform 0.3s;
}

.team-icon:hover,
.testimonial-icon:hover,
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

  .team-image {
    width: 120px;
    height: 120px;
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

  .team-icon,
  .testimonial-icon {
    font-size: 1.2rem;
  }
}
</style>
