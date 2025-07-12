 window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('con').style.display = 'block';
  });

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    document.getElementById('see-more-btn').addEventListener('click', function () {
    document.getElementById('small-screen-text').classList.remove("hidden");
    document.getElementById('see-less-btn').classList.remove("hidden");
    this.classList.add("hidden")

    });

    document.getElementById('see-less-btn').addEventListener('click', function () {
    document.getElementById('small-screen-text').classList.add("hidden");
    document.getElementById('see-more-btn').classList.remove("hidden");
    this.classList.add("hidden")

    });

  //   function updateActiveLink() {
  //   const hash = window.location.hash;
  //    document.querySelectorAll('nav a').forEach(link => {
     
  //     const href = link.getAttribute('href');
  //     const isHome = (hash === "" || hash === "#") && href === "#";
  //     const isMatch = href === hash;

  //     if (isMatch || isHome) {
  //       link.classList.remove('text-white');
  //       link.classList.add('text-green-500');
  //     } else {
  //       link.classList.remove('text-green-500');
  //       link.classList.add('text-white');
  //     }
  //   });
  // }

  // window.addEventListener('DOMContentLoaded', updateActiveLink);
  // window.addEventListener('hashchange', updateActiveLink);
