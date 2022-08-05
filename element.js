var headers = document.getElementById('header')
var footer = document.getElementById('footer')


var topbar = `<header>
<!-- Header Start -->
<div class="header-area">
    <div class="main-header ">
        <div class="header-top top-bg d-none d-lg-block">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-8">
                        <div class="header-info-left">
                            <ul>
                                <li>archive22@gmail.com</li>
                                <li>074 57 00 40</li>
                                <li>Libreville</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="header-info-right f-right">
                            <ul class="header-social">
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li> <a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom  header-sticky">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Logo -->
                    <div class="col-xl-2 col-lg-2 col-md-1">
                        <div class="log">
                            <a href="index.html"><img  src="assets/img/logo/logo.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                        <!-- Main-menu -->
                        <div class="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li><a href="index.html" class="menu">Accueil</a></li>
                                    <li><a href="actualite.html" class="menu">Actualité</a></li>
                                    <li><a href="archives.html" class="menu">Services</a>
                                        <ul class="submenu">
                                            <li><a href="archives.html">Archives</a></li>
                                            <li><a href="bibliotheque.html">Bibliothèque</a></li>
                                            <li><a href="documentation.html">Documentation</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="apropos.html" class="menu">A propos de Nous</a></li>
                                    <li><a href="contact.html" class="menu">Contactez-Nous</a></li>
                                    <button style="margin-left: 15px; background-color: #014b85; color:#ffffff" class="n btn-outline border-btn inscription">Inscription</button>
                                    <button style="margin-left: 15px;" class="n btn-outline border-btn">Connexion</button>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Header End -->
</header>`

var bas = ` <footer>
<!-- Footer Start-->
<div class="footer-area footer-padding footer-bg" style="background : url(assets/img/service/b.png); background-size: cover">
    <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                <div class="single-footer-caption mb-50">
                    <div class="single-footer-caption mb-30">
                        <!-- logo -->
                        <div class="footer-log">
                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""></a>
                        </div>
                        <div class="footer-tittle">
                            <div class="footer-pera">
                                <p>Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit csed do
                                    eiusmod tempor incididucvccnt ut labovre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                        <h4>Liens utiles</h4>
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Actualité</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#"> Contactez-nous</a></li>
                            <li><a href="#">À propos de nous</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Archives</a></li>
                            <li><a href="#">Bibliothèque</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Termes & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer bottom -->
        <div class="row pt-padding">
            <div class="col-xl-7 col-lg-7 col-md-7">
                <div class="footer-copy-right">
                    <p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script> Tous droits réservés <i
                            class="ti-heart" aria-hidden="true"></i> par <a href="https://colorlib.com"
                            target="_blank"> Sol'Tech</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </p>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5">
                <!-- social -->
                <div class="footer-social f-right">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-behance"></i></a>
                    <a href="#"><i class="fas fa-globe"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer End-->
</footer>`

headers.innerHTML = topbar;
footer.innerHTML = bas;

console.log('samuel')