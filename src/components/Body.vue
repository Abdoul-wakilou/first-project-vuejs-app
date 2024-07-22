<template>

<!-- ======= Hero Section ======= -->
  <section id="hero" class="hero">
    <div class="container position-relative">
      <div class="row gy-5" data-aos="fade-in">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2><span>Tester vos algorithmes de maching learning !</span></h2>
          <p>Compétir avec les professionnels de votre passion.</p>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <!-- <a href="/inscription" class="btn-get-started">Commencer</a> -->
            <router-link to="/inscription" class="btn-get-started">Commencer</router-link>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <img src="../assets/img/hero-img.svg" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
        </div>
      </div>
    </div>

    <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-easel"></i></div>
              <h4 class="title"><router-link to="/apprentissage" class="stretched-link">Apprentissage</router-link></h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-gem"></i></div>
              <h4 class="title"><router-link to="/competition" class="stretched-link">Compétitions</router-link></h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-geo-alt"></i></div>
              <h4 class="title"><router-link to="/datasets" class="stretched-link">Datasets</router-link></h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-command"></i></div>
              <h4 class="title"><router-link to="/models" class="stretched-link">Modèles</router-link></h4>
            </div>
          </div>
          <!--End Icon Box -->

        </div>
      </div>
    </div>
    
  </section>
  <!-- End Hero Section -->
</template>

<script>
export default {
    name : 'Body',
}
</script>

<style scoped>
/*------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  position: relative;
  background: var(--color-primary);
  padding: 60px 0 0 0;
}

@media (min-width: 1365px) {
  .hero {
    background-attachment: fixed;
  }
}

.hero h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}

.hero p {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  margin-bottom: 30px;
}

.hero .btn-get-started {
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 40px;
  border-radius: 50px;
  transition: 0.3s;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.hero .btn-get-started:hover {
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .hero h2 {
    font-size: 36px;
  }

  .hero .btn-get-started{
    font-size: 14px;
  }
}

.hero .icon-boxes {
  padding-bottom: 60px;
}

@media (min-width: 1200px) {
  .hero .icon-boxes:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(50% + 20px);
    background-color: #fff;
  }
}

.hero .icon-box {
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  background: #008d7d;
  box-shadow: 0 0 29px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  height: 100%;
  width: 100%;
  text-align: center;
}

.hero .icon-box .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.hero .icon-box .title a {
  color: #fff;
  transition: 0.3s;
}

.hero .icon-box .icon {
  margin-bottom: 20px;
  padding-top: 10px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  font-size: 48px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.6);
}

.hero .icon-box:hover {
  background: #009786;
}

.hero .icon-box:hover .title a,
.hero .icon-box:hover .icon {
  color: #fff;
}
</style>