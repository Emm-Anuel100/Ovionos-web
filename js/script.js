
  //** script to handle mobile nav. menu
 function handle_menu(num) {
    //** set variable
    let nav = document.querySelector('.nav');
    let menu_icon = document.querySelector('.menu-icon');

    menu_icon.addEventListener('click', () => {
      if (nav.style.height === num) {
        nav.style.height = "0px";
      } else {
        nav.style.height = num;
    }
  })
  }
  handle_menu("90%");



  //** section menu function
  function toggle_section_nav(auto, value, hidden, visible) {
    let sectionNav = document.querySelector('.section-nav');
    let navToggle = document.querySelector('.menu-icon-2');

    navToggle.addEventListener('click', () => {
      if (sectionNav.style.height === auto) {
        sectionNav.style.height = value;
        sectionNav.style.visibility = hidden;
        } else {
        sectionNav.style.height = auto;
        sectionNav.style.visibility = visible;
      }  
    })
  }
  toggle_section_nav("auto", "1px", "hidden", "visible" );


  //**  Hover box animation
  //**  Array of box elements
  const boxes = document.querySelectorAll('.box');

  // Loop through each box
  boxes.forEach((box, index) => {
    // Select the corresponding images based on the index
    const layerImage = document.querySelector(`img.l${index + 1}`);
    const layerDark = document.querySelector(`img.x${index + 1}`);

    // Add event listeners for mouse enter and leave
    box.addEventListener('mouseenter', () => {
      layerImage.classList.add('add-layer');
      layerDark.style.visibility = "visible";
    });

    box.addEventListener('mouseleave', () => {
      layerImage.classList.remove('add-layer');
      layerDark.style.visibility = "hidden";
    });
  });

  //** swiper js starts here */
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Default to 3 slides per view
    spaceBetween: 30, // Space between slides in pixels
    loop: true, // Enable looping
    autoplay: {
      delay: 2500, // Auto-scroll every 2.5 seconds
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1, // 1 slide per view on mobile devices
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2, // 2 slides per view on tablets
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3, // 3 slides per view on desktop
        spaceBetween: 30,
      },
    },
  });

