<template>
  <div class="contentpage">
    <form @submit.prevent="submitForm">
        <h2>Commission Options:</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar condimentum varius. Curabitur euismod tempor purus eget imperdiet. 
          Integer feugiat magna suscipit eros varius volutpat. Etiam dapibus nisl id erat lobortis convallis. 
          Suspendisse scelerisque ultricies sodales. Aenean at fringilla nunc. Ut eu dictum massa. 
          Nulla vehicula, enim id consequat scelerisque, diam urna aliquet urna, nec efficitur urna mi in tellus.</p>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" v-model="message" required></textarea>
  
        <button type="submit">Submit</button>
      </form>
      </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
     axios.post('/send', formData)
        .then((response) => {
          console.log(response.data);
          console.log("Form submission successful, YAY!")
        })
        .catch((error) => {
          console.error('Something happened :(', error);
          console.log('Oh noooo, try again later.');
      });
    },
  }
};
</script>
  
<style>
  html, body {
    background-color: #1b1b1b;
  }
  
  body {
      color: #d4d4d4de;
      font-size: 14px;
    }
  h1, h2, h3 {
      color: #d4d4d4de;
      font-size: 17px;
    }
  .contentpage {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50vh;
    }

  .form-container {
      width: 640px;
      height: 1435px;
    }
  
  label {
      font-family: 'Courier New', Courier, monospace;
      font-size: 16px;
  }

  form {
      width: 500px;
      padding-bottom: 50px;
      padding-top: 25px;
    }

    input[type="text"],
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
    }

    input[type="submit"] {
      width: auto;
      background-color: #FFFFFF;
      color: #000000;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4%;
      margin-top: 10px;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
    }

    input[type="submit"]:hover {
      background-color: #a1a1a1;
    }

</style>