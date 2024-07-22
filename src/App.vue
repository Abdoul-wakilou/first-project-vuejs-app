
<template>
 <router-view />
  <!-- <Navbar></Navbar>
  <Body></Body>
  <Footer></Footer> -->
</template>

<script>
/* import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue' */

export default {
  name : 'App',
  //components : {
    //Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    //Body,
    // eslint-disable-next-line vue/no-reserved-component-names
    //Footer,
  //}

}
</script>

<style scoped>
/* Fonts */
:root {
  --font-default: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-primary: "Montserrat", sans-serif;
  --font-secondary: "Poppins", sans-serif;
}

/* Colors */
:root {
  --color-default: #222222;
  --color-primary: #008374;
  --color-secondary: #f85a40;
}

/* Smooth scroll behavior */
:root {
  scroll-behavior: smooth;
}

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: var(--font-default);
  color: var(--color-default);
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  color: #00b6a1;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-primary);
}

/*--------------------------------------------------------------
# Sections & Section Header
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.sections-bg {
  background-color: #f6f6f6;
}

.section-header {
  text-align: center;
  padding-bottom: 60px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-header h2:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--color-primary);
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.section-header p {
  margin-bottom: 0;
  color: #6f6f6f;
}
.header .search-bar {
  min-width: 360px;
  padding: 0 20px;
}

@media (max-width: 1199px) {
  .header .search-bar {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    padding: 20px;
    box-shadow: 0px 0px 15px 0px rgba(1, 41, 112, 0.1);
    background: white;
    z-index: 9999;
    transition: 0.3s;
    visibility: hidden;
    opacity: 0;
  }

  .header .search-bar-show {
    top: 60px;
    visibility: visible;
    opacity: 1;
  }
}

.header .search-form {
  width: 100%;
}

.header .search-form input {
  border: 0;
  font-size: 14px;
  color: #012970;
  border: 1px solid rgba(1, 41, 112, 0.2);
  padding: 7px 38px 7px 8px;
  border-radius: 3px;
  transition: 0.3s;
  width: 100%;
}

.header .search-form input:focus,
.header .search-form input:hover {
  outline: none;
  box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
  border: 1px solid rgba(1, 41, 112, 0.3);
}

.header .search-form button {
  border: 0;
  padding: 0;
  margin-left: -30px;
  background: none;
}

.header .search-form button i {
  color: #012970;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs .page-header {
  padding: 60px 0 60px 0;
  min-height: 20vh;
  position: relative;
  background-color: var(--color-primary);
}

.breadcrumbs .page-header h2 {
  font-size: 56px;
  font-weight: 500;
  color: #fff;
  font-family: var(--font-secondary);
}

.breadcrumbs .page-header p {
  color: rgba(255, 255, 255, 0.8);
}

.breadcrumbs nav {
  background-color: #f6f6f6;
  padding: 20px 0;
}

.breadcrumbs nav ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-default);
}

.breadcrumbs nav ol a {
  color: var(--color-primary);
  transition: 0.3s;
}

.breadcrumbs nav ol a:hover {
  text-decoration: underline;
}

.breadcrumbs nav ol li+li {
  padding-left: 10px;
}

.breadcrumbs nav ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: var(--color-secondary);
  content: "/";
}

/*--------------------------------------------------------------
# Scroll top button
--------------------------------------------------------------*/
.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: -15px;
  z-index: 99999;
  background: var(--color-secondary);
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.scroll-top:hover {
  background: rgba(248, 90, 64, 0.8);
  color: #fff;
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
  bottom: 15px;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  overflow: hidden;
  background: #fff;
  transition: all 0.6s ease-out;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #fff;
  border-color: var(--color-primary) transparent var(--color-primary) transparent;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1.5s linear infinite;
  animation: animate-preloader 1.5s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}
</style>
