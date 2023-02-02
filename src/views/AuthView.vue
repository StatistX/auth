<template>
  <div class="auth-form mt-4">
    <h2 class="auth-form__header">Auth</h2>
    <div class="auth-form__content">
      <div class="auth-form__heading my-4">
        <span>Enter</span>
        <span>Register</span>
      </div>
      <v-form @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="e-mail"
        ></v-text-field>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="password"
        ></v-text-field>
        <span class="float-right">
          Forgot password?
          <v-tooltip activator="parent" location="bottom"
            >Очень жаль...</v-tooltip
          >
        </span>
      </v-form>
      <v-btn rounded="lg" variant="outlined">sign in</v-btn>
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
  max-width: 320px;
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
