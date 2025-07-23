<?php
$pageTitle = "contact";
$pageDescription = " Visa ghar";
include 'includes/header.php';
?>

<div class="max-w-full overflow-hidden relative  h-full bg-cover bg-center bg-no-repeat 
     bg-[url('assets/')]" style="background-image: url('assets/allBackground-8d35f342.png');">
  <?php include 'includes/navMenu.php' ?>

  <div class="container  pt-[140px] sm:pt-[170px] lg:pt-[190px] xl:pt-[223px] pb-[110px] sm:pb-[130px]">
    <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500"
      class="flex flex-col justify-start items-start gap-[5px] sm:gap-[10px]">
      <h1>Contact</h1>
      <div
        class="flex gap-[18px] justify-start items-center py-[7px] px-[10px] bg-[#FFFFFF1A] backdrop-blur-[20px] border border-primary-light rounded-[20px]">
        <a href=" index.php" class="leading-none"><i
            class="ri-home-7-fill text-[16px] leading-[16px] hover:text-primary-light transition-all duration-300 ease-linear"></i></a>
        <img src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
        <a href="contact.php"
          class="sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light transition-all duration-300 ease-linear">Contact</a>
        <img class="hidden" src="assets/miniLine-a36e5f89.svg" alt="miniLines" />
        <a href="contact.php"
          class="hidden sm:text-subtitle2 font-medium sm:font-subtitle2 hover:text-primary-light transition-all duration-300 ease-linear"></a>
      </div>
    </div>
  </div>
</div>

<div class="relative w-full h-full  py-[70px] xl:py-[100px]">
  <div class="flex flex-col gap-[70px] xl:gap-[100px] container">
    <div class="flex-equal-height gap-10 items-center" id="inquiry">
      <div class="team-section max-w-[680px] mx-auto lg:text-start text-center pt-1 xl:pt-0" data-aos="fade-right"
        data-aos-duration="700">
        <div class="flex flex-col gap-[15px] xl:gap-[30px]">
          <div class="flex flex-col gap-[15px] xl:gap-[30px]">
            <div class="flex flex-col gap-[15px] xl:gap-5">
              <div class="flex justify-center lg:justify-start items-center lg:items-start gap-2">
                <i class="text-secondary-dark text-subtitle2 sm:text-subtitle1 font-subtitle1 ri-shield-star-fill"></i>
                <p class="text-secondary-dark text-subtitle2 sm:text-subtitle1 font-subtitle1">
                  Get In Touch
                </p>
              </div>
              <div class="flex flex-col gap-[9px]">
                <h2 class="text-primary-dark">
                  Have any
                  Inquiries?
                  Contact us
                  Anytime!
                </h2>
                <!-- <img class="max-w-full" src="assets/lineA-831eca49.svg" alt="lineA.svg" /> -->
              </div>
            </div>
            <!-- <p class="xl:text-body1 font-body1 text-textColor-dark">
              Lorem ipsum dolor sit amet consectetur. Elementum massa
              risus
              euismod semper fringilla tristique viverra urna metus.
            </p> -->
          </div>
          <form class="flex flex-col gap-[15px] xl:gap-5">
            <input required
              class="text-textColor-dark py-[10px] px-5 border border-primary-light rounded-[10px] placeholder:text-textColor-dark focus:outline-none"
              placeholder="Your Full Name" type="text" />
            <input required
              class="text-textColor-dark py-[10px] px-5 border border-primary-light rounded-[10px] placeholder:text-textColor-dark focus:outline-none"
              placeholder="Email Address" type="text" />
            <input required
              class="text-textColor-dark py-[10px] px-5 border border-primary-light rounded-[10px] placeholder:text-textColor-dark focus:outline-none"
              placeholder="Contact Number" type="text" />
            <input required
              class="text-textColor-dark py-[10px] px-5 border border-primary-light rounded-[10px] placeholder:text-textColor-dark focus:outline-none"
              placeholder="Subject" type="text" />
            <textarea required placeholder="Your Message"
              class="text-textColor-dark py-[10px] px-5 border border-primary-light rounded-[10px] placeholder:text-body1 placeholder:text-textColor-dark focus:outline-none"></textarea>
            <div>
              <button
                class="py-[10px] sm:py-3 lg:py-[14px] px-[14px] sm:px-4 lg:px-[18px] rounded-[20px] bg-primary-light hover:bg-secondary-medium text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 transition-all duration-300 ease-linear">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="700" class="image-section">
        <img src="assets/contact.jpg" class="mx-auto" alt="contact" />
      </div>
    </div>


  </div>
