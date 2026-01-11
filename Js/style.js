



document.addEventListener("DOMContentLoaded", function () {
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor =
    rootStyles.getPropertyValue("--primary").trim() || "#009e91";
  const primarySoft =
    rootStyles.getPropertyValue("--primary-soft").trim() ||
    "rgba(0, 158, 145, 0.08)";
  const inkColor = rootStyles.getPropertyValue("--ink").trim() || "#fd823b";
  
  const logoLink = document.querySelector(".logo-link");
  if (logoLink) {
    gsap.from(".logo-link", {
      duration: 1,
      x: -50,
      opacity: 0,

      ease: "power3.out",
    });
  }

  
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length > 0) {
    gsap.set(".nav-link", { opacity: 1 });

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(
        ".nav-link",
        { y: -16, scale: 0.96, opacity: 1, filter: "blur(6px)" },
        {
          duration: 0.1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.08,
          delay: 0.1,
        }
      )
      .to(
        ".nav-link",
        {
          duration: 0.32,
          boxShadow: "0 18px 36px -20px rgba(0, 158, 145, 0.55)",
          ease: "back.out(1.6)",
        },
        "-=0.5"
      )
      .to(".nav-link", {
        duration: 0.24,
        boxShadow: "0 12px 24px -20px rgba(0, 158, 145, 0.45)",
        ease: "power1.out",
      });
  }

// Desktop Search functionality (GSAP)
{
    const desktopSearchBtn = document.getElementById('desktop-search-btn');
    const desktopSearchContainer = document.getElementById('desktop-search-input-wrapper');
    const desktopSearchClose = document.getElementById('desktop-search-close');
    const desktopSearchInput = desktopSearchContainer?.querySelector('input');
    let isSearchOpen = false;

    if (desktopSearchBtn && desktopSearchContainer && desktopSearchClose) {
        // Ensure initial state: hidden, width 0, and high z-index
        gsap.set(desktopSearchContainer, { width: 0, autoAlpha: 0, zIndex: 100 });

        const openDesktopSearch = () => {
            if (isSearchOpen) return;
            isSearchOpen = true;
            
            // Hide Trigger Button
            gsap.to(desktopSearchBtn, {
                autoAlpha: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            // GSAP Animation to Open
            gsap.to(desktopSearchContainer, {
                width: 360,
                autoAlpha: 1, // handles visibility + opacity
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => desktopSearchInput?.focus()
            });
        };

        const closeDesktopSearch = () => {
            if (!isSearchOpen) return;
            isSearchOpen = false;

            // Show Trigger Button
            gsap.to(desktopSearchBtn, {
                autoAlpha: 1,
                duration: 0.3,
                delay: 0.2, // Wait slightly for input to close
                ease: "power2.in"
            });

            // GSAP Animation to Close
            gsap.to(desktopSearchContainer, {
                width: 0,
                autoAlpha: 0,
                duration: 0.4,
                ease: "power3.in"
            });
        };

        desktopSearchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDesktopSearch();
        });

        desktopSearchClose.addEventListener('click', (e) => {
             e.stopPropagation();
             closeDesktopSearch();
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (isSearchOpen && !desktopSearchContainer.contains(e.target) && !desktopSearchBtn.contains(e.target)) {
                closeDesktopSearch();
            }
        });
    }
}

  const navRight = document.querySelector(".nav-right");
  if (navRight) {
    gsap.from(".nav-right", {
      duration: 0.8,
      x: 50,
      opacity: 0,
      delay: 0.5,

      ease: "power3.out",
    });
  }


  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    gsap.to(".hero-title", {
      duration: 1.2,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      delay: 0.7,

      ease: "power3.inOut",
    });
  }

 
  const cardItems = document.querySelectorAll(".card-item");
  if (cardItems.length > 0) {
    gsap.from(".card-item", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 1,

      ease: "power2.out",
    });
  }

  
  const cardIcons = document.querySelectorAll(".card-icon");
  if (cardIcons.length > 0) {
    gsap.from(".card-icon", {
      duration: 0.8,
      scale: 0,
      rotation: 180,
      stagger: 0.2,
      delay: 1.2,

      ease: "back.out(1.7)",
    });

  }

  

  document.querySelectorAll(".link-hover-effect").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        duration: 0.5,
        scale: 1.02,

        ease: "power2.out",
      });

     
      gsap.to(link, {
        duration: 0.3,

        color: primaryColor,
        ease: "power2.out",
      });
    });


    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        duration: 0.5,
        scale: 1,

        ease: "power2.out",
      });

      
      gsap.to(link, {
        duration: 0.3,

        color: inkColor,
        ease: "power2.out",
      });
    });
  });

 

  document.querySelectorAll(".card-hover").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,

        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        ease: "power2.out",
      });


      
      const icon = card.querySelector(".card-icon");
      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1.1,
          rotation: 5,

          ease: "power2.out",
        });

      }
    });


    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,

        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        ease: "power2.out",
      });


      
      const icon = card.querySelector(".card-icon");
      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1,
          rotation: 0,

          ease: "power2.out",
        });

      }
    });
  });


  document.querySelectorAll(".solution-btn, .gradient-bg").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.05,
        y: -2,

        ease: "power2.out",
      });
    });


    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
        y: 0,

        ease: "power2.out",
      });
    });
  });



  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.3,
        y: -2,

        backgroundColor: primaryColor,
        color: "white",

        ease: "power2.out",
      });
    });


    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.3,
        y: 0,

        backgroundColor: primarySoft,
        color: primaryColor,
        ease: "power2.out",
      });
    });

  });

  const isDesktop = () => window.innerWidth >= 1024;

  
    document.querySelectorAll(".language-btn").forEach((btn) => {
    const wrapper = btn.closest(".relative");
    const dropdown = wrapper ? wrapper.querySelector(".dropdown-menu") : null;
    const icon = btn.querySelector(".dropdown-icon") || btn.querySelector(".fa-chevron-down");

    if (!dropdown) return;

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      const isOpen = dropdown.classList.contains("is-open");

      if (isOpen) {
        gsap.to(dropdown, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            dropdown.classList.remove("is-open");
            dropdown.style.pointerEvents = "none";
          },
        });
        if (icon) {
          gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
        }
      } else {
        document.querySelectorAll(".language-dropdown.is-open").forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("is-open");
            gsap.to(otherDropdown, { opacity: 0, y: -10, duration: 0.2 });
          }
        });

        dropdown.classList.add("is-open");
        dropdown.style.pointerEvents = "auto";
        gsap.fromTo(
          dropdown,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
        if (icon) {
          gsap.to(icon, { rotation: 180, duration: 0.3, ease: "power2.out" });
        }
      }
    });
  });

  // Force link navigation for language dropdown options
  document.querySelectorAll(".language-dropdown a").forEach(link => {
      link.addEventListener("click", (e) => {
          e.stopPropagation(); // Stop bubbling to prevent closing immediately
          window.location.href = link.getAttribute("href");
      });
  });

  
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-btn") && !event.target.closest(".language-dropdown")) {
      document.querySelectorAll(".language-dropdown.is-open").forEach((dropdown) => {
        const wrapper = dropdown.closest(".relative");
        const btn = wrapper ? wrapper.querySelector(".language-btn") : null;
        const icon = btn ? (btn.querySelector(".dropdown-icon") || btn.querySelector(".fa-chevron-down")) : null;

        gsap.to(dropdown, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            dropdown.classList.remove("is-open");
            dropdown.style.pointerEvents = "none";
          }
        });

        if (icon) {
          gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined") {
      return;
    }

    const aboutElements = document.querySelectorAll("[data-about-animate]");
    const aboutImage = document.querySelector(".about-hero-image");

    if (aboutElements.length) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );

      aboutElements.forEach((el) => {
        gsap.set(el, { y: 35 });
        observer.observe(el);
      });
    }

    if (aboutImage) {
      gsap.to(aboutImage, {
        yPercent: -6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  });



  const navDropdownEntries = [];

  const closeDropdownEntry = (entry, animate = true) => {
    if (!entry.panel.classList.contains("is-open")) return;
    const animation = {
      opacity: 0,
      y: -10,
      duration: animate ? 0.2 : 0,
      ease: "power2.in",
      onComplete: () => {
        entry.panel.classList.remove("is-open");
        entry.panel.style.pointerEvents = "none";
      },
    };
    gsap.to(entry.panel, animation);
    if (entry.icon) {
      gsap.to(entry.icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
    }
    entry.trigger.setAttribute("aria-expanded", "false");
  };

  const openDropdownEntry = (entry) => {
    entry.panel.classList.add("is-open");
    entry.panel.style.pointerEvents = "auto";
    gsap.fromTo(
      entry.panel,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );
    if (entry.icon) {
      gsap.to(entry.icon, { rotation: 180, duration: 0.3, ease: "power2.out" });
    }
    entry.trigger.setAttribute("aria-expanded", "true");
  };

 
  const updateArrowPosition = (dropdown) => {
    if (!isDesktop()) return;
    const trigger = dropdown.querySelector("button");
    const panel =
      dropdown.querySelector(".dropdown-panel") ||
      dropdown.querySelector(".dropdown-menu");
    if (!trigger || !panel) return;

    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const panelLeft = panelRect.left;
    const arrowOffset = triggerCenter - panelLeft;

    panel.style.setProperty("--arrow-offset", `${arrowOffset}px`);
  };

 
  const adjustDropdownPosition = (dropdown) => {
    if (!isDesktop()) return;

    const panel = dropdown.querySelector(".dropdown-panel");
    if (!panel) return;

    
    panel.style.left = "";
    panel.style.right = "";
    panel.style.transform = "";
    panel.style.maxWidth = "";

    
    const trigger = dropdown.querySelector("button");
    if (!trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportPadding = 20; 

   
    const idealLeft =
      triggerRect.left + triggerRect.width / 2 - panelRect.width / 2;

    
    if (idealLeft < viewportPadding) {
      panel.style.left = `${viewportPadding}px`;
      panel.style.transform = "translate(0, 0)";
    }
    
    else if (idealLeft + panelRect.width > viewportWidth - viewportPadding) {
      panel.style.right = `${viewportPadding}px`;
      panel.style.left = "auto";
      panel.style.transform = "translate(0, 0)";
    }
    
    else {
      panel.style.left = "50%";
      panel.style.transform = "translate(-50%, 0)";
    }

   
    const availableWidth = viewportWidth - viewportPadding * 2;
    const currentMaxWidth =
      parseInt(getComputedStyle(panel).maxWidth) || panelRect.width;
    const finalMaxWidth = Math.min(currentMaxWidth, availableWidth);

    panel.style.maxWidth = `${finalMaxWidth}px`;
  };

  
  const closeAllDropdowns = (except = null) => {
    navDropdownEntries.forEach((entry) => {
      if (entry !== except) {
        if (isDesktop()) {
          entry.dropdown.classList.remove("open");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        } else {
          closeDropdownEntry(entry);
        }
      }
    });
  };

  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector("button");
    const panel = dropdown.querySelector(".dropdown-menu");
    const icon = dropdown.querySelector(".dropdown-icon");
    if (!trigger || !panel) return;

    trigger.setAttribute("aria-expanded", "false");
    panel.style.pointerEvents = "none";
    navDropdownEntries.push({ dropdown, trigger, panel, icon });

  
    if (isDesktop()) {
      dropdown.addEventListener("mouseenter", () => {
        if (dropdown.classList.contains("open")) {
          setTimeout(() => {
            updateArrowPosition(dropdown);
            adjustDropdownPosition(dropdown);
          }, 10);
        }
      });
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const entry = navDropdownEntries.find((item) => item.trigger === trigger);
      if (!entry) return;

      if (isDesktop()) {
       
        const isOpen = entry.dropdown.classList.contains("open");
        closeAllDropdowns(entry);

        if (isOpen) {
          entry.dropdown.classList.remove("open");
          entry.trigger.setAttribute("aria-expanded", "false");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        } else {
          entry.dropdown.classList.add("open");
          entry.trigger.setAttribute("aria-expanded", "true");
          setTimeout(() => {
            updateArrowPosition(entry.dropdown);
            adjustDropdownPosition(entry.dropdown);
          }, 10);
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 180,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        }
      } else {
        
        const isOpen = entry.panel.classList.contains("is-open");
        closeAllDropdowns(entry);

        if (isOpen) {
          closeDropdownEntry(entry);
        } else {
          openDropdownEntry(entry);
        }
      }
    });
  });

  document.addEventListener("click", (event) => {
    
    const clickedOnNavLink = event.target.closest('.nav-sub-link');
    if (clickedOnNavLink) {
     
      return;
    }

    const clickedInside = navDropdownEntries.some((entry) =>
      entry.dropdown.contains(event.target)
    );
    if (!clickedInside) {
      if (isDesktop()) {
        navDropdownEntries.forEach((entry) => {
          entry.dropdown.classList.remove("open");
          entry.trigger.setAttribute("aria-expanded", "false");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      } else {
        navDropdownEntries.forEach((entry) => closeDropdownEntry(entry));
      }
    }
  });

   
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (isDesktop()) {
        navDropdownEntries.forEach((entry) => {
          entry.dropdown.classList.remove("open");
          entry.trigger.setAttribute("aria-expanded", "false");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      } else {
        navDropdownEntries.forEach((entry) => closeDropdownEntry(entry));
      }
    }
  });

  window.addEventListener("resize", () => {
    if (isDesktop()) {
      navDropdownEntries.forEach((entry) => {
     
        if (entry.dropdown.classList.contains("open")) {
          adjustDropdownPosition(entry.dropdown);
        }
        entry.dropdown.classList.remove("open");
        entry.panel.classList.remove("is-open");
        entry.panel.style.pointerEvents = "";
        entry.panel.style.left = "";
        entry.panel.style.right = "";
        entry.panel.style.transform = "";
        entry.panel.style.maxWidth = "";
        gsap.set(entry.panel, { clearProps: "opacity,y" });
        entry.trigger.setAttribute("aria-expanded", "false");
        if (entry.icon) {
          gsap.to(entry.icon, { rotation: 0, duration: 0.2, overwrite: true });
        }
      });
    } else {
      navDropdownEntries.forEach((entry) => {
        entry.dropdown.classList.remove("open");
        entry.panel.style.pointerEvents = "none";
        entry.panel.classList.remove("is-open");
        entry.panel.style.left = "";
        entry.panel.style.right = "";
        entry.panel.style.transform = "";
        entry.panel.style.maxWidth = "";
        gsap.set(entry.panel, { opacity: 0, y: -10 });
        entry.trigger.setAttribute("aria-expanded", "false");
        if (entry.icon) {
          gsap.to(entry.icon, { rotation: 0, duration: 0.2, overwrite: true });
        }
      });
    }
  });
});

