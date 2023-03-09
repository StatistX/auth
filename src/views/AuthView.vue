<template>
  <v-container>
    <v-row justify="center">
      <v-col>
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
                v-model="password"
                :rules="rules"
                label="password"
              ></v-text-field>
              <p>error: {{ error }}</p>
              <span class="float-right">
                Forgot password?
                <v-tooltip activator="parent" location="bottom"
                  >Later...</v-tooltip
                >
              </span>
            </v-form>
            <v-btn @click="login" rounded="lg" variant="outlined"
              >sign in</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const firstName = ref("");
    const password = ref("");
    const error = ref("");
    const store = useStore();
    const { user } = store.state;
    console.log(user);
    localStorage.setItem("auth", "true");
    const login = async () => {
      try {
        await store.dispatch("logIn", {
          email: firstName,
          password,
        });
      } catch (err) {
        console.log(err.message);
        error.value = err.message;
      }
    };
    return { firstName, password, login };
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
