<template>
  <div class="login">
    <h1>Login Page</h1>

    <div class="login-form">
      <button @click="$router.push('/')">메인으로</button>
      <div>이메일</div>
      <input v-model="loginForm.email" placeholder="email" />
      <div>비밀번호</div>
      <input v-model="loginForm.password" placeholder="email" />
      <button @click="onClickLoginBtn">전송</button>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "login",
});
const router = useRouter();

const loginForm = reactive({
  email: "",
  password: "",
});

const onClickLoginBtn = () => {
  alert("로그인 성공!");
  router.push("/");
};
</script>
<style lang="scss">
@import "@/assets/stylesheets/pages/login";
</style>
