function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Example: Attach to a<script>
    // Show button after scrolling down 200px
    window.onscroll = function() {
        let btn = document.getElementById("backToTop");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // Scroll to top when clicked
    document.getElementById("backToTop").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

