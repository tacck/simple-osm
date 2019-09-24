<template>
  <div id="app">
    <header>OSM</header>
    <router-view/>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-auto-rows: minmax(80px, auto);
}

header {
  background-color: black;
}
</style>
