<template>
  <main id="panel">
    <Header />
    <stacking />
    <Footer />
  </main>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stacking from '~/components/Stacking.vue';
export default {
  components: {
    Footer,
    Header,
    Stacking
  },
};
</script>

<style>

</style>
