<?php
$pageTitle = "coaching details";
$pageDescription = " Visa ghar";
include 'includes/header.php';
?>


<div class="max-w-full overflow-hidden relative  h-full bg-cover bg-center bg-no-repeat   "
  style="background-image: url('assets/allBackground-8d35f342.png');">
  <?php include 'includes/navMenu.php' ?>

  <div class="container  pt-[140px] sm:pt-[170px] lg:pt-[190px] xl:pt-[223px] pb-[110px] sm:pb-[130px]">

    <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500"
      class="flex flex-col justify-start items-start gap-[5px] sm:gap-[10px]">
      <h1> Coaching</h1>
      <div
        class="flex gap-[18px] justify-start items-center py-[7px] px-[10px] bg-[#FFFFFF1A] backdrop-blur-[20px] border border-primary-light rounded-[20px]">
        <a href=" index.php" class="leading-none"><i
            class="ri-home-7-fill text-[16px] leading-[16px] hover:text-primary-light transition-all duration-300 ease-linear"></i></a>
        <img src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
        <a href="blog.php" class="sm:text-subtitle2 
          font-medium sm:font-subtitle2 hover:text-primary-light transition-all duration-300 ease-linear"></a>
        <img class src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
        <a href="#" class=" sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light transition-all 
          duration-300 ease-linear">Coaching Details</a>
      </div>
    </div>
  </div>
</div>
<div class="container py-[70px] xl:py-[100px] gap-10 overflow-hidden">
  <div data-aos="fade-right" data-aos-duration="700" class="xl:col-span-2 flex flex-col gap-10 xl:gap-[50px]">
    <img class="max-w-full" src="assets/coach1-ac37501d.png" alt="coach1"
      style="height:450px; object-fit:cover; object-position:center;" />

    <div class="flex flex-col gap-5 xl:gap-[30px]">
      <div class="flex flex-col gap-[5px]">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-dark">IELTS Courses</h3>

        </div>
        <img src="assets/lineA-831eca49.svg" alt="lineA.svg" />
      </div>
      <p class="text-textColor-dark">
        <span class="text-[28px] leading-[34px] font-semibold">I</span>psum
        dolor sit amet consectetur. Purus nec cras lectus justo sed
        interdum. Morbi vulputate at facilisis sed. A nisl amet libero
        faucibus etiam risus aliquet magna blandit. Diam integer mollis
        metus montes pellentesque vel. Purus neque enim aenean sed sodales
        est. Hendrerit sed sed erat leo orci nibh purus. Augue tortor duis
        lobortis purus convallis facilisi. Aliquam elit sit aliquam nisi
        venenatis arcu est. Quisque dictumst pretium mauris tristique ut
        sed. Nisl nunc et pharetra donec tempor. Consectetur amet est duis
        vestibulum sit donec pellentesque ultricies. Aliquet mauris nisi sed
        quis lorem id aliquet lorem quis. Leo morbi ac justo ut diam nunc.
      </p>
      <p class="text-textColor-dark">
        <span class="text-[28px] leading-[34px] font-semibold">M</span>agna
        mattis etiam congue nunc. Mi varius orci vitae purus volutpat
        ultrices. Nisl quisque aliquet bibendum amet pharetra sit facilisi.
        At pulvinar in pellentesque habitant tincidunt pulvinar urna. Elit
        neque lacus est scelerisque quis. Et turpis velit donec sodales nunc
        neque sagittis. Posuere convallis volutpat eu blandit in diam. t
        Magna purus donec lacus tincidunt.
      </p>
    </div>


  </div>


</div>


<?php include "includes/footer.php" ?>

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
<script>
  window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    const links = document.querySelectorAll('.nav-link');
    const buttontab = document.getElementById('menu-icon')
    // const closetab = document.getElementById('close-icon');


    if (window.scrollY > 20) {
      nav.classList.add('bg-transparent-2');
      buttontab.classList.add('text-primary-light')
      buttontab.classList.remove('text-white')
      nav.classList.remove('bg-transparent');
      links.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-primary-light');
      });
    } else {
      nav.classList.add('bg-transparent-2');
      // nav.classList.remove('bg-transparent-2');
      // buttontab.classList.remove('text-primary-light')
      buttontab.classList.add('text-white')
      links.forEach(link => {
        // link.classList.remove('text-primary-light');
        link.classList.add('text-primary-light');
      });
    }
  });
</script>
</body>

<!-- Mirrored from globelvisa-html.vercel.app/coachDetail.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Jun 2025 16:00:04 GMT -->

</html>