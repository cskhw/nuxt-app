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
<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  .login-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    flex-direction: column;
    width: 300px;
    input {
      padding: 8px 12px;

      height: 32px;

      border: 2px solid gray;
      border-radius: 8px;
      outline: none;
      &:hover {
        outline: 1px solid blue;
      }
    }
  }
}
</style>
