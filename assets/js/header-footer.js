var navbar_html = `
<!-- Header START -->
<header class="navbar-light navbar-sticky header-static">
	<!-- Logo Nav START -->
	<nav class="navbar navbar-expand-xl">
		<div class="container-fluid px-3 px-xl-5">
			<!-- Logo START -->
			<a class="navbar-brand" href="index.html">
				<img class="light-mode-item navbar-brand-item" src="assets/images/logo_small_bp.svg" alt="logo">
				<img class="dark-mode-item navbar-brand-item" src="assets/images/logo_small_bp.svg" alt="logo">
			</a>
			<!-- Logo END -->

			<!-- Responsive navbar toggler -->
			<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-animation">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>

			<!-- Main navbar START -->
			<div class="navbar-collapse w-100 collapse" id="navbarCollapse">

				<!-- Nav category menu START -->
				<ul class="navbar-nav navbar-nav-scroll me-auto">
					<!-- Nav item 1 Demos -->
					<li class="nav-item dropdown dropdown-menu-shadow-stacked">
						<a class="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-ui-radios-grid me-2"></i><span>Keywords</span></a>
						<ul class="dropdown-menu" aria-labelledby="categoryMenu">

							<!-- Dropdown submenu -->
                            <li> <a class="dropdown-item" href="bootcamps.html"><i class="fas fa-graduation-cap"></i> Bootcamps</a> </li>							
							<li> <a class="dropdown-item" href="courses.html"><i class="fas fa-solid fa-book-open"></i> Courses</a> </li>                            
                            <li> <a class="dropdown-item" href="media.html"><i class="fas fa-microphone"></i> Media</a> </li>
							<li> <a class="dropdown-item" href="people.html"><i class="fas fa-users"></i> People</a> </li>
                            <li> <hr class="dropdown-divider"></li>
                            <li> <a class="dropdown-item" href=""><i class="fas fa-info-circle"></i> More ...</a> </li>                            
							
						</ul>
                        
					</li>
				</ul>
				<!-- Nav category menu END -->

				<!-- Nav Main menu START -->
				<ul class="navbar-nav navbar-nav-scroll me-auto">

                    <!-- Nav item 1 research -->
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="educationMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Education</a>
						<ul class="dropdown-menu" aria-labelledby="educationMenu">
							<li> <a class="dropdown-item active" href="bootcamps.html">Bootcamps</a></li>
							<li> <a class="dropdown-item" href="courses.html">Courses</a></li>
							<li> <a class="dropdown-item" href="media.html">Media</a></li>
							<li> <a class="dropdown-item" href="contribute.html">Contribute</a></li>
						</ul>
					</li>

					<!-- Nav item 2 media-->
					<li class="nav-item dropdown">
						<a class="nav-link" href="bootcamps.html" id="bootcampsMenu">Bootcamps</a>
					</li>

					<!-- Nav item 3 media-->
					<li class="nav-item dropdown">
						<a class="nav-link" href="courses.html" id="coursesMenu">Courses</a>
					</li>
                    
					<!-- Nav item 3 people -->
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">People</a>
						<ul class="dropdown-menu" aria-labelledby="demoMenu">
							<li> <a class="dropdown-item" href="people.html">People</a></li>
							<li> <a class="dropdown-item" href="people.html#team">Meet the Team</a></li>
							<li> <a class="dropdown-item" href="people.html#leadership">Advisors - Leadership Committee</a></li>
							<li> <a class="dropdown-item" href="people.html#join">Join Us</a></li>
						</ul>
					</li>


					<!-- Nav item 4 media-->
					<li class="nav-item dropdown">
						<a class="nav-link" href="media.html" id="demoMenu">Media</a>
					</li>

				</ul>
				<!-- Nav Main menu END -->

			</div>
			<!-- Main navbar END -->

			<!-- Profile START -->
			<div class="dropdown ms-1 ms-lg-0">
				<a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
					<img class="avatar-img rounded-circle" src="assets/images/dark_mode.png" alt="avatar">
				</a>
				<ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
					<!-- Profile info -->
					<!-- Dark mode switch START -->
					<li>
						<div class="modeswitch-wrap" id="darkModeSwitch">
							<div class="modeswitch-item">
								<div class="modeswitch-icon"></div>
							</div>
							<span>Dark mode</span>
						</div>
					</li> 
					<!-- Dark mode switch END -->
				</ul>
			</div>
			<!-- Profile START -->
		</div>
	</nav>
	<!-- Logo Nav END -->
</header>
<!-- Header END -->
`;

