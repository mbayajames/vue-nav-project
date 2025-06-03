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
          <h1>Contact Us</h1>
          <p>Get in touch for inquiries or to visit our showroom!</p>
        </div>
      </section>

      <!-- Contact Form -->
      <section
        class="container contact-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>Send Us a Message</h2>
        <form
          class="contact-form"
          @submit.prevent="handleContactSubmit"
          data-aos="slide-up"
          data-aos-delay="200"
        >
          <div class="form-group">
            <label for="name"
              ><i class="fas fa-user contact-icon"></i> Name</label
            >
            <input type="text" id="name" v-model="contactForm.name" required />
          </div>
          <div class="form-group">
            <label for="email"
              ><i class="fas fa-envelope contact-icon"></i> Email</label
            >
            <input
              type="email"
              id="email"
              v-model="contactForm.email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message"
              ><i class="fas fa-comment contact-icon"></i> Message</label
            >
            <textarea
              id="message"
              v-model="contactForm.message"
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button">
            Send Message
            <i class="fas fa-paper-plane cta-icon"></i>
          </button>
        </form>
      </section>

      <!-- Contact Info -->
      <section
        class="container contact-info-section"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2>Contact Information</h2>
        <div class="contact-info-grid">
          <div
            class="contact-info-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p>
              <i class="fas fa-envelope contact-icon"></i>
              Email: info@carzone.com
            </p>
          </div>
          <div
            class="contact-info-card"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <p>
              <i class="fas fa-phone contact-icon"></i>
              Phone: (123) 456-7890
            </p>
          </div>
          <div
            class="contact-info-card"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <p>
              <i class="fas fa-map-marker-alt contact-icon"></i>
              Address: 123 Car Street, Auto City, CA 12345
            </p>
          </div>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section
        class="container newsletter-section"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <h2>Subscribe to Our Newsletter</h2>
        <form
          class="newsletter-form"
          @submit.prevent="handleNewsletterSubmit"
          data-aos="slide-up"
          data-aos-delay="800"
        >
          <div class="form-group">
            <label for="newsletter-email"
              ><i class="fas fa-envelope contact-icon"></i> Email</label
            >
            <input
              type="email"
              id="newsletter-email"
              v-model="newsletterForm.email"
              required
            />
          </div>
          <button type="submit" class="submit-button">
            Subscribe
            <i class="fas fa-paper-plane cta-icon"></i>
          </button>
        </form>
      </section>

      <!-- Social Media Links -->
      <div class="social-links" data-aos="fade-up" data-aos-delay="900">
        <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
      </div>

      <!-- Map Placeholder -->
      <div class="map-card" data-aos="fade-up" data-aos-delay="1000">
        <h2>Find Us</h2>
        <p>Visit our showroom at 123 Car Street. [Map placeholder]</p>
      </div>

      <!-- Footer -->
      <footer class="footer">
        <p>© 2025 CarZone. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contactForm = ref({
  name: "",
  email: "",
  message: "",
});

const newsletterForm = ref({
  email: "",
});

const handleContactSubmit = () => {
  console.log("Contact Form submitted:", contactForm.value);
  alert("Message sent! (Check console for form data)");
  contactForm.value = { name: "", email: "", message: "" };
};

const handleNewsletterSubmit = () => {
  console.log("Newsletter subscribed:", newsletterForm.value);
  alert("Subscribed to newsletter! (Check console for form data)");
  newsletterForm.value = { email: "" };
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

.contact-section,
.contact-info-section,
.newsletter-section {
  padding: 3rem 0;
}

.contact-icon,
.cta-icon {
  font-size: 1.5rem;
  color: #3b82f6;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

.contact-icon:hover,
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

  .contact-form,
  .newsletter-form {
    padding: 1.5rem;
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

  .contact-icon,
  .cta-icon {
    font-size: 1.2rem;
  }
}
</style>