// ============================================
// قائمة الجوال المنبثقة (Mobile Navigation Menu)
// ============================================

const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavOverlay = mobileNavMenu?.querySelector(".mobile-nav-overlay");
const mobileNavContent = mobileNavMenu?.querySelector(".mobile-nav-content");
const mobileNavIcon = document.getElementById("mobile-nav-icon");

 
if (mobileNavToggle && mobileNavMenu) {
  mobileNavToggle.addEventListener("click", () => {
    mobileNavMenu.classList.remove("hidden");

    
    const scrollY = window.scrollY || window.pageYOffset;
    document.body.dataset.scrollY = scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (typeof lenis !== "undefined") {
      lenis.stop();
    }
    isMobileNavOpen = true;

     
    gsap.fromTo(
      mobileNavOverlay,
      { opacity: 0 },

      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      mobileNavContent,
      { x: 400, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );

    
    if (mobileNavIcon) {
      gsap.to(mobileNavIcon, {
        rotation: 90,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });
}
 
const closeMobileNav = () => {
  if (!mobileNavMenu || mobileNavMenu.classList.contains("hidden")) return;

 
  gsap.to(mobileNavContent, {
    x: 400,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {

      mobileNavMenu.classList.add("hidden");
      document.body.style.position = "";
      const storedScrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";  
      document.documentElement.style.overflow = "";
      if (typeof lenis !== "undefined") {
        lenis.start();
      }
      isMobileNavOpen = false;
      if (!isNaN(storedScrollY)) {
        window.scrollTo(0, storedScrollY);
      }
    },
  });

  gsap.to(mobileNavOverlay, {
    opacity: 0,

    duration: 0.3,
  });

  
  if (mobileNavIcon) {
    gsap.to(mobileNavIcon, {
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }
};

if (mobileNavClose) {
  mobileNavClose.addEventListener("click", closeMobileNav);
}

 
if (mobileNavOverlay) {
  mobileNavOverlay.addEventListener("click", closeMobileNav);
}

 
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    mobileNavMenu &&
    !mobileNavMenu.classList.contains("hidden")
  ) {
    closeMobileNav();
  }
});

 
document.querySelectorAll(".mobile-nav-accordion-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const accordion = toggle.closest(".mobile-nav-accordion");
    const content = accordion?.querySelector(".mobile-nav-accordion-content");
    const icon = toggle.querySelector(".mobile-nav-accordion-icon");

    if (!content) return;

    const isOpen = !content.classList.contains("hidden");

    if (isOpen) {
     
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {

          content.classList.add("hidden");
        },
      });
      if (icon) {
        gsap.to(icon, { rotation: 0, duration: 0.3 });
      }
    } else {
      
      content.classList.remove("hidden");
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      if (icon) {
        gsap.to(icon, { rotation: 180, duration: 0.3 });
      }
    }
  });
  // Force link navigation for mobile nav options
  document.querySelectorAll(".mobile-nav-link, .mobile-nav-sub-link").forEach(link => {
      link.addEventListener("click", (e) => {
          e.stopPropagation(); 
          const href = link.getAttribute("href");
          if (href && href !== "#") {
             window.location.href = href;
          }
      });
  });
});

 
window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 1024 &&
    mobileNavMenu &&
    !mobileNavMenu.classList.contains("hidden")
  ) {
    closeMobileNav();
  }
});

 

