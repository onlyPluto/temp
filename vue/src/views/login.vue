<script setup>
import { ref } from "vue"
const username = ref("")
const password = ref("")
const login = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  }
  const result = await fetch("http://127.0.0.1:7001/api/user/login", options)
  console.log(result)
}
</script>

<template>
  <div class="login">
    <a-input v-model:value="username" placeholder="用户名" />
    <a-input-password v-model:value="password" placeholder="登录密码" />
    <a-button type="primary" @click="login">登录</a-button>
  </div>
</template>

<style>
.login {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