var navbar = document.getElementById('navbar');
navbar.innerHTML = navbar_html;


var footer_html = `
<!-- =======================
Footer START -->
<footer class="pt-5">
	<div class="container">
		<!-- Row START -->
		<div class="row g-4">

			<!-- Widget 1 START -->
			<div class="col-lg-3">
				<!-- logo -->
				<a class="me-0" href="index.html">
					<img class="light-mode-item h-40px" src="assets/images/logo_small_bp.svg" alt="logo">
					<img class="dark-mode-item h-40px" src="assets/images/logo_small_bp.svg" alt="logo">
				</a>
				<p class="my-3">Beautiful Patterns mission is to develop algorithmic thinking skills of young women, through a high level program, taught by women students of MIT and other prestigious universities, which allows them to expose their talent internationally.</p>
				<!-- Social media icon -->
				<ul class="list-inline mb-0 mt-3">
					<li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i class="fab fa-fw fa-facebook-f"></i></a> </li>
					<li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i class="fab fa-fw fa-instagram"></i></a> </li>
					<li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a> </li>
					<li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
				</ul>
			</div>
			<!-- Widget 1 END -->

			<!-- Widget 2 START -->
			<div class="col-lg-6">
				<div class="row g-4">
					<!-- Link block -->
					<div class="col-6 col-md-4">
						<h5 class="mb-2 mb-md-4">MIT GDC</h5>
						<ul class="nav flex-column">
							<li class="nav-item"><a class="nav-link" href="people.html">About us</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Contact us</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Director</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Leadership</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Join Us</a></li>
						</ul>
					</div>
									
					<!-- Link block -->
					<div class="col-6 col-md-4">
						<h5 class="mb-2 mb-md-4">Community</h5>
						<ul class="nav flex-column">
							<li class="nav-item"><a class="nav-link" href="people.html">Beautiful Patterns</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Outreach</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Volunteering</a></li>
							<li class="nav-item"><a class="nav-link" href="people.html">Sitemap</a></li>
						</ul>
					</div>

					<!-- Link block -->
					<div class="col-6 col-md-4">
						<h5 class="mb-2 mb-md-4">Content</h5>
						<ul class="nav flex-column">
							<li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
							<li class="nav-item"><a class="nav-link" href="courses.html">Podcast</a></li>
							<li class="nav-item"><a class="nav-link" href="courses.html">YouTube</a></li>							
						</ul>
					</div>
				</div>
			</div>
			<!-- Widget 2 END -->

			<!-- Widget 3 START -->
			<div class="col-lg-3">
				<h5 class="mb-2 mb-md-4">Contact</h5>
				<!-- Time -->
				<p class="mb-2">
					Toll free:<span class="h6 fw-light ms-2">+1-617-253-1764</span>
					<span class="d-block small">(9:AM to 5:PM EST)</span>
				</p>

				<p class="mb-0">Email:<span class="h6 fw-light ms-2">consultas@mit.edu</span></p>


			</div> 
			<!-- Widget 3 END -->
		</div><!-- Row END -->

		<!-- Divider -->
		<hr class="mt-4 mb-0">

		<!-- Bottom footer -->
		<div class="py-3">
			<div class="container px-0">
				<div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
					<!-- copyright text -->
					<div class="text-primary-hover"> Copyrights <a href="#" class="text-body">&copy;2022</a>. All rights reserved. </div>
					<!-- copyright links-->
					<div class="justify-content-center mt-3 mt-lg-0">
						<ul class="nav list-inline justify-content-center mb-0">
							<li class="list-inline-item"><a class="nav-link" href="#">Terms of use</a></li>
							<li class="list-inline-item"><a class="nav-link pe-0" href="#">Privacy policy</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- =======================
Footer END -->

<!-- Back to top -->
<div class="back-top"><i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i></div>

`;

var footer = document.getElementById('footer');
footer.innerHTML = footer_html;
