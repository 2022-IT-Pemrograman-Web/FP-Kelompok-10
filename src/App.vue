<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/index">Index</router-link> |
    <router-link to="/daftar-ternak">Daftar Ternak</router-link> |
    <router-link to="/hewan-baru">Hewan Baru</router-link> |
    <router-link to="/pengobatan">Pengobatan</router-link> |
    <router-link to="/prestasi">Prestasi</router-link> |
    <router-link to="/tanggal">Tanggal</router-link> |
    <router-link to="/transaksi">Transaksi</router-link> |
  </nav> -->
  <div id="nav" v-if="$store.state.user">
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
