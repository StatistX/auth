<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div class="register-form mt-4">
          <h2 class="register-form__header">Register</h2>
          <div class="register-form__content">
            <div class="register-form__heading my-4">
              <span><router-link to="/auth">Enter</router-link></span>
            </div>
            <v-form @submit.prevent>
              <v-text-field
                v-model="firstName"
                label="e-mail"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                label="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                v-model="userName"
                type="text"
                label="name"
              ></v-text-field>
              <p v-if="error" class="text-red-lighten-1">{{ error }}</p>
            </v-form>
            <v-btn
              @click="register"
              rounded="lg"
              variant="outlined"
              :disabled="!disableAuthBtn"
              >sign up</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { emailPattern } from "../utils";
import { useRouter } from "vue-router";
export default {
  setup() {
    const firstName = ref("");
    const password = ref("");
    const userName = ref("");
    const error = ref("");
    const store = useStore();
    const router = useRouter();
    const emailRules = [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 20 || "Max 20 characters",
      (value) => {
        return emailPattern.test(value) || "Invalid e-mail.";
      },
    ];
    const passwordRules = [
      (value) => !!value || "Required.",
      (value) => value.length >= 6 || "Min 6 characters",
    ];
    // localStorage.setItem("auth", "true");
    const register = async () => {
      try {
        await store.dispatch("register", {
          email: firstName.value,
          password: password.value,
          name: userName.value,
        });
        router.push("/");
      } catch (err) {
        console.dir(err.message);
        error.value = err.message;
      }
    };

    const disableAuthBtn = computed(() => {
      return (
        firstName.value &&
        emailPattern.test(firstName.value) &&
        !(password.value.length < 6)
      );
    });

    return {
      firstName,
      password,
      error,
      userName,
      emailRules,
      disableAuthBtn,
      passwordRules,
      register,
    };
  },
};
</script>

<style scoped lang="scss">
.register-form {
  margin: 0 auto;
  max-width: 320px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.register-form__header {
  text-align: center;
}
.register-form__heading {
  display: flex;
  justify-content: space-between;
}
</style>
