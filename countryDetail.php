<?php
$pageTitle = "countryDetail";
$pageDescription = "Visa ghar";
include 'includes/header.php';
?>


<div class="max-w-full overflow-hidden relative  h-full bg-cover bg-center bg-no-repeat   "
  style="background-image: url('assets/allBackground-8d35f342.png');">
  <div class="container  pt-[140px] sm:pt-[170px] lg:pt-[190px] xl:pt-[223px] pb-[110px] sm:pb-[130px]">

    <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500"
      class="flex flex-col justify-start items-start gap-[5px] sm:gap-[10px]">
      <h1>Country Details</h1>
      <div
        class="flex gap-[18px] justify-start items-center py-[7px] px-[10px] bg-[#FFFFFF1A] backdrop-blur-[20px] border border-primary-light rounded-[20px]">
        <a href=" index.php" class="leading-none"><i
            class="ri-home-7-fill text-[16px] leading-[16px] hover:text-primary-light transition-all duration-300 ease-linear"></i></a>
        <img src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
        <a href="countries.php"
          class="sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light transition-all duration-300 ease-linear">Country</a>
        <img class src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
        <a href="#"
          class=" sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light transition-all duration-300 ease-linear">Country
          Details</a>
      </div>
    </div>
  </div>
</div>

<div class="container py-[70px] xl:py-[100px] gap-10 overflow-hidden">
  <div data-aos="fade-right" data-aos-duration="700" class="xl:col-span-2 flex flex-col gap-10 xl:gap-[50px]">
    <div class="relative">
      <img class="w-full h-90" src="assets/countryDetail-de9f3605.png" alt="countryDetail"
        style="height:450px; object-fit:cover; object-position:center;" />
      <img class="max-w-[20%] sm:max-w-full absolute top-0 left-0"
        src="data:image/png;base64,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"
        alt="canada2" />
    </div>

    <div class="flex flex-col gap-5 xl:gap-[30px]">
      <div class="flex flex-col gap-[5px]">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-dark">Canada</h3>

        </div>
        <img src="assets/lineA-831eca49.svg" alt="lineA.svg" />
      </div>
      <p class="text-textColor-dark">
        <span class="text-[28px] leading-[34px] font-semibold">L</span>orem
        ipsum dolor sit amet consectetur. Purus nec cras lectus justo sed
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
        <span class="text-[28px] leading-[34px] font-semibold">C</span>ongue
        magna mattis etiam congue nunc. Mi varius orci vitae purus volutpat
        ultrices. Nisl quisque aliquet bibendum amet pharetra sit facilisi.
        At pulvinar in pellentesque habitant tincidunt pulvinar urna. Elit
        neque lacus est scelerisque quis. Et turpis velit donec sodales nunc
        neque sagittis. Posuere convallis volutpat eu blandit in diam. t
        Magna purus donec lacus tincidunt.
      </p>
    </div>


    <p class="text-textColor-dark">
      <span class="text-[28px] leading-[34px] font-semibold">A</span>liquam
      vitae scelerisque sed faucibus porttitor proin magna. Risus vestibulum
      faucibus sed elit semper neque. Pellentesque ac pulvinar hendrerit
      convallis quis. Porta tincidunt sed eget quisque sit vel convallis id
      eu. Ornare viverra imperdiet senectus morbi ac vitae. Porta ultricies
      ut accumsan pellentesque ipsum aliquam. Sapien dui aliquam nam
      imperdiet non scelerisque a facilisis id.
    </p>


    <p class="text-textColor-dark">
      <span class="text-[28px] leading-[34px] font-semibold">C</span>ras
      tortor at neque tortor accumsan. Lorem sit sit tortor nunc proin eget
      tincidunt cursus. Nunc vitae elit sit sit bibendum. Orci lorem odio
      nisi at convallis posuere maecenas. Purus ac duis risus ac. Dapibus
      ipsum justo varius semper aliquam sed. Ac posuere duis cursus sociis
      id pulvinar nisl. Semper odio ac cursus lectus ut orci. Augue ultrices
      sed eleifend eu tellus blandit ut ac. Mauris nunc odio eros aliquam
      dui nulla sed. Tellus eu ut sem et egestas posuere dignissim diam.
      Tortor euismod sed nisi eu facilisis et viverra at elementum. Bibendum
      sed neque nulla venenatis amet aliquet arcu proin.
    </p>
  </div>


</div>
<div class="gap-[30px] xl:gap-[60px] py-40px] xl:py-[60px]">
  <div class="swiper universitySlider"
    style="display: flex; align-items: center; gap: 20px; overflow: hidden; padding: 20px;">
    <div class="swiper-wrapper" style="display: flex; gap: 20px;">
      <?php
      $images = [
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/g1T1yajnYjJRHvDyFsqDRDo8t6sSbnMm2u3QApbM.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/R0twl1oJJnQOCHROeFUNFTcPrpMib9lx92OKerbt.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/sm0MYVNKoZ5qzjx3loBXMDAmBuml2mfj5ordkxk4.jpg",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/VuxiFBF0Mg2bc3k7vlX3xDQglSfSbnndK7OUyXPf.jpg",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/SZwHWXeWT4qT4n4P8H6RMLugwD5fE9sY9oSVKhfo.jpg",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/OZx4jpw8BzCmWiZcRrnPxmVnI0G8GNRFkncp4SD7.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/dLKNuK9DT17JDALlfNsoG11MRa8IlKvHeiGdrTiZ.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/RGaaHztPFdIYw1mQuzahnY3HtVVtoe9czZmYIFec.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/J6ZQxCNxhpBYPat7UAbHZfXrVkkMAcntBH0Ny5vX.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/xVTh1uRl7ekQTuAtaiGxHscGPWfL1S5PdHxIZ5NJ.jpg",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/dLKNuK9DT17JDALlfNsoG11MRa8IlKvHeiGdrTiZ.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/RGaaHztPFdIYw1mQuzahnY3HtVVtoe9czZmYIFec.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/J6ZQxCNxhpBYPat7UAbHZfXrVkkMAcntBH0Ny5vX.png",
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/schools/xVTh1uRl7ekQTuAtaiGxHscGPWfL1S5PdHxIZ5NJ.jpg",
      ];

      // Repeat images to simulate continuous loop
      $images = array_merge($images, $images, $images);

      foreach ($images as $img) {
        echo '<div class="swiper-slide" style="flex: 0 0 auto; width: 150px; height: 180px; display: flex; justify-content: center; align-items: center; padding: 10px;">
                            <img src="' . $img . '" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px;" />
                            </div>';
      }
      ?>
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

<!-- Mirrored from globelvisa-html.vercel.app/countryDetail.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Jun 2025 16:00:09 GMT -->

</html>