<script>
import "bootstrap/dist/css/bootstrap.min.css";
import * as emailjs from 'emailjs-com';
import navigationbuttons from '@/components/navbuttons.vue';
import '@/assets/global.css';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showConfirmation: false,
    }
  },
  methods: {
    async sendEmail(e) {
      try {
        await emailjs.sendForm(
          'contact_service', 
          'contact_template', 
          e.target,
          'x15gAetF1SfxBhF7x', {
          name: this.name,
          email: this.email,
          message: this.message
        })

        this.showConfirmation = true;
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
  components: {
    navigationbuttons,
  }
}
</script>

<template>
  <div class="contentpage">
    <div class="hubbox"><navigationbuttons />
      <div class = "contactform">
        <div class="holler"><h2>Contact Us</h2></div>
        <p class="talk">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form @submit.prevent="sendEmail">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" class="namefield" required>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" class="emailfield" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="8" class="messagefield" required></textarea>

            <div class="form-actions">
              <div><button type="submit">Submit</button></div>
              <div v-if="showConfirmation" class="confirmation-message">
                <p class="confirmation-text">Message received.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<style>
@font-face {
  font-family: "metalblockultra";
  src: url("@/assets/fonts/metalblockultra/MetalBlockUltra.ttf") format("TrueType");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "millennium_2";
  src: url("@/assets/fonts/millennium_2/Millennium-Regular-0.ttf") format("TrueType");
  font-weight: normal;
  font-style: normal;
}
.talk {
  text-align: center;
  margin-bottom: 30px;
  border-radius: 8px;
  font-size: 10px;
  color:#000000;
}
.holler {
  margin-top: 0;
  padding-top: 0;
}
.holler h2 {
  margin-top: 0;
  padding-top: 0;
  font-family: "metalblockultra", sans-serif;
  color: #a2a2a2de;
  font-size: 60px !important;
}
.contactform {
  width: 500px;          
  height: 400px;          
  background-color: #e3e3e3;
  border-style: 7px ridge rgb(231, 231, 231);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px 20px 20px;
  position: relative;
  margin: auto;
}
.namefield {
  height: 20px;
}
.emailfield {
  height: 20px;
}
.messagefield {
  height: 100px;
}
.contactform form {
  width: 100%;
  max-width: 500px;
  display: grid;
  align-items: left;
  margin: -20px -30px 40px 40px;
}
.contactform .form-group {
  width: 100%; 
  margin-bottom: 15px; 
}
.contactform .form-group label {
  align-self: flex-start; 
  margin-bottom: 5px; 
}
.contactform label {
  font-size: 12px;
  color:#000000
}
.contactform input,
.contactform textarea {
  width: 80%;
  text-align: left;
  font-size: 10px;
  color: #000000
}
.contactform input:focus,
.contactform textarea:focus {
  width: 80%;
  background-color: #e9dcc2;
}
.contactform button {
  margin: 5px 5px 5px 0px;
  height: 20px;
  width: 50px;
  font-size: 8px;
  color: #000000;
}
.contactform button:hover {
  background-color: #c1c1c1;
}
.contactform .form-actions {
  display: flex;
  align-items: center;
  gap: 1px;
}
.contactform .confirmation-message {
  margin-top: 6px;
  padding: 2px 2px 2px 20px;
  height: 20px;
  width: 120px;
  background-color: #61af67;
  color: #ffffff;
}
.confirmation-text {
  color: white;
  font-size: 9px;
  margin-bottom: 6px;
}
</style>