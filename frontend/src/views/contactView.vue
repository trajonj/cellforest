<script>
import "bootstrap/dist/css/bootstrap.min.css";
import * as emailjs from 'emailjs-com';
import navigationbuttons from '@/components/navbuttons.vue';

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
        <div class="talk"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
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
html, body {
  height: 100%;  /* Ensures full height */
  margin: 0;
  padding: 0;
  background: url("@/assets/images/tony-stoddard-DgZxBnZeQo8-unsplash.jpg") no-repeat center center fixed;
  background-size: cover; /* Ensures the image fills the entire screen */
}
/* p {
  font-family: "millennium_2";
  color: #1b1b1b;
  font-size: 14px !important;
  text-align: left;
} */
.contentpage {
  width: 100vw;             /* Takes full width of the parent container */
  height: 70vh;           /* Full viewport height */
  display: flex;           /* Enable flexbox */
  justify-content: center; /* Center .hubbox horizontally */
  align-items: center;     /* Center .hubbox vertically */
}
.hubbox {
  width: 700px;          
  height: 500px;          
  background-color: rgba(0, 0, 0, 0.5);
  border-style: ridge;
  border-width: 7px;
  border-color: rgb(231, 231, 231);
  border-radius: 4px;
  /*outline: 4px solid black;*/
  box-sizing: border-box;
  position: relative;
  display: flex;

  padding: 5px 5px 5px;
  margin: 50px 50px 50px;
}
.talk {
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
  font-family: "millennium_2";
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
  border-style: ridge;
  border-width: 7px;
  border-color: rgb(231, 231, 231);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px 20px 20px;
  margin: 50px 50px 50px;
  position: relative;
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
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.contactform .form-group {
  /* display: flex;
  flex-direction: column;
  align-items: center;  */
  width: 100%; 
  margin-bottom: 15px; 
}

.contactform .form-group label {
  align-self: flex-start; 
  margin-bottom: 5px; 
}
.contactform label {
  font-family: millenium_2;
  font-size: 12px;
}

.contactform input,
.contactform textarea {
  width: 80%;
  text-align: left;
  font-size: 10px;
}
.contactform input:focus,
.contactform textarea:focus {
  width: 80%;
  background-color: #e9dcc2;
}
.contactform button {
  height: 20px;
  width: 50px;
  font-size: 8px;
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


    /* .form-container {
        width: 640px;
        height: 1435px;
        margin-top: 10px;
      } */
    
    /* label {
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
    } */

    /* form {
        width: 500px;
        padding-bottom: 50px;
        padding-top: 25px;
      } */

    /* input[type="text"],
    input[type="email"],
    textarea {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      padding: 10px;
      border: 2px solid #474747;
      background-color: #212121;
      color: #FFFFFF;
      border-radius: 2%;
      color: #FFFFFF;
    } */
    
    /* .confirmation-message {
    margin-top: 10px;
    padding: 10px;
    background-color: #61af67;
    color: #ffffff;
    border-radius: 4px;
    text-align: center;
    width: 500px;
    height: 30;
    } */

    /* button[type="submit"] {
    background-color: #e4e4e4;
    color: #000000;
    border: none;
    padding: 2px 4px;
    cursor: pointer;
    font-family: SimSun-ExtB;
    font-size: 14px;
    margin-top: 10px;
    } */

    /* button[type="submit"]:hover {
      background-color: #c1c1c1;
    } */

</style>