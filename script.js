
// Make Text appear when scrolling

gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.reveal-type')
splitTypes.forEach((char, i) => {

    const text = new SplitType(char, {types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
            markers: false
        },
        opacity: 0.2,
        stagger: 0.1
    })
})

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Make things appear when scrolling -> good for Divs appear

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry
                .target
                .classList
                .add('show');
        } else {
            entry
                .target
                .classList
                .remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Navbar Animation -> Reassigning the active Value

let list = document.querySelectorAll('.list');

window.addEventListener('scroll', function (event) {
    var scrollevent = this.scrollY;

    console.log(scrollevent)

    if (scrollevent >= targetPositions[4]) {
        list[4].className = 'list active';
        [
            list[0], list[1], list[2], list[3]
        ].forEach(element => {
            element.className = 'list';
        });
    } else if (scrollevent >= targetPositions[3]) {
        list[3].className = 'list active';
        [
            list[0], list[1], list[2], list[4]
        ].forEach(element => {
            element.className = 'list';
        });
    } else if (scrollevent >= targetPositions[2]) {
        list[2].className = 'list active';
        [
            list[0], list[1], list[3], list[4]
        ].forEach(element => {
            element.className = 'list';
        });
    } else if (scrollevent >= targetPositions[1]) {
        list[1].className = 'list active';
        [
            list[0], list[2], list[3], list[4]
        ].forEach(element => {
            element.className = 'list';
        });
    } else if (scrollevent >= targetPositions[0]) {
        list[0].className = 'list active';
        [
            list[1], list[2], list[3], list[4]
        ].forEach(element => {
            element.className = 'list';
        });
    }

})

const targetPositions = []

document
    .querySelectorAll('.navigationBar a[href^="#"]')
    .forEach(link => {
        const targetElement = document.querySelector(link.getAttribute('href'));
        if (targetElement) { // Check if the element exists
            const targetPosition = targetElement
                .getBoundingClientRect()
                .top - 200;
            targetPositions.push(targetPosition);
            console.log(targetPosition);
        } else {
            console.log('Element not found for ', link.getAttribute('href'));
        }
    });
// targetPositions.push(targetElement);
console.log('Element Y-axis Position:', targetPositions);

console.log(targetPositions)

//Background Animation Header

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            src: "Pictures/CSS-Logo.png",
            alt: "CSS Logo",
            class: "css-logo"
        }, {
            src: "Pictures/html.png",
            alt: "HTML Logo",
            class: "html-logo"
        }, {
            src: "Pictures/JavaScript-Logo-768x480.png",
            alt: "JavaScript Logo",
            class: "javascript-logo"
        }, {
            src: "Pictures/207-2073547_sql-server-icon-png-29-transparent-background-database.pn" +
                    "g",
            alt: "SQL Server Icon",
            class: "sql-logo"
        }, {
            src: "Pictures/Github-Logo-1024x535.png",
            alt: "Github Logo",
            class: "github-logo"
        }, {
            src: "Pictures/logo git icon.png",
            alt: "Git Icon",
            class: "git-logo"
        }, {
            src: "Pictures/Postgre SQL Logo.avif",
            alt: "PostgreSQL Logo",
            class: "postgre-logo"
        }, {
            src: "Pictures/logo_python.png",
            alt: "Python Logo",
            class: "python-logo"
        }, {
            src: "Pictures/React-Logo-768x432.png",
            alt: "React Logo",
            class: "react-logo"
        }, {
            src: "Pictures/CSS-Logo.png",
            alt: "CSS Logo",
            class: "css-logo"
        }, {
            src: "Pictures/html.png",
            alt: "HTML Logo",
            class: "html-logo"
        }, {
            src: "Pictures/JavaScript-Logo-768x480.png",
            alt: "JavaScript Logo",
            class: "javascript-logo"
        }, {
            src: "Pictures/207-2073547_sql-server-icon-png-29-transparent-background-database.pn" +
                    "g",
            alt: "SQL Server Icon",
            class: "sql-logo"
        }, {
            src: "Pictures/Github-Logo-1024x535.png",
            alt: "Github Logo",
            class: "github-logo"
        }, {
            src: "Pictures/logo git icon.png",
            alt: "Git Icon",
            class: "git-logo"
        }, {
            src: "Pictures/Postgre SQL Logo.avif",
            alt: "PostgreSQL Logo",
            class: "postgre-logo"
        }, {
            src: "Pictures/logo_python.png",
            alt: "Python Logo",
            class: "python-logo"
        }, {
            src: "Pictures/React-Logo-768x432.png",
            alt: "React Logo",
            class: "react-logo"
        }
    ];

    const container = document.getElementById('learned_skills'); // Targeting the container where rows will be added

    for (let i = 0; i < 18; i++) { // Create 10 rows
        const row = document.createElement('div');
        row.className = 'row';

        for (let j = 0; j < 2; j++) { // Assuming each row has 2 divs for the animations
            const div = document.createElement('div');

            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;
                img.className = image.class; // Use class to apply styles
                div.appendChild(img); // Add image to the div
            });

            // Apply animations based on div index within the row
            if (j === 0) {
                div.style.animationName = i % 2 === 0
                    ? 'animate1'
                    : 'animate3'; // For first div in each row
            } else {
                div.style.animationName = i % 2 === 0
                    ? 'animate2'
                    : 'animate4'; // For second div in each row
            }

            div.style.animationDuration = '120s';
            div.style.animationTimingFunction = 'linear';
            div.style.animationIterationCount = 'infinite';
            div.style.animationDelay = j === 0
                ? '-120s'
                : '-60s'; // Assuming two divs per row

            row.appendChild(div); // Add div to the row
        }

        container.appendChild(row); // Add row to the skills section
    }
});

