<template>
  <div>
    <header>
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: '',
    };
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
