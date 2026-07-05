(function ($) {
  "use strict";

 
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });
  const learnMoreLink = document.getElementById("learnMore");
  const warningBox = document.getElementById("warningBox");

  // أضف معالج النقر على الرابط
  learnMoreLink.addEventListener("click", function(event) {
    event.preventDefault(); // لمنع انتقال الرابط

    // عرض صندوق التحذير
    warningBox.style.display = "block";
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

const learnMoreLink = document.getElementById("learnMore");
const warningBox = document.getElementById("warningBox");


learnMoreLink.addEventListener("click", function(event) {
  event.preventDefault(); 


  if (warningBox.style.display === "none" || warningBox.style.display === "") {
    warningBox.style.display = "block"; // إذا كان مخفيًا، فعرضه
  } else {
    warningBox.style.display = "none"; // إذا كان معروضًا، فأخفه
  }
});


function validateForm() {

  const fullname = document.getElementById('fullname').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Validate fullname (accepts only letters)
  const fullnameRegex = /^[a-zA-Z ]+$/;
  if (!fullname.match(fullnameRegex)) {
    alert('الاسم يجب أن يحتوي على أحرف فقط ولا يجب أن يحتوي على أرقام أو رموز.');
    return false;
  }
  
  // Validate phone (accepts only 9 digits)
  const phoneRegex = /^\d{9}$/;
  if (!phone.match(phoneRegex)) {
    alert('الهاتف يجب أن يحتوي على 9 أرقام فقط ولا يجب أن يحتوي على نصوص أو رموز.');
    return false;
  }
  
  // Validate email (contains @ and .com, .org, or .net)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
  if (!email.match(emailRegex)) {
    alert('البريد الإلكتروني غير صحيح.');
    return false;
  }
  event.preventDefault();


  return true;
}


// Open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}