/* Tilting of Contact Icons */

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});

/* Script for Projects -> slider and navbar */

document
    .getElementById('make_it_bigger')
    .addEventListener('click', function () {
        const slider = document.getElementById('slider');
        const images = document.querySelectorAll('.slide img');

        console.log('pimmel')

        // Calculate which image is in view
        const sliderRect = slider.getBoundingClientRect();
        const centerX = sliderRect.left + sliderRect.width / 2;

        let currentImageSrc = '';
        for (let img of images) {
            const imgRect = img.getBoundingClientRect();
            const imgCenterX = imgRect.left + imgRect.width / 2;

            // Check if the center of the image is within the viewport of the slider
            if (imgCenterX >= sliderRect.left && imgCenterX <= sliderRect.right) {
                // Check if the image center is closest to the center of the viewport
                if (Math.abs(imgCenterX - centerX) < imgRect.width / 2) {
                    currentImageSrc = img.src;
                    break; // Exit loop once the current image is found
                }
            }
        }

        // Proceed if an image is found to be in view
        if (currentImageSrc) {
            const modal = document.getElementById('fullSizeImageModal');
            const fullSizeImg = document.getElementById('fullSizeImage');

            fullSizeImg.src = currentImageSrc; // Set the modal image to the current image
            modal.style.display = 'flex'; // Show the modal
            fullSizeImg.style.opacity = "1";
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            modal.style.zIndex = '1000'

            let p = document.createElement('p'); // Create an h3 element
            p.textContent = "This is a Test Run"; // Set the text content of the h3 element
            p.style.color = 'white';

            let h2 = document.createElement('h2'); // Create an h3 element
            h2.textContent = "This is a Test Run"; // Set the text content of the h3 element
            h2.style.color = 'white';

            // Append the h1 element to the modal or another specific element within the
            // modal
            modal.appendChild(p);
            modal.appendChild(h2)

            // Close the modal on click
            modal.addEventListener('click', function () {
                modal.style.display = 'none';
                modal.removeChild(p);
                modal.removeChild(h2)
            });
        } else {
            alert('No image is currently in full view.');
        }
    });

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.slider-nav .slide-nav');
    const highlight = document.querySelector('.nav-highlight');

    // Listen for click events on navigation dots
    navLinks.forEach((link) => {
        link.addEventListener('click', function () {

            const targetId = this.getAttribute('data-target');
            const targetSlide = document.getElementById(targetId);

            if (targetSlide) {
                // Scroll the slider to the targeted slide
                slider.scrollLeft = targetSlide.offsetLeft - (
                    slider.offsetWidth / 2 - targetSlide.offsetWidth / 2
                );
            }

        });
    });
    // Sliding Animation

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider
            .classList
            .add('slide-on');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider
            .classList
            .remove('active-slide');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider
            .classList
            .remove('active-slide');
        updateActiveNavDot(); // Call the update function on mouseup
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) 
            return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('scroll', () => {
        if (!isDown) {
            updateActiveNavDot(); // Also update on scroll for continuous feedback
        }
    });

    function updateActiveNavDot() {
        const slides = document.querySelectorAll('.slide');
        const navLinks = document.querySelectorAll('.slider-nav .slide-nav');
        const highlight = document.querySelector('.nav-highlight'); // Ensure you have this element in your HTML
        const sliderRect = slider.getBoundingClientRect();
        let maxVisibleArea = 0;
        let mostVisibleSlideIndex = -1;

        slides.forEach((slide, index) => {
            const slideRect = slide.getBoundingClientRect();
            const visibleWidth = Math.min(sliderRect.right, slideRect.right) - Math.max(
                sliderRect.left,
                slideRect.left
            );
            const totalWidth = slideRect.width;
            const visibleArea = visibleWidth > 0
                ? (visibleWidth / totalWidth)
                : 0;

            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                mostVisibleSlideIndex = index;
            }
        });

        navLinks.forEach((link, index) => {
            link
                .classList
                .toggle('active-slide', index === mostVisibleSlideIndex);
        });

        // Assuming each nav link has uniform spacing and size, calculate translation
        if (highlight && navLinks.length > 0 && mostVisibleSlideIndex >= 0 && mostVisibleSlideIndex < navLinks.length) {
            const targetLink = navLinks[mostVisibleSlideIndex];
            const targetRect = targetLink.getBoundingClientRect();
            const sliderNavRect = document
                .querySelector('.slider-nav')
                .getBoundingClientRect();
            const translateX = targetRect.left - sliderNavRect.left + (
                targetRect.width / 2
            ) - 4; // Center highlight on the link

            highlight.style.transform = `translateX(${translateX}px)`;
        }
    }
});