</div>
<div>

  <div class="bg-white rounded-2xl overflow-hidden  transition-shadow duration-300 container " id="branch">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
      <!-- Left Side - Office Details -->
      <div class="py-6 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-primary-dark mb-2 py-4">Head Office</h3>
          <div class="w-16 h-1 bg-primary-light rounded-full"></div>
        </div>

        <div class="space-y-6">
          <!-- Address -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-map-pin-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Address</h4>
              <p class="text-textColor-dark">3rd Floor, Tamang Plaza, Boudha Pipalbot</p>
              <p class="text-textColor-dark">Kathmandu, Nepal</p>
            </div>
          </div>

          <!-- Contact -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-phone-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Contact</h4>
              <p class="text-textColor-dark">+977 9851338645</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-mail-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Email</h4>
              <p class="text-textColor-dark">info@thevisaghar.com</p>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-time-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Opening Hours</h4>
              <p class="text-textColor-dark">07:00 AM to 06:00 PM</p>
              <p class="text-textColor-dark">Saturday off</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Map -->
      <div class="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.901885574063!2d85.36032471751805!3d27.720315459978895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b085ed94dd7%3A0x8df87c4987a775ef!2sThe%20Visa%20Ghar!5e0!3m2!1sen!2snp!4v1750089391397!5m2!1sen!2snp"
          width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" class="w-full h-full min-h-[400px] object-cover">
        </iframe>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-2xl overflow-hidden  transition-shadow duration-300 container py-[70px] xl:py-[100px] ">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
      <!-- Left Side - Office Details -->
      <div class="py-6 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-primary-dark mb-2 py-4">Branch Office</h3>
          <div class="w-16 h-1 bg-primary-light rounded-full"></div>
        </div>

        <div class="space-y-6">
          <!-- Address -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-map-pin-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Address</h4>
              <p class="text-textColor-dark">3rd Floor, Tamang Plaza, Boudha Pipalbot</p>
              <p class="text-textColor-dark">Kathmandu, Nepal</p>
            </div>
          </div>

          <!-- Contact -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-phone-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Contact</h4>
              <p class="text-textColor-dark">+977 9851338645</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-mail-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Email</h4>
              <p class="text-textColor-dark">info@thevisaghar.com</p>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-time-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Opening Hours</h4>
              <p class="text-textColor-dark">07:00 AM to 06:00 PM</p>
              <p class="text-textColor-dark">Saturday off</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Map -->
      <div class="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.901885574063!2d85.36032471751805!3d27.720315459978895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b085ed94dd7%3A0x8df87c4987a775ef!2sThe%20Visa%20Ghar!5e0!3m2!1sen!2snp!4v1750089391397!5m2!1sen!2snp"
          width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" class="w-full h-full min-h-[400px] object-cover">
        </iframe>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-2xl overflow-hidden  transition-shadow duration-300 container  pb-[70px] xl:pb-[100px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
      <!-- Left Side - Office Details -->
      <div class="py-6 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white">
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-primary-dark mb-2 py-4">Branch Office</h3>
          <div class="w-16 h-1 bg-primary-light rounded-full"></div>
        </div>

        <div class="space-y-6">
          <!-- Address -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-map-pin-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Address</h4>
              <p class="text-textColor-dark">3rd Floor, Tamang Plaza, Boudha Pipalbot</p>
              <p class="text-textColor-dark">Kathmandu, Nepal</p>
            </div>
          </div>

          <!-- Contact -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-phone-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Contact</h4>
              <p class="text-textColor-dark">+977 9851338645</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-mail-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Email</h4>
              <p class="text-textColor-dark">info@thevisaghar.com</p>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="flex items-start gap-4">
            <div class="p-3  rounded-full">
              <i class="ri-time-fill text-primary-light text-xl"></i>
            </div>
            <div>
              <h4 class="font-semibold text-primary-dark mb-1">Opening Hours</h4>
              <p class="text-textColor-dark">07:00 AM to 06:00 PM</p>
              <p class="text-textColor-dark">Saturday off</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Map -->
      <div class="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.901885574063!2d85.36032471751805!3d27.720315459978895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b085ed94dd7%3A0x8df87c4987a775ef!2sThe%20Visa%20Ghar!5e0!3m2!1sen!2snp!4v1750089391397!5m2!1sen!2snp"
          width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" class="w-full h-full min-h-[400px] object-cover">
        </iframe>
      </div>
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
<script>
  window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    const links = document.querySelectorAll('.nav-link');
    const buttontab = document.getElementById('menu-icon')
    // const closetab = document.getElementById('close-icon');


    if (window.scrollY > 20) {
      nav.classList.add('bg-white');
      buttontab.classList.add('text-primary-light')
      buttontab.classList.remove('text-white')
      nav.classList.remove('bg-transparent');
      links.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-primary-light');
      });
    } else {
      nav.classList.add('bg-transparent');
      nav.classList.remove('bg-white');
      buttontab.classList.remove('text-primary-light')
      buttontab.classList.add('text-white')
      links.forEach(link => {
        link.classList.remove('text-primary-light');
        link.classList.add('text-white');
      });
    }
  });
</script>
</body>

<!-- Mirrored from globelvisa-html.vercel.app/contact.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Jun 2025 16:00:21 GMT -->

</html>