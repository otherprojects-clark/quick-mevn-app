<script setup>
import Input from '../components/Input.vue'
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