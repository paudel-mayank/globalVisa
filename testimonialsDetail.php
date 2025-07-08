<?php
$pageTitle = "blogDetail";
$pageDescription = " Visa ghar";
include 'includes/header.php';
?>


<div class="max-w-full overflow-hidden relative  h-full bg-cover bg-center bg-no-repeat   "
    style="background-image: url('assets/allBackground-8d35f342.png');">
    <div class="container  pt-[140px] sm:pt-[170px] lg:pt-[190px] xl:pt-[223px] pb-[110px] sm:pb-[130px]">

        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500"
            class="flex flex-col justify-start items-start gap-[5px] sm:gap-[10px]">
            <h1>Testimonials</h1>
            <div
                class="flex gap-[18px] justify-start items-center py-[7px] px-[10px] bg-[#FFFFFF1A] backdrop-blur-[20px] border border-primary-light rounded-[20px]">
                <a href=" index.php" class="leading-none"><i
                        class="ri-home-7-fill text-[16px] leading-[16px] hover:text-primary-light transition-all duration-300 ease-linear"></i></a>
                <img src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
                <a href="blog.php" class="sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light
                     transition-all duration-300 ease-linear">Testmonial Details</a>
                <!-- <img class src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
                <a href="#"
                    class=" sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light transition-all duration-300 ease-linear">Blog
                    Details</a> -->
            </div>
        </div>
    </div>
</div>

<!-- grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 -->
<div class="relative  pt-[70px] xl:pt-[100px] pb-[90px] xl:pb-[176px] overflow-hidden">


    <div class="flex-equal-height gap-10 container">
        <div data-aos="fade-right" data-aos-duration="700"
            class="text-section flex flex-col gap-5 lg:gap-10 max-w-[580px]">
            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-[10px]">
                    <h3 class="text-primary-dark">Sadie Pearson</h3>
                    <h5 class="text-primary-light">Student Visa to USA</h5>
                </div>
                <img src="assets/lineA-831eca49.svg" alt="lineA.svg" />
            </div>
            <p class="text-textColor-dark">
                <span class="text-[28px] leading-[34px] font-semibold">A</span>c
                feugiat a ut ut quis hendrerit vitae quis mauris. Morbi commodo id
                egestas lacus ac. Id pellentesque mi proin sed pellentesque libero
                consectetur feugiat. Posuere diam curabitur ut sagittis urna purus
                auctor. Enim at diam facilisis pulvinar augue lectus nulla feugiat
                neque. Hendrerit amet vitae eget ultrices sit posuere. Volutpat
                lacinia sed malesuada ipsum. Tempor varius ullamcorper etiam elit.
                Quam consectetur tincidunt volutpat lobortis cras auctor euismod
                fames aliquam. Curabitur in elit neque nunc id. Blandit dis ornare
                morbi tristique diam arcu lacus ultrices.
            </p>

        </div>

        <div data-aos="fade-left" data-aos-duration="700" class=" image-section relative mx-auto group 
            hover:drop-shadow-medium transition-all duration-300 ease-linear">
            <img class="transition-all duration-300 ease-linear" src="assets/teamDetail-bdfc174e.png"
                alt="teamDetail" />

        </div>
    </div>
</div>

<?php include "includes/footer.php" ?>

<!-- loader js -->

<!-- Include Alpine.js CDN -->
<script src="cdn
.jsdelivr.net/npm/alpinejs%402.8.2/dist/alpine.min.js" defer></script>

<!-- preline js -->

<!-- <script src="https://cdn.jsdelivr.net/npm/preline@latest/dist/preline.js"></script> -->

<!-- main js -->

<!-- swiper js  -->
<script src="cdn
.jsdelivr.net/npm/swiper%4011/swiper-bundle.min.js"></script>

<!-- aos  -->
<script src="js/aos.js"></script>

</body>


</html>