 // Function to initialize collapse behavior
/* ----------------------------------------------------------(Start)Javascript code of questions.html file------------ */
function initCollapse() {
    // Add click event listener to each sec4iconpdisplay div
    document.querySelectorAll('.quessec4iconpdisplay').forEach(item => {
        item.addEventListener('click', function () {
            // Toggle background color and text color
            this.classList.toggle('red-bg'); // Toggle background color
            this.querySelector('.colorChangeJs').classList.toggle('collapsed'); // Toggle text color

            // Toggle icon rotation
            this.querySelector('i').classList.toggle('collapsed');
        });
    });
}

// Add event listener to document to initialize collapse behavior
document.addEventListener('DOMContentLoaded', () => {
    initCollapse();
});
/* ----------------------------------------------------------(End)Javascript code of questions.html file------------ */
        console.log("Slider1");

        let slideIndex = 0;
        const slider = document.querySelector('.testimonial-slider');
        const testimonials = document.getElementsByClassName('testimonial');
        let testimonialWidth;
        let visibleCount;
        console.log('Caluculate Visible Count');

        function calculateVisibleCount() {
            const sliderWidth = slider.clientWidth;
            testimonialWidth = testimonials[0].clientWidth;
            visibleCount = Math.floor(sliderWidth / testimonialWidth);
        }
        console.log("Show Slide Func Start");
        function showSlides() {
            const totalTestimonials = testimonials.length;
            const maxSlides = totalTestimonials - visibleCount;

            // Adjust slideIndex if it's out of bounds
            if (slideIndex > maxSlides) {
                slideIndex = maxSlides;
            }
            if (slideIndex < 0) {
                slideIndex = 0;
            }

            slider.style.transform = `translateX(${-slideIndex * testimonialWidth}px)`;
        }
        console.log("Show Slide Func end");

        function plusSlides(n) {
            const totalTestimonials = testimonials.length;
            const maxSlides = totalTestimonials - visibleCount;

            slideIndex += n;

            // Adjust slideIndex to be within valid range
            if (slideIndex > maxSlides) {
                slideIndex = maxSlides;
            }
            if (slideIndex < 0) {
                slideIndex = 0;
            }
            showSlides();
        }

        // Initial setup
        console.log("Calling of Calculate Visible Count");
        calculateVisibleCount();
        console.log("callig of Show Slide");
        showSlides();

        // Adjust slideIndex and visibleCount on resize
        console.log('resize');
        window.addEventListener('resize', () => {
            calculateVisibleCount();
            showSlides();
        });