// ============================================
// Hero Slider with Swiper.js, GSAP & Lenis
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const initialDir = document.documentElement.getAttribute("dir") || "rtl";
  let isRTLLayout = initialDir === "rtl";

  
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const isDesktop = window.innerWidth > 1024;

  
  const transitionSpeed = isMobile ? 1500 : isTablet ? 1800 : 2000;

   
  const heroSwiper = new Swiper(".hero-swiper", {
   
    loop: true,
     
    autoplay: false,
    direction: "horizontal",
    rtl: isRTLLayout,
    speed: transitionSpeed,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    
    navigation: {
      nextEl: ".hero-nav-next",
      prevEl: ".hero-nav-prev",
    },

     
    pagination: {
      el: ".hero-pagination",
      clickable: true,
      dynamicBullets: false, 
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
      
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

     
    mousewheel: {
      enabled: false, 
      invert: false,
      sensitivity: 1,
      releaseOnEdges: true,
    },

     
    touchEventsTarget: "container",
    simulateTouch: true,
    touchRatio: isMobile ? 1.5 : 1, 
    touchAngle: 45,
    grabCursor: isDesktop,
    touchStartPreventDefault: false,
    touchMoveStopPropagation: false,
    threshold: isMobile ? 10 : 5, 

   
    on: {
      init: function () {
        animateSlideContent(this.slides[this.activeIndex]);
        animateMedia(this.slides[this.activeIndex]);
      },
      slideChange: function () {
       
        const prevSlide = this.slides[this.previousIndex];
        if (prevSlide) {
          resetSlideContent(prevSlide);
          resetMedia(prevSlide);
        }

       
        animateSlideContent(this.slides[this.activeIndex]);
        animateMedia(this.slides[this.activeIndex]);

         
        const pagination = document.querySelector(".hero-pagination");
        if (pagination) {
          const bullets = pagination.querySelectorAll(
            ".swiper-pagination-bullet"
          );
          bullets.forEach((bullet, index) => {
            if (bullet.classList.contains("swiper-pagination-bullet-active")) {
              
              bullet.style.animation = "smooth-transition 0.6s ease-out";
            }
          });
        }
      },
      slideChangeTransitionStart: function () {
        
        const currentSlide = this.slides[this.activeIndex];
        if (currentSlide && typeof anime !== "undefined") {
          const media = currentSlide.querySelector(".hero-image, .hero-video");
          if (media) {
            anime({
              targets: media,
              scale: 1.1,
              duration: 1500,
              easing: "easeInOutQuad",
            });
          }
        }

         
        const pagination = document.querySelector(".hero-pagination");
        if (pagination) {
          const bullets = pagination.querySelectorAll(
            ".swiper-pagination-bullet"
          );
          bullets.forEach((bullet) => {
             
            bullet.style.transition =
              "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
          });
        }
      },
      slideChangeTransitionEnd: function () {
        
        const currentSlide = this.slides[this.activeIndex];
        if (currentSlide && typeof anime !== "undefined") {
          const media = currentSlide.querySelector(".hero-image, .hero-video");
          if (media) {
            anime({
              targets: media,
              scale: 1,
              duration: 2000,
              easing: "easeOutQuad",
            });
          }
        }
      },
    },
  });

   
  function animateSlideContent(slide) {
    if (!slide || typeof anime === "undefined") return;

    const title = slide.querySelector(".hero-title");
    const subtitle = slide.querySelector(".hero-subtitle");
    const buttons = slide.querySelector(".hero-buttons");

   
    const isMobileDevice = window.innerWidth <= 768;
    const titleDuration = isMobileDevice ? 400 : 500;
    const titleStagger = isMobileDevice ? 30 : 50;

    
    if (title) {
     
      const originalText = title.textContent;

      
      anime({
        targets: title,
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.95, 1],
        duration: titleDuration,
        delay: 100,
        easing: "easeOutQuad",
      });
    }

     
    if (subtitle) {
      anime({
        targets: subtitle,
        opacity: [0, 0.95],
        translateY: [isMobileDevice ? 20 : 25, 0],
        duration: isMobileDevice ? 500 : 600,
        delay: 300,
        easing: "easeOutQuad",
      });
    }

 
    if (buttons) {
      const buttonElements = buttons.querySelectorAll(".hero-btn");

      anime({
        targets: buttonElements,
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        duration: 500,
        delay: anime.stagger(80, { start: 400 }),
        easing: "easeOutQuad",
      });
    }
  }

   
  function resetSlideContent(slide) {
    if (!slide || typeof anime === "undefined") return;

    const title = slide.querySelector(".hero-title");
    const subtitle = slide.querySelector(".hero-subtitle");
    const buttons = slide.querySelector(".hero-buttons");

    
    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(50px)";
    }
    if (subtitle) {
      subtitle.style.opacity = "0";
      subtitle.style.transform = "translateY(50px)";
    }
    if (buttons) {
      buttons.style.opacity = "0";
      buttons.style.transform = "translateY(50px)";
    }

 
    if (title) {
       
      title.style.opacity = "0";
      title.style.transform = "translateY(50px) scale(0.9)";
    }

     
    if (buttons) {
      const buttonElements = buttons.querySelectorAll(".hero-btn");
      buttonElements.forEach((btn) => {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(30px) scale(0.8)";
      });
    }
  }

 
  function animateMedia(slide) {
    if (!slide || typeof anime === "undefined") return;

    const media = slide.querySelector(".hero-image, .hero-video");
    const overlay = slide.querySelector(".hero-overlay");
    const isMobileDevice = window.innerWidth <= 768;

    if (media) {
      
      const scaleDuration = isMobileDevice ? 1500 : 2000;

      
      media.style.transform = "scale(1.05)";

      anime({
        targets: media,
        scale: 1,
        duration: scaleDuration,
        easing: "easeOutQuad",
      });

       
      if (!isMobileDevice) {
        let parallaxHandler = function (e) {
          const rect = slide.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;

          anime({
            targets: media,
            translateX: (x - 0.5) * 20,
            translateY: (y - 0.5) * 20,
            duration: 1000,
            easing: "easeOutQuad",
          });
        };

        slide.addEventListener("mousemove", parallaxHandler);

        slide.addEventListener("mouseleave", function () {
          anime({
            targets: media,
            translateX: 0,
            translateY: 0,
            duration: 1000,
            easing: "easeOutQuad",
          });
        });
      }
    }

    if (overlay) {
      overlay.style.opacity = "0.8";
      anime({
        targets: overlay,
        opacity: 1,
        duration: isMobileDevice ? 800 : 1000,
        easing: "easeOutQuad",
      });
    }
  }
 
  function resetMedia(slide) {
    if (!slide || typeof anime === "undefined") return;

    const media = slide.querySelector(".hero-image, .hero-video");
    if (media) {
       
      media.style.transform = "translateX(0) translateY(0) scale(1.05)";
    }
  }

   
  const heroSection = document.querySelector(".hero-slider-section");

  if (typeof lenis !== "undefined" && heroSection) {
    
    let isClickingSwiperControl = false;

     
    const swiperButtons = heroSection.querySelectorAll(
      ".hero-nav-next, .hero-nav-prev"
    );

    swiperButtons.forEach((button) => {
      button.addEventListener("mousedown", () => {
        isClickingSwiperControl = true;
        if (isDesktop) {
          lenis.stop();
        }
      });

      button.addEventListener("mouseup", () => {
        isClickingSwiperControl = false;
        setTimeout(() => {
          if (isDesktop && !isMobileNavOpen) {
            lenis.start();
          }
        }, 300);
      });
    });


 
    heroSection.addEventListener(
      "wheel",
      (e) => {
       
        if (isDesktop && !isClickingSwiperControl && !isMobileNavOpen) {
          lenis.start();
        }
      },
      { passive: true }
    );

     
    heroSection.addEventListener(
      "touchmove",
      () => {
        if (!isClickingSwiperControl && !isMobileNavOpen) {
          lenis.start();
        }
      },
      { passive: true }
    );

   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
       
          if (isDesktop && !isClickingSwiperControl && !isMobileNavOpen) {
            lenis.start();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(heroSection);
 
    let scrollCheckTimeout;
    window.addEventListener(
      "scroll",
      () => {
        clearTimeout(scrollCheckTimeout);
        scrollCheckTimeout = setTimeout(() => {
         
          if (isDesktop && !isClickingSwiperControl && !isMobileNavOpen) {
            lenis.start();
          }
        }, 50);
      },
      { passive: true }
    );

    
  }

  
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
     
      if (heroSwiper) {
        heroSwiper.update();
        heroSwiper.updateSlides();
        heroSwiper.updateSlidesClasses();
      }
    }, 250);
  });

  
  document.querySelectorAll(".hero-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      if (typeof anime !== "undefined") {
        anime({
          targets: this,
          scale: 1.05,
          translateY: -4,
          duration: 300,
          easing: "easeOutQuad",
        });
      }
    });

    btn.addEventListener("mouseleave", function () {
      if (typeof anime !== "undefined") {
        anime({
          targets: this,
          scale: 1,
          translateY: 0,
          duration: 300,
          easing: "easeOutQuad",
        });
      }
    });
  });

   
  setTimeout(() => {
    const firstSlide = heroSwiper.slides[heroSwiper.activeIndex];
    if (firstSlide) {
      animateSlideContent(firstSlide);
      animateMedia(firstSlide);
    }
  }, 500);

  

  function updateHeroDirection() {
    const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
    isRTLLayout = htmlDir === "rtl";

    if (heroSwiper && typeof heroSwiper.changeLanguageDirection === "function") {
      heroSwiper.changeLanguageDirection(isRTLLayout ? "rtl" : "ltr");
    } else if (heroSwiper) {
      heroSwiper.params.rtl = isRTLLayout;
      heroSwiper.update();
      heroSwiper.updateSlides();
      heroSwiper.updateSlidesClasses();
    }
  }

  const heroDirObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "dir") {
        updateHeroDirection();
      }
    });
  });

  heroDirObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir"],
  });

  heroDirObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["dir"],
  });

  document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(updateHeroDirection, 100);
    });
  });
});

