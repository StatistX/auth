<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

#app {
  margin-block-start: 10px;
}
</style>
