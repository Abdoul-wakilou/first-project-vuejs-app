<template>

    <main>
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                        <div class="d-flex justify-content-center py-4">
                            <router-link to="/" class="logo d-flex align-items-center w-auto">
                                <img src="../assets/img/logo.png" alt="">
                                <span class="d-none d-lg-block">MLContest</span>
                            </router-link>
                        </div><!-- End Logo -->

                        <div class="card mb-3">

                            <div class="card-body">

                            <div class="pt-4 pb-2">
                                <h5 class="card-title text-center pb-0 fs-4">Se connecter</h5>
                                <p class="text-center small">Entrez vos informations pour vous connecter</p>
                            </div>

                            <form class="row g-3 needs-validation" action="" method="post">

                                <div class="col-12">
                                <label for="yourUsername" class="form-label">Nom d'utilisateur</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" name="username" class="form-control" id="yourUsername" required>
                                    <div class="invalid-feedback">Entrez votre nom d'utilisateur.</div>
                                </div>
                                </div>

                                <div class="col-12">
                                    <label for="yourPassword" class="form-label">Mot de passe</label>
                                    <input type="password" name="password" class="form-control" id="yourPassword" required>
                                    <div class="invalid-feedback">Entrez votre mot de passe!</div>
                                </div>

                                <div class="col-12">
                                <div class="form-check my-2">
                                    <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                    <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
                                </div>
                                </div>
                                <div class="col-12">
                                <button class="btn  w-100" style="background-color: rgba(0, 131, 116, 0.8); color: white;" type="submit">Se connecter</button>
                                </div>
                                <div class="col-12 row mt-2">
                                    <div class="col-6 small mb-0">Pas de compte ? <router-link to="/inscription">Créer un compte</router-link></div>
                                <div class="col-6 small mb-0">Mot de passe oublié ? <router-link to="/mot-de-passe-oublie">Réinitialiser votre mot de passe</router-link></div>
                                </div>
                            </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        </div>
    </main><!-- End #main -->
</template>

<script>


export default {
    name: 'Connexion',
    components: {
        
    }
}
</script>

<style scoped>

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
:root {
  scroll-behavior: smooth;
}

body {
  font-family: "Open Sans", sans-serif;
  background: rgba(202, 223, 220, 0.8);
  color: #444444;
}

a {
  color: #4154f1;
  text-decoration: none;
}

a:hover {
  color: #717ff5;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nunito", sans-serif;
}

/*--------------------------------------------------------------
# Main
--------------------------------------------------------------*/
#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: rgba(71, 136, 128, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: rgba(10, 99, 88, 0.8);
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/* Card */
.card {
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}

.card-header,
.card-footer {
  border-color: #ebeef4;
  background-color: #fff;
  color: #798eb3;
  padding: 15px;
}

.card-title {
  padding: 20px 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  font-weight: 300;
  color: rgba(0, 131, 116, 0.9);;
  font-family: "Poppins", sans-serif;
}

.card-title span {
  color: #899bbd;
  font-size: 14px;
  font-weight: 400;
}

.card-body {
  padding: 0 20px 20px 20px;
}

.card-img-overlay {
  background-color: rgba(255, 255, 255, 0.6);
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.logo {
  line-height: 1;
}

@media (min-width: 1200px) {
  .logo {
    width: 280px;
  }
}

.logo img {
  max-height: 26px;
  margin-right: 6px;
}

.logo span {
  font-size: 26px;
  font-weight: 700;
  color: rgb(5, 5, 58);
  font-family: "Nunito", sans-serif;
}
</style>