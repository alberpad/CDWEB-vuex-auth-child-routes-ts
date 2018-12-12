<template>
  <div>
    <h3 class="text-center text-muted mt-4">Iniciar Sesión</h3>
    <b-alert v-if="error" show variant="danger">{{errorMessage}}</b-alert>
    <login-form :user="user" @login="processLoginSubmit"></login-form>
  </div>
</template>
