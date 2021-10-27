$(function () {
  // bars in navbar
  let bars = document.querySelector('.bars')
  let closeBtn = document.querySelector('.close')
  let links = document.querySelector('.links')

  bars.addEventListener('click', function () {
    links.style.transform = 'scale(1)'
  })

  closeBtn.addEventListener('click', function () {
    links.style.transform = 'scale(0)'
  })

  /* type writer */

  let headerTitle = document.querySelector('.header-title')
  let headerTitleText = headerTitle.dataset.heading
  let headerTitleTextArr = headerTitleText.split('')
  let i = 0

  const autoWriting = () => {
    headerTitle.innerHTML += headerTitleTextArr[i]
    i++
    if (i > headerTitleTextArr.length) {
      headerTitle.innerHTML = ''
      i = 0
    }
  }

  let autoWrite = setInterval(autoWriting, 300)

  // adjust header height
  $('header').height($(window).height() - $('nav').height())

  // scroll to sections
  $('header .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.features').offset().top,
      },
      1500,
    )
  })

  $('.features .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.subscribe').offset().top,
      },
      1500,
    )
  })

  $('.subscribe .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.portfolio').offset().top,
      },
      1500,
    )
  })
  $('.portfolio .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.testimonials').offset().top,
      },
      1500,
    )
  })
  $('.testimonials .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.our-team').offset().top,
      },
      1500,
    )
  })
  $('.our-team .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.contact').offset().top,
      },
      1500,
    )
  })
  $('.contact .icon-down').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('footer').offset().top,
      },
      1500,
    )
  })
  // testimonials
  let testimonialsItem = $('.testimonials-item')
  let x = 0

  $('.next').on('click', function () {
    $('.testimonials-item').each(function () {
      $(this).css('display', 'none')
    })
    if (x == testimonialsItem.length - 1) {
      x = 0
    } else {
      x++
    }

    $(testimonialsItem[x]).fadeIn(1000)
  })

  $('.prev').on('click', function () {
    $('.testimonials-item').each(function () {
      $(this).css('display', 'none')
    })
    if (x == 0) {
      x = testimonialsItem.length - 1
    } else {
      x--
    }

    $(testimonialsItem[x]).fadeIn(1000)
  })
  // scroll to top
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 500) {
      $('.scroll-to-top').fadeIn(500)
    } else {
      $('.scroll-to-top').fadeOut(500)
    }
  })

  $('.scroll-to-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
    )
  })
})
