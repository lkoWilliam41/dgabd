var headers = document.getElementById('header')


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
                                <li>info@dgda.com</li>
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
                        <div class="logo">
                            <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                        <!-- Main-menu -->
                        <div class="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li><a href="index.html" class="menu">Acceuil</a></li>
                                    <li><a href="actualite.html" class="menu">Actualit??</a></li>
                                    <li><a href="archives.html" class="menu">Services</a>
                                        <ul class="submenu">
                                            <li><a href="archives.html">Archives</a></li>
                                            <li><a href="bibliotheque.html">Biblioth??que</a></li>
                                            <li><a href="documentation.html">Documentation</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="apropos.html" class="menu">A propos de Nous</a></li>
                                    <li><a href="contact.html" class="menu">Contactez Nous</a></li>
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


headers.innerHTML= topbar;

console.log('samuel')