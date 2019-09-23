<template lang="html">
    <section class="navigation">
        <h1>navigation Component</h1>


        <div id="nav">
            <router-link :to="{name: 'home'}">Home</router-link>
            |
            <router-link :to="{name: 'cart-summary'}">Cart</router-link>
            |
            <router-link :to="{name: 'checkout'}">Checkout</router-link>
            |
            <router-link :to="{name: 'wishlist-listing'}">Wishlist</router-link>
            |
            <router-link :to="{name: 'about'}">About</router-link>
            |
            <router-link :to="{name: 'contact-page'}">Contact</router-link>
        </div>
        <router-view/>
    </section>
</template>

<script>
  export default {
    name: 'navigation',
    props: [],
    mounted() {

    },
    data() {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style>
</style>
