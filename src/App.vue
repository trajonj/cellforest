<template>
  <div class="backhome">
    <router-link to="/">
      <img class="rotate-3d" src="./assets/images/rhurbo_logo_b.png" alt="Back to Home" width="50" height="50" />
    </router-link>
  </div>
</template>
  

<script>
/*import { RouterLink, RouterView } from 'vue-router'*/
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  setup() {
    const user = useLoggedInUserStore();
    return { user };
  },
};
</script>


<style scoped>
html, body {
  background-color: #1b1b1b;
  }
body {
  color: #d4d4d4de;
  font-size: 14px;
      /* Replace #333333 with your desired font color */
}
h1, h2, h3 {
  color: #d4d4d4de;
  font-size: 17px;
      /* Replace #333333 with your desired font color */
}
a {
  text-decoration: none;
}
.nav-link {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}

.dropdown-toggle {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}

.dropdown-item {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}
.dropdown-menu {
  background-color: #212529;
  width: auto !important;
  min-width: 100% !important;
}

.dropdown-menu:hover {
  background-color: #212529;
}
.navbar {
  height: 70px;
}
.navbar-brand {
  flex: 1; /* Expand to fill available space */
  display: flex;
  justify-content: center; /* Align the logo to the left */
  align-items: center; /* Center the content vertically */
  margin-right: 150px;
}
/* Add perspective for a 3D effect */
.backhome {
  perspective: 500px;
}

/* Define the 3D spin animation */
@keyframes spin3D {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

/* Apply animation on hover */
.rotate-3d:hover {
  animation: spin3D 3s linear infinite;
  transform-style: preserve-3d;
}
</style>
