<template>
  <b-form @submit.prevent="$emit('login')">

    <b-form-group
      label="Email"
      description="Los datos son privados"
    >
    <b-form-input
      type="email"
      name="email"
      autocomplete="off"
      v-model="user.email"
      v-validate="'required|email'"
      :state="validateState('email')"
      placeholder="admin@vue.com"
    >
    </b-form-input>
    <b-form-invalid-feedback>
      {{errors.first('email')}}
    </b-form-invalid-feedback>
    </b-form-group>

        <b-form-group
      label="Password"
    >
    <b-form-input
      type="password"
      name="password"     
      autocomplete="off"
      v-model="user.password"
      v-validate="'required|min:6|strength_password'"
      :state="validateState('password')"
      placeholder="@Password1"
    >
    </b-form-input>
    <b-form-invalid-feedback>
      {{errors.first('password')}}
    </b-form-invalid-feedback>
    </b-form-group>

    <b-button
      :disabled="errors.any() || !user.password"
      type="submit"
      variant="primary"
    >Iniciar sesión
    </b-button>

  </b-form>
</template>
