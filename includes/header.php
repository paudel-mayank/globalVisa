<!DOCTYPE html>
<html lang="en" class="scroll-smooth" data-mode="light" dir="ltr">

<!-- Mirrored from globelvisa-html.vercel.app/ index.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Jun 2025 15:56:25 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
    <meta charset="utf-8" />

    <title><?php echo isset($pageTitle) ? "$pageTitle | The Visa Ghar" : 'My Website'; ?></title>
    <meta name="Visa Ghar" name="<?php echo $pageDescription ?? ''; ?>">

    <!-- <title> Home | Visa Ghar</title>
    <meta content="Visa Ghar" name="description" /> -->
    <meta content="override" name="Visa Ghar" />
    <!-- favicon -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="assets/V.png" />

    <link rel="stylesheet" href="css/all.min.css" />
    <link rel="stylesheet" href="cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" />

    <!-- swiper  -->
    <link rel="stylesheet" href="cdn.jsdelivr.net/npm/swiper%4011/swiper-bundle.min.css" />

    <!-- aos  -->
    <link rel="stylesheet" href="css/aos.css" />
    <!-- icon css -->

    <!-- Tailwind CSS -->

    <script type="module" crossorigin src="js/main.js"></script>
    <link rel="stylesheet" href="css/main-e60a8ff7.css">
    <link rel="stylesheet" href="css/icons-c6274531.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body class="overflow-x-hidden">
    <header class="overflow-x-hidden">
        <nav data-aos="fade-down" data-aos-duration="700" class="left-0 right-0 fixed top-0 z-20 bg-white">
            <div class="flex py-[10px] lg:py-0 justify-between container items-center">
                <a href="index.php">
                    <img class="max-w-[30%] sm:max-w-full" src="assets/logo-1.png" alt="Logo" style="height: 50px;" />
                </a>

                <ul class="hidden lg:flex justify-center gap-[30px] items-center">
                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="service.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                Service
                            </a>

                        </div>
                    </li>

                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="about.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                About Us
                            </a>
                        </div>
                    </li>
                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="service.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                Study Abroad </a>
                        </div>
                    </li>
                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="coaching.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                Test Preparation </a>
                        </div>
                    </li>

                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="testimonials.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                Success Story </a>
                        </div>
                    </li>
                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="faq.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                FAQ
                            </a>
                        </div>
                    </li>

                    <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="blog.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                Blogs
                            </a>
                    </li>
                    <!-- <li class="relative group">
                        <div class="flex py-[25px] xl:py-[34px] group items-center justify-center gap-[6px]">
                            <a href="testimonials.php"
                                class="text-subtitle2 font-subtitle2 text-secondary-medium group-hover:text-primary-light transition-all duration-300 ease-in">
                                Testimonials
                            </a>
                    </li> -->


                </ul>
                <div class="flex justify-end gap-[10px]">
                    <div class="flex justify-center items-center gap-2 xl:gap-5">
                        <div id="searchBar" class="cursor-pointer block">

                        </div>

                        <div class="hidden xl:flex justify-center items-center">
                            <a class="py-[10px] sm:py-3 lg:py-[14px] px-[14px] sm:px-4 lg:px-[18px] rounded-[20px] bg-primary-light hover:bg-secondary-medium text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 transition-all duration-300 ease-in"
                                href="contact.php">Apply Now</a>
                        </div>
                    </div>
                    <button id="menu-toggle" class="block lg:hidden">
                        <i id="menu-icon" class="text-[25px] text-primary-light font-semibold ri-menu-3-line"></i>
                        <i id="close-icon"
                            class="text-[25px] text-primary-light hidden font-semibold ri-close-line"></i>
                    </button>
                </div>
            </div>
        </nav>

        <div id="mobile-menu"
            class="lg:hidden fixed top-[56px] sm:top-[60px] right-0 w-[100%] h-screen bg-[rgba(36,42,45,0.7)] backdrop-blur-[30px] z-[999] px-6 py-10 transition-transform duration-300 ease-linear transform translate-x-full overflow-y-auto">
            <div class="relative flex flex-col items-center gap-4">
                <div class="relative w-full">
                    <div class="dropdown-btn flex group justify-between items-center">
                        <a class="flex justify-start items-start transition-all duration-300 ease-in text-[20px] leading-[26px] font-body1 w-full"
                            href=' index.php'>
                            Home
                        </a>
                    </div>

                </div>

                <div class="relative w-full">
                    <div class="flex group justify-between items-center">
                        <a href="about.php"
                            class="flex justify-start items-start transition-all duration-300 ease-in text-[20px] leading-[26px] font-body1 w-full">
                            Study Abroad
                        </a>
                    </div>
                </div>
                <div class="relative w-full">
                    <div class="flex group justify-between items-center">
                        <a href="coaching.php"
                            class="flex justify-start items-start transition-all duration-300 ease-in text-[20px] leading-[26px] font-body1 w-full">
                            Test Preparation </a>
                    </div>
                </div>
                <div class="relative w-full">
                    <div class="flex group justify-between items-center">
                        <a href="testimonials.php"
                            class="flex justify-start items-start transition-all duration-300 ease-in text-[20px] leading-[26px] font-body1 w-full">
                            Success Story </a>
                    </div>
                </div>

                <div class="relative w-full">
                    <div class="flex group justify-between items-center">
                        <a href="faq.php"
                            class="flex justify-start items-start transition-all duration-300 ease-in text-[20px] leading-[26px] font-body1 w-full">
                            FAQ </a>
                    </div>
                </div>

                <div class="relative w-full">
                    <div class="flex group justify-between items-center">
                        <a href="blog.php"
                            class="flex justify-start items-start transition-all duration-300 ease-in text-[20px] leading-[26px] font-body1 w-full">
                            Blogs </a>
                    </div>
                </div>


                <div class="flex justify-center items-center">
                    <a class="py-[10px] sm:py-3 lg:py-[14px] px-[14px] sm:px-4 lg:px-[18px] rounded-[20px] bg-primary-light hover:bg-secondary-medium text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 transition-all duration-300 ease-in"
                        href="contact.php"> Apply Now</a>
                </div>
            </div>
        </div>
    </header>
    <div id="showSearch"
        class="fixed flex justify-center items-center inset-0 bg-transparent bg-opacity-65 z-50 backdrop-blur-[50px] transform translate-y-full transition-transform duration-300">
        <button id="closeSearch" class="absolute top-5 right-5">
            <i class="ri-close-line text-3xl text-primary-light"></i>
        </button>
        <div class="container">
            <div
                class="flex border-2 border-primary-light justify-between md:max-w-[500px] mx-auto bg-bgOpacity shadow-[0_0_10px_rgba(0,0,0,0.5)] py-1 md:py-[11px] pl-[17px] md:pl-[28px] pr-[8px] md:pr-[15px] rounded-[39px]">
                <input type="text" class="focus:outline-none bg-transparent" placeholder="Enter Keyword..." />
                <i
                    class="text-[18px] px-2 py-1 bg-primary-light hover:bg-secondary-light hover:text-secondary-medium transition-all duration-300 ease-in cursor-pointer rounded-full ri-search-line"></i>
            </div>
        </div>
    </div>
    <!-- 
    <div
        class="loader fixed top-0 left-0 w-full h-full flex items-center justify-center z-[9999] bg-white bg-opacity-50 backdrop-blur-[50px]">
        <div class="spinner">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div> -->