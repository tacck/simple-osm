<template>
  <div id="app">
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
  grid-template-rows: 1fr;
  grid-auto-rows: minmax(80px, auto);
}
</style>
