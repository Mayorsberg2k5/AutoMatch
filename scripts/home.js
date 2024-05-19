    let scrollpage = window.onscroll = function() {
        // Get the current scroll position
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Define the position at which to trigger the redirect
        let scrollThreshold = 1; // Adjust this value as needed

        // Check if the scroll position exceeds the threshold
        if (scrollPosition > scrollThreshold) {
            // Redirect to the new website
            window.location.href = "./Form.html";
        }
    };


    Timeout = setTimeout(scrollpage, 1)
