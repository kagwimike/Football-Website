<script>
    // --- Slider functionality (Next/Previous buttons) ---
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Show the current slide
    prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
        showSlide(currentSlideIndex);
    });

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
        showSlide(currentSlideIndex);
    });

    // Initially display the first slide
    showSlide(currentSlideIndex);

    // --- Smooth Scroll for internal navigation links ---
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Sponsor button redirect ---
    const sponsorButton = document.querySelector('button[onclick*="window.location"]');
    sponsorButton.addEventListener('click', () => {
        window.location.href = 'sponsorship-opportunities.html';
    });

    // --- Follow Us button redirect ---
    const followButton = document.querySelector('button[onclick*="window.open"]');
    followButton.addEventListener('click', () => {
        window.open('https://twitter.com/orklandfc', '_blank');
    });

    // --- Responsive Menu Toggle (for mobile view) ---
    const navToggleButton = document.createElement('button');
    navToggleButton.textContent = '☰';
    navToggleButton.classList.add('menu-toggle');
    document.querySelector('header').appendChild(navToggleButton);

    const navList = document.querySelector('nav ul');
    
    navToggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // --- Mobile menu styling (CSS) ---
    // Add this CSS to your styles.css file to ensure mobile navigation works properly.
    // Make sure to link it in the HTML or create a new CSS file if necessary.
    /*
    .menu-toggle {
        display: none;
        font-size: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }
        nav ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            background-color: #333;
            width: 200px;
        }
        nav ul.active {
            display: flex;
        }
        nav ul li {
            padding: 10px;
            text-align: center;
        }
        nav ul li a {
            color: white;
        }
    }
    */
</script>
