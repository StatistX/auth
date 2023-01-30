<template>
  <div class="auth-form">
    <h2 class="auth-form__header">Auth</h2>
    <div class="auth-form__content">
      <div class="auth-form__heading">
        <span>Enter</span>
        <span>Register</span>
      </div>
      <div>
        <input type="text" name="" id="" />
      </div>
      <div>
        <input type="password" name="" id="" />
      </div>
      <button>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.auth-form {
  margin: 0 auto;
  max-width: 300px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.auth-form__header {
  text-align: center;
}
.auth-form__heading {
  display: flex;
  justify-content: space-between;
}
</style>
