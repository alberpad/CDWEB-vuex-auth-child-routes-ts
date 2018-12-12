<template>
  <b-nav tabs>
    <b-nav-item exact to="/secret">Página secreta</b-nav-item>
    <b-nav-item exact to="/secret/notes">Notas secretas</b-nav-item>
    <b-nav-item @click="_logout">Cerrar sesión</b-nav-item>
  </b-nav>
</template>