// ============================================
// View All News Button - Animated Border with GSAP (Always Active)
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const viewAllBtn = document.querySelector(".view-all-news-btn");

  if (viewAllBtn && typeof gsap !== "undefined") {
   
    const borderElement = viewAllBtn;
 
    gsap.set(borderElement, {
      border: "2px solid transparent",
    });

     
    const borderAnimation = gsap.timeline({ repeat: -1 });
    borderAnimation
      .to(borderElement, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      })
      .to(borderElement, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.3)",
        ease: "sine.inOut",
      })
      .to(borderElement, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      });

     
    viewAllBtn.addEventListener("mouseenter", function () {
      const tl = gsap.timeline();

      tl.to(this, {
        duration: 0.4,
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 158, 145, 0.4)",
        ease: "power2.out",
      });
    });

    viewAllBtn.addEventListener("mouseleave", function () {
      const tl = gsap.timeline();

      tl.to(this, {
        duration: 0.4,
        scale: 1,
        boxShadow: "0 4px 12px rgba(0, 158, 145, 0.2)",
        ease: "power2.out",
      });
    });
  }
});

// News Slider Initialization - Professional & Responsive
document.addEventListener("DOMContentLoaded", function () {
  const newsSwiperElement = document.querySelector(".news-swiper");

  if (newsSwiperElement && typeof Swiper !== "undefined") {
    const initialDir = document.documentElement.getAttribute("dir") || "rtl";
    let isRTLLayout = initialDir === "rtl";

    const newsSwiper = new Swiper(".news-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      direction: "horizontal",
      rtl: isRTLLayout,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: isRTLLayout,
      },
      speed: 800,
      grabCursor: true,
      pagination: {
        el: ".news-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        nextEl: ".news-nav-next",
        prevEl: ".news-nav-prev",
      },
      breakpoints: {
         
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
         
        480: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        
        640: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
     
        775: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
         
        776: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
        
        1536: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        
        1920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
       
      watchOverflow: true,
      observer: true,
      observeParents: true,
       
      effect: "slide",
      
      touchEventsTarget: "container",
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
     
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      
      mousewheel: {
        enabled: false,
      },
    });

     
    function updateActiveSlideContent() {
      const allSlides = newsSwiperElement.querySelectorAll(".swiper-slide");
      const slidesPerView = newsSwiper.params.slidesPerView || 1;
      const containerRect = newsSwiperElement.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let centerSlide = null;
      let minDistance = Infinity;

       
      allSlides.forEach((slide, index) => {
        const content = slide.querySelector(".news-card-content");
        const image = slide.querySelector(".news-card-image img");

        if (content) {
          content.style.transform = "translateY(100%)";
          content.style.opacity = "0";
        }

        if (image) {
          image.style.transform = "scale(1)";
        }

         
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - containerCenter);

         
        if (
          slideRect.left < containerRect.right &&
          slideRect.right > containerRect.left
        ) {
          if (distance < minDistance) {
            minDistance = distance;
            centerSlide = slide;
          }
        }
      });

       
      if (centerSlide) {
        const content = centerSlide.querySelector(".news-card-content");
        const image = centerSlide.querySelector(".news-card-image img");

        if (content) {
          content.style.transform = "translateY(0)";
          content.style.opacity = "1";
        }

        if (image) {
          image.style.transform = "scale(1.05)";
        }
      }
    }

 
    newsSwiper.on("slideChange", function () {
      setTimeout(updateActiveSlideContent, 50);
    });

   
    newsSwiper.on("transitionStart", function () {
      updateActiveSlideContent();
    });

   
    newsSwiper.on("slideChangeTransitionStart", function () {
      updateActiveSlideContent();
    });

    
    newsSwiper.on("transitionProgress", function () {
      updateActiveSlideContent();
    });
 
    newsSwiper.on("slideChangeTransitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

     
    newsSwiper.on("transitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

    
    newsSwiper.on("init", function () {
      setTimeout(updateActiveSlideContent, 150);
    });

     
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (newsSwiper) {
          newsSwiper.update();
          newsSwiper.updateSlides();
          newsSwiper.updateSlidesClasses();
          updateActiveSlideContent();
        }
      }, 250);
    });

     
    setTimeout(function () {
      updateActiveSlideContent();
    }, 100);

    function updateNewsDirection() {
      const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
      isRTLLayout = htmlDir === "rtl";

      if (newsSwiper && typeof newsSwiper.changeLanguageDirection === "function") {
        newsSwiper.changeLanguageDirection(isRTLLayout ? "rtl" : "ltr");
      } else if (newsSwiper) {
        newsSwiper.params.rtl = isRTLLayout;
        if (newsSwiper.params.autoplay) {
          newsSwiper.params.autoplay.reverseDirection = isRTLLayout;
        }
        newsSwiper.update();
        newsSwiper.updateSlides();
        newsSwiper.updateSlidesClasses();
      }

      if (newsSwiper.autoplay && newsSwiper.autoplay.running) {
        newsSwiper.autoplay.stop();
        newsSwiper.autoplay.start();
      }
    }

    const newsDirObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updateNewsDirection();
        }
      });
    });

    newsDirObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    newsDirObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(updateNewsDirection, 100);
      });
    });
  }
});

// Community Service Slider Initialization - Professional with Center Pop-up Effect
document.addEventListener("DOMContentLoaded", function () {
  const featuresSwiperElement = document.querySelector(".university-features-swiper");

  if (featuresSwiperElement && typeof Swiper !== "undefined") {
    const totalSlides = featuresSwiperElement.querySelectorAll(".swiper-slide").length;
    const shouldLoop = totalSlides > 1;
    const initialDir = document.documentElement.getAttribute("dir") || "rtl";
    let isRTL = initialDir === "rtl";

    const featuresSwiper = new Swiper(".university-features-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: shouldLoop,
      direction: "horizontal",
      rtl: isRTL,
      autoplay: shouldLoop
        ? {
          delay: 3800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTL,
        }
        : false,
      speed: 700,
      grabCursor: true,
      pagination: {
        el: ".features-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        nextEl: ".features-nav-next",
        prevEl: ".features-nav-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        640: {
          slidesPerView: 1.1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
        1536: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      watchOverflow: true,
      observer: true,
      observeParents: true,
    });

    const navNext = document.querySelector(".features-nav-next");
    const navPrev = document.querySelector(".features-nav-prev");
    const pagination = document.querySelector(".features-pagination");

    if (!shouldLoop) {
      if (navNext) navNext.style.display = "none";
      if (navPrev) navPrev.style.display = "none";
    } else {
      if (navNext) navNext.style.display = "flex";
      if (navPrev) navPrev.style.display = "flex";
    }

    if (pagination) {
      pagination.style.display = totalSlides > 1 ? "block" : "none";
    }

    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (featuresSwiper) {
          featuresSwiper.update();
          featuresSwiper.updateSlides();
          featuresSwiper.updateSlidesClasses();
        }
      }, 250);
    });

    function updateFeaturesDirection() {
      const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
      isRTL = htmlDir === "rtl";

      if (featuresSwiper) {
        featuresSwiper.params.rtl = isRTL;
        if (featuresSwiper.params.autoplay) {
          featuresSwiper.params.autoplay.reverseDirection = isRTL;
        }

        featuresSwiper.update();
        featuresSwiper.updateSlides();
        featuresSwiper.updateSlidesClasses();

        if (featuresSwiper.autoplay && featuresSwiper.autoplay.running) {
          featuresSwiper.autoplay.stop();
          featuresSwiper.autoplay.start();
        }
      }
    }

    const featuresDirObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updateFeaturesDirection();
        }
      });
    });

    featuresDirObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    featuresDirObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach(function (link) {
      link.addEventListener("click", function () {
        setTimeout(updateFeaturesDirection, 100);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const communityServiceSwiperElement = document.querySelector(".community-service-swiper");

  if (communityServiceSwiperElement && typeof Swiper !== "undefined") {
     
    const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
    const isRTL = htmlDir === "rtl";

    const communityServiceSwiper = new Swiper(".community-service-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      direction: isRTL ? "horizontal" : "horizontal",  
      rtl: isRTL,  
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: isRTL, 
      },
      speed: 800,
      grabCursor: true,
      pagination: {
        el: ".community-service-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        nextEl: ".community-service-nav-next",
        prevEl: ".community-service-nav-prev",
      },
      breakpoints: {
         
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
         
        480: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        
        640: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
    
        775: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      
        776: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
         
        1536: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
         
        1920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      
      watchOverflow: true,
      observer: true,
      observeParents: true,
       
      effect: "slide",
    
      touchEventsTarget: "container",
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
       
      mousewheel: {
        enabled: false,
      },
    });

     
    function updateActiveSlideContent() {
      const allSlides = communityServiceSwiperElement.querySelectorAll(".swiper-slide");
      const slidesPerView = communityServiceSwiper.params.slidesPerView || 1;
      const containerRect = communityServiceSwiperElement.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let centerSlide = null;
      let minDistance = Infinity;

     
      allSlides.forEach((slide) => {
        const content = slide.querySelector(".community-service-content");
        if (content) {
          content.classList.remove("active");
          const contentDiv = content.querySelector("div");
          if (contentDiv) {
            contentDiv.style.opacity = "0";
            contentDiv.style.transform = "scale(0.9)";
          }
        }
      });

      
      allSlides.forEach((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          centerSlide = slide;
        }
      });

      
      if (centerSlide) {
        const content = centerSlide.querySelector(".community-service-content");
        if (content) {
          content.classList.add("active");
          const contentDiv = content.querySelector("div");
          if (contentDiv) {
          
            gsap.to(contentDiv, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1
            });
          }
        }
      }
    }

     
    communityServiceSwiper.on("slideChange", function () {
      updateActiveSlideContent();
    });

     
    communityServiceSwiper.on("transitionStart", function () {
      updateActiveSlideContent();
    });

    
    communityServiceSwiper.on("slideChangeTransitionStart", function () {
      updateActiveSlideContent();
    });

   
    communityServiceSwiper.on("transitionProgress", function () {
      updateActiveSlideContent();
    });

     
    communityServiceSwiper.on("slideChangeTransitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

     
    communityServiceSwiper.on("transitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });
 
    communityServiceSwiper.on("init", function () {
      setTimeout(updateActiveSlideContent, 150);
    });

     
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (communityServiceSwiper) {
          communityServiceSwiper.update();
          communityServiceSwiper.updateSlides();
          communityServiceSwiper.updateSlidesClasses();
          updateActiveSlideContent();
        }
      }, 250);
    });

     
    setTimeout(function () {
      updateActiveSlideContent();
    }, 100);

  
    let scrollTimer;
    window.addEventListener("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateActiveSlideContent, 50);
    });

     
    function updateSwiperDirection() {
      const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
      const isRTL = htmlDir === "rtl";

       
      if (communityServiceSwiper) {
         
        communityServiceSwiper.params.rtl = isRTL;

         
        if (communityServiceSwiper.params.autoplay) {
          communityServiceSwiper.params.autoplay.reverseDirection = isRTL;
        }

         
        communityServiceSwiper.update();
        communityServiceSwiper.updateSlides();
        communityServiceSwiper.updateSlidesClasses();

       
        if (communityServiceSwiper.autoplay && communityServiceSwiper.autoplay.running) {
          communityServiceSwiper.autoplay.stop();
          communityServiceSwiper.autoplay.start();
        }
      }
    }

     
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updateSwiperDirection();
        }
      });
    });

     
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"]
    });

     
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"]
    });

     
    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
         
        setTimeout(updateSwiperDirection, 100);
      });
    });
  }
});

 
document.addEventListener("DOMContentLoaded", function () {
  const logoBg = document.querySelector(".logo-bg-image");
  const communitySection = document.querySelector(".community-service-section");
  const sectionHeader = communitySection?.querySelector("h2");
  const sectionContent = communitySection?.querySelector(".community-service-swiper-container");

  if (logoBg && communitySection && typeof gsap !== "undefined") {
   
    gsap.set(logoBg, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center"
    });

    
    const logoTimeline = gsap.timeline({
      delay: 1.5,  
      onComplete: function () {
         
        startContinuousAnimations();
      }
    });

     
    logoTimeline
      .to(logoBg, {
        opacity: 0.15,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        transformOrigin: "center center"
      })
      .to(logoBg, {
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.5")
      .to(logoBg, {
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut"
      });

     
    function startContinuousAnimations() {
      
      gsap.to(logoBg, {
        scale: 1.08,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center"
      });

      
      gsap.to(logoBg, {
        y: "+=20",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center"
      });
    }

  
    if (typeof lenis !== "undefined") {
      lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
        const sectionRect = communitySection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const windowHeight = window.innerHeight;

       
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          
          const sectionProgress = Math.max(0, Math.min(1,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          ));

           
          gsap.to(logoBg, {
            y: `+=${sectionProgress * 30 - 15}`,
            x: `+=${sectionProgress * 20 - 10}`,
            duration: 0.8,
            ease: "power2.out",
            transformOrigin: "center center"
          });
        }
      });
    }

    
    communitySection.addEventListener("mouseenter", function () {
      gsap.to(logoBg, {
        scale: 1.2,
        opacity: 0.25,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    });

    communitySection.addEventListener("mouseleave", function () {
      const width = window.innerWidth;
      let targetOpacity = 0.15;

      if (width >= 1280) {
        targetOpacity = 0.1;
      } else if (width >= 1024) {
        targetOpacity = 0.11;
      } else if (width >= 769) {
        targetOpacity = 0.12;
      } else if (width >= 641) {
        targetOpacity = 0.14;
      } else if (width >= 481) {
        targetOpacity = 0.13;
      } else {
        targetOpacity = 0.12;
      }

      gsap.to(logoBg, {
        scale: 1.08,
        opacity: targetOpacity,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    });

     
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        const width = window.innerWidth;
        let targetSize = 600;
        let targetOpacity = 0.15;

        if (width >= 1280) {
          targetSize = 1000;
          targetOpacity = 0.1;
        } else if (width >= 1024) {
          targetSize = 800;
          targetOpacity = 0.11;
        } else if (width >= 769) {
          targetSize = 600;
          targetOpacity = 0.12;
        } else if (width >= 641) {
          targetSize = 450;
          targetOpacity = 0.14;
        } else if (width >= 481) {
          targetSize = 350;
          targetOpacity = 0.13;
        } else {
          targetSize = 250;
          targetOpacity = 0.12;
        }

        gsap.to(logoBg, {
          width: targetSize,
          height: targetSize,
          opacity: targetOpacity,
          duration: 0.5,
          ease: "power2.out"
        });
      }, 250);
    });

     
    if (sectionHeader) {
      gsap.from(sectionHeader, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
    }

    if (sectionContent) {
      gsap.from(sectionContent, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
      });
    }
  }
});

// ============================================
// Memberships Section - Premium GSAP Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  const membershipCards = document.querySelectorAll('.membership-card');

  if (!membershipCards.length) {
    return;
  }

 
  requestAnimationFrame(() => {
     
    gsap.set(membershipCards, {
      opacity: 1,
      visibility: 'visible'
    });

     
    if (typeof Swiper !== 'undefined') {
      
      const totalSlides = membershipCards.length;

      
      const shouldLoop = totalSlides >= 2;
      const initialDir = document.documentElement.getAttribute('dir') || 'rtl';
      let isRTLLayout = initialDir === 'rtl';

     
      const swiperConfig = {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 600,
        grabCursor: true,
        direction: 'horizontal',
        rtl: isRTLLayout,
        pagination: {
          el: '.memberships-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 18,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true,
      };
 
      swiperConfig.loop = true;  
      swiperConfig.autoplay = {
        delay: 3000,
        disableOnInteraction: false,  
        pauseOnMouseEnter: false,  
        reverseDirection: isRTLLayout, 
      };

      const membershipsSwiper = new Swiper('.memberships-slider', swiperConfig);

    
      requestAnimationFrame(() => {
        gsap.from(membershipCards, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        });
      });

      function updateMembershipDirection() {
        const htmlDir = document.documentElement.getAttribute('dir') || 'rtl';
        isRTLLayout = htmlDir === 'rtl';

        if (membershipsSwiper) {
          membershipsSwiper.params.rtl = isRTLLayout;
          if (membershipsSwiper.params.autoplay) {
            membershipsSwiper.params.autoplay.reverseDirection = isRTLLayout;
          }
          membershipsSwiper.update();
          membershipsSwiper.updateSlides();
          membershipsSwiper.updateSlidesClasses();

          if (membershipsSwiper.autoplay && membershipsSwiper.autoplay.running) {
            membershipsSwiper.autoplay.stop();
            membershipsSwiper.autoplay.start();
          }
        }
      }

      const membershipsDirObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
            updateMembershipDirection();
          }
        });
      });

      membershipsDirObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir'],
      });

      membershipsDirObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['dir'],
      });

      document.querySelectorAll('.language-dropdown a, .mobile-nav-sub-link').forEach((link) => {
        link.addEventListener('click', () => {
          setTimeout(updateMembershipDirection, 100);
        });
      });
    }
  });

  // Add hover animations to each card
  membershipCards.forEach((card, index) => {
    const cardInner = card.querySelector('.membership-card-inner');
    const image = card.querySelector('.membership-image');
    const title = card.querySelector('.membership-title');

    card.addEventListener('mouseenter', function () {
       
      gsap.to(cardInner, {
        x: 4,
        duration: 0,
        ease: "power2.out"
      });

      
      if (image) {
        gsap.to(image, {
          filter: 'brightness(1.1) saturate(1.15)',
          x: -2,
          duration: 0.2,
          ease: "power2.out"
        });
      }

      
      if (title) {
        gsap.to(title, {
          color: '#ffffff',
          x: -2,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    });

    card.addEventListener('mouseleave', function () {
     
      gsap.to(cardInner, {
        x: 0,
        duration: 0.2,
        ease: "power2.in"
      });

      
      if (image) {
        gsap.to(image, {
          filter: 'brightness(1) saturate(1)',
          x: 0,
          duration: 0.25,
          ease: "power2.in"
        });
      }

       
      if (title) {
        gsap.to(title, {
          color: '#1e293b',
          x: 0,
          duration: 0.2,
          ease: "power2.in"
        });
      }
    });
  });
});

// ============================================
// Partners Slider - Continuous Free Mode Swiper
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const partnersSwiperElement = document.querySelector(".partners-swiper");

  if (partnersSwiperElement && typeof Swiper !== "undefined") {
    let partnersSwiper = null;

    function initPartnersSwiper() {
      const initialDir = document.documentElement.getAttribute("dir") || "rtl";
      const isRTLLayout = initialDir === "rtl";

      return new Swiper(".partners-swiper", {
        slidesPerView: 2.2,
        spaceBetween: 24,
        loop: true,
        loopAdditionalSlides: 6,
        centeredSlides: false,
        allowTouchMove: true,
        direction: "horizontal",
        rtl: isRTLLayout,
        speed: 900,
        grabCursor: true,
        autoplay: {
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTLLayout,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true,
      });
    }

    partnersSwiper = initPartnersSwiper();

    function rebuildPartnersSwiper() {
      if (partnersSwiper) {
        partnersSwiper.destroy(true, true);
      }
      partnersSwiper = initPartnersSwiper();
    }

    function updatePartnersDirection() {
      rebuildPartnersSwiper();
    }

    const partnersDirObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updatePartnersDirection();
        }
      });
    });

    partnersDirObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    partnersDirObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(updatePartnersDirection, 100);
      });
    });
  }
});

// ============================================
// Team Slider - Conditional (Only if more than 3 slides)
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const teamSwiperElement = document.querySelector(".team-swiper");
  const teamSwiperContainer = document.querySelector(".team-swiper-container");

  if (teamSwiperElement && typeof Swiper !== "undefined") {
    // Count total slides
    const totalSlides = teamSwiperElement.querySelectorAll(".swiper-slide").length;
    const minSlidesForSlider = 4; 

    let teamSwiper = null;

     
    if (totalSlides > minSlidesForSlider || totalSlides >= 2) {
      const initialDir = document.documentElement.getAttribute("dir") || "rtl";
      let isRTLLayout = initialDir === "rtl";
      // Initialize Swiper
      teamSwiper = new Swiper(".team-swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        direction: "horizontal",
        rtl: isRTLLayout,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTLLayout,
        },
        speed: 800,
        grabCursor: true,
        pagination: {
          el: ".team-pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        },
        navigation: {
          nextEl: ".team-nav-next",
          prevEl: ".team-nav-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true,
      });

      
      function updateActiveTeamSlide() {
        const allSlides = teamSwiperElement.querySelectorAll(".swiper-slide");
        const containerRect = teamSwiperElement.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let centerSlide = null;
        let minDistance = Infinity;

         
        allSlides.forEach((slide) => {
          const overlay = slide.querySelector(".team-info-overlay");
          const overlayContent = slide.querySelector(".team-info-overlay-content");
          if (overlay) {
            overlay.classList.remove("active");
            if (overlayContent) {
              gsap.set(overlayContent, { opacity: 0, y: 30 });
            }
          }
        });

         
        allSlides.forEach((slide) => {
          const slideRect = slide.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const distance = Math.abs(slideCenter - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            centerSlide = slide;
          }
        });

         
        if (centerSlide) {
          const overlay = centerSlide.querySelector(".team-info-overlay");
          const overlayContent = centerSlide.querySelector(".team-info-overlay-content");
          if (overlay && overlayContent) {
            overlay.classList.add("active");
            gsap.to(overlayContent, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1
            });
          }
        }
      }

    
      teamSwiper.on("slideChange", () => {
        setTimeout(updateActiveTeamSlide, 100);
      });

      teamSwiper.on("transitionStart", () => {
        updateActiveTeamSlide();
      });

      teamSwiper.on("transitionEnd", () => {
        setTimeout(updateActiveTeamSlide, 100);
      });

      teamSwiper.on("init", () => {
        setTimeout(updateActiveTeamSlide, 150);
      });
 
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (teamSwiper) {
            teamSwiper.update();
            updateActiveTeamSlide();
          }
        }, 250);
      });

      
      setTimeout(updateActiveTeamSlide, 100);

      
      let scrollTimer;
      window.addEventListener("scroll", () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateActiveTeamSlide, 50);
      });

       
      const navNext = document.querySelector(".team-nav-next");
      const navPrev = document.querySelector(".team-nav-prev");
      const pagination = document.querySelector(".team-pagination");

      if (navNext) navNext.style.display = "flex";
      if (navPrev) navPrev.style.display = "flex";
      if (pagination) pagination.style.display = "block";

      function updateTeamDirection() {
        const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
        isRTLLayout = htmlDir === "rtl";

        if (teamSwiper) {
          teamSwiper.params.rtl = isRTLLayout;
          if (teamSwiper.params.autoplay) {
            teamSwiper.params.autoplay.reverseDirection = isRTLLayout;
          }
          if (typeof teamSwiper.changeLanguageDirection === "function") {
            teamSwiper.changeLanguageDirection(isRTLLayout ? "rtl" : "ltr");
          } else {
            teamSwiper.update();
            teamSwiper.updateSlides();
            teamSwiper.updateSlidesClasses();
          }

          if (teamSwiper.autoplay && teamSwiper.autoplay.running) {
            teamSwiper.autoplay.stop();
            teamSwiper.autoplay.start();
          }
        }
      }

      const teamDirObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "dir") {
            updateTeamDirection();
          }
        });
      });

      teamDirObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["dir"],
      });

      teamDirObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["dir"],
      });

      document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
        link.addEventListener("click", () => {
          setTimeout(updateTeamDirection, 100);
        });
      });
    } else {
       
      teamSwiperContainer.classList.add("team-grid-mode");
      teamSwiperElement.classList.add("team-grid");

      
      const navNext = document.querySelector(".team-nav-next");
      const navPrev = document.querySelector(".team-nav-prev");
      const pagination = document.querySelector(".team-pagination");

      if (navNext) navNext.style.display = "none";
      if (navPrev) navPrev.style.display = "none";
      if (pagination) pagination.style.display = "none";

       
      const allCards = teamSwiperElement.querySelectorAll(".team-member-card");
      allCards.forEach((card) => {
        const overlay = card.querySelector(".team-info-overlay");
        const overlayContent = card.querySelector(".team-info-overlay-content");

        if (overlay && overlayContent) {
          card.addEventListener("mouseenter", () => {
            overlay.classList.add("active");
            gsap.to(overlayContent, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1
            });
          });

          card.addEventListener("mouseleave", () => {
            overlay.classList.remove("active");
            gsap.to(overlayContent, {
              opacity: 0,
              y: 30,
              duration: 0.4,
              ease: "power2.in"
            });
          });
        }
      });
    }
  }
});

  
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  
  gsap.registerPlugin(ScrollTrigger);

  
  const goalSteps = document.querySelectorAll(".about-goals-stack .goal-step");

  if (goalSteps.length > 0) {
    goalSteps.forEach((step, index) => {
     
      gsap.set(step, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      
      gsap.to(step, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
          
          delay: index * 0.15,
        }
      });

       
      const goalCard = step.querySelector(".goal-card");
      const goalIcon = step.querySelector(".goal-card-icon");
      const goalNumber = step.querySelector(".goal-step-number");

      if (goalCard) {
        gsap.set(goalCard, { opacity: 0, y: 20 });
        gsap.to(goalCard, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalIcon) {
        gsap.set(goalIcon, { scale: 0, rotation: -180 });
        gsap.to(goalIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          delay: index * 0.15 + 0.3,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalNumber) {
        gsap.set(goalNumber, { scale: 0, rotation: -180 });
        gsap.to(goalNumber, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }
    });
  }
});

 
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

   
  const isAboutPage = document.querySelector('.about-page-main');
  const isCollegeMedicinePage = document.querySelector('.med-page-main');

  if (!isAboutPage || isCollegeMedicinePage) {
    return;  
  }

   
  gsap.registerPlugin(ScrollTrigger);

  
  const goalSteps = document.querySelectorAll(".about-goals-stack .goal-step");

  if (goalSteps.length > 0) {
    goalSteps.forEach((step, index) => {
      
      gsap.set(step, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      
      gsap.to(step, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
          
          delay: index * 0.15,
        }
      });

       
      const goalCard = step.querySelector(".goal-card");
      const goalIcon = step.querySelector(".goal-card-icon");
      const goalNumber = step.querySelector(".goal-step-number");

      if (goalCard) {
        gsap.set(goalCard, { opacity: 0, y: 20 });
        gsap.to(goalCard, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalIcon) {
        gsap.set(goalIcon, { scale: 0, rotation: -180 });
        gsap.to(goalIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          delay: index * 0.15 + 0.3,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalNumber) {
        gsap.set(goalNumber, { scale: 0, rotation: -180 });
        gsap.to(goalNumber, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }
    });
  }
});

// ============================================
// Labs Accordion Toggle Function
// ============================================
/**
 
 * @param {HTMLElement} button  
 */
function toggleAccordion(button) {
  
  const item = button.closest('.lab-accordion-item, .calendar-accordion-item');
  const content = item.querySelector('.lab-accordion-content, .calendar-accordion-content');
  const arrow = button.querySelector('.lab-accordion-arrow, .calendar-accordion-arrow');
  const isOpen = !content.classList.contains('hidden');

  
  document.querySelectorAll('.lab-accordion-item, .calendar-accordion-item').forEach(otherItem => {
    if (otherItem !== item) {
      const otherContent = otherItem.querySelector('.lab-accordion-content, .calendar-accordion-content');
      const otherArrow = otherItem.querySelector('.lab-accordion-arrow, .calendar-accordion-arrow');
      if (otherContent) otherContent.classList.add('hidden');
      otherItem.classList.remove('active');
      if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
    }
  });

   
  if (isOpen) {
    content.classList.add('hidden');
    item.classList.remove('active');
    arrow.style.transform = 'rotate(0deg)';
  } else {
    content.classList.remove('hidden');
    item.classList.add('active');
    arrow.style.transform = 'rotate(180deg)';
  }
}

 
window.toggleAccordion = toggleAccordion;

// ============================================
// Student Guide Page - Download Button Animation
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn && typeof gsap !== "undefined") {
    
    gsap.set(downloadBtn, {
      border: "2px solid transparent",
    });

    
    const borderAnimation = gsap.timeline({ repeat: -1 });
    borderAnimation
      .to(downloadBtn, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      })
      .to(downloadBtn, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.3)",
        ease: "sine.inOut",
      })
      .to(downloadBtn, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      });

     
    downloadBtn.addEventListener("mouseenter", function () {
      gsap.to(this, {
        duration: 0.4,
        boxShadow: "0 10px 30px rgba(0, 158, 145, 0.4)",
        ease: "power2.out",
      });
    });

    downloadBtn.addEventListener("mouseleave", function () {
      gsap.to(this, {
        duration: 0.4,
        boxShadow: "0 4px 12px rgba(0, 158, 145, 0.2)",
        ease: "power2.out",
      });
    });
  }

  // Student Portal Page Animation
  const studentTitle = document.querySelector('.student-title');
  const studentCards = document.querySelectorAll('.student-card');

  if (studentTitle && studentCards.length > 0) {
     
    gsap.set('.student-title', { opacity: 0, y: -20 });
    gsap.set('.student-card', { opacity: 0, y: 30 });

     
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      delay: 0  
    });

   
    tl.to('.student-title', {
      opacity: 1,
      y: 0,
      duration: 0.4
    });

     
    tl.to('.student-card', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.2');
  }

  // ====================================
  // Regulations Page Animations
  // ====================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
      gsap.from('.page-header h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.page-header p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });
    }

    // Regulation cards animation with stagger on scroll
    const regulationCards = document.querySelectorAll('[data-card-animate]');
    if (regulationCards.length > 0) {
      gsap.set(regulationCards, {
        opacity: 0,
        y: 60,
        rotateX: -15
      });

      ScrollTrigger.batch(regulationCards, {
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.05,
            duration: 0.4,
            ease: 'power3.out',
            overwrite: true
          });
        },
        once: true,
        start: 'top 95%'
      });
    }
  }

});

// ============================================
// Video Cards Functionality - Lectures Videos Page
// ============================================
document.addEventListener("DOMContentLoaded", function () {
     
    const videoCards = document.querySelectorAll(".video-card");
    if (videoCards.length === 0) return;

    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const closeModal = document.getElementById("closeModal");

    if (!videoModal || !videoFrame || !closeModal) return;

     
    const playButtons = document.querySelectorAll(".play-button");
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: "50px"
    });

    playButtons.forEach((button) => {
        animationObserver.observe(button);
    });

     
    videoCards.forEach((card) => {
        const playButton = card.querySelector(".play-button");
        const videoId = card.getAttribute("data-video-id");

        if (playButton && videoId) {
            playButton.addEventListener("click", function (e) {
                e.stopPropagation();
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                videoModal.classList.add("active");
                document.body.style.overflow = "hidden";
            });
        }
    });

    
    closeModal.addEventListener("click", function () {
        videoModal.classList.remove("active");
        videoFrame.src = "";
        document.body.style.overflow = "";
    });

    
    videoModal.addEventListener("click", function (e) {
        if (e.target === videoModal) {
            videoModal.classList.remove("active");
            videoFrame.src = "";
            document.body.style.overflow = "";
        }
    });

    
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && videoModal.classList.contains("active")) {
            videoModal.classList.remove("active");
            videoFrame.src = "";
            document.body.style.overflow = "";
        }
    });
});

 