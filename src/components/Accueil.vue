

<template>
    <Navbar></Navbar>
    <Body></Body>
    <Footer></Footer>
</template>

<script>
import Navbar from './Navbar.vue'
import Body from './Body.vue'
import Footer from './Footer.vue'

export default {
    name : 'Accueil',
    components: {
        Navbar,
        // eslint-disable-next-line vue/no-reserved-component-names
        Body,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer,
    }
}
</script>


<style scoped>

</style>