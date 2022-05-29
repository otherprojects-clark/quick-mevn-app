<script setup>
import Input from './components/Input.vue'
</script>

<template>
  <div class="main">
    <div class="form">
      <h2>Let's store some names :)</h2>
      <div class="enter">Enter your name and age:</div>
      <Input />      
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

* {
  font-family: Arimo;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
 display: flex;
 flex-direction: column;
 gap: 10px;
}

</style>