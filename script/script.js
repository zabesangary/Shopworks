function toggleText() {

            // Get all the elements from the page
            var points =
                document.getElementById("points");

            var showMoreText =
                document.getElementById("moreText");

            var buttonText =
                document.getElementById("textButton");


            if (points.style.display === "none") {


                showMoreText.style.display = "none";

                // Show the dots after the text
                points.style.display = "inline";

                // Change the text on button to
                // 'Show More'
                buttonText.innerHTML = "Show less skills";
            }


            else {


                showMoreText.style.display = "inline";

                // Hide the dots after the text
                points.style.display = "none";

                // Change the text on button
                // to 'Show Less'
                buttonText.innerHTML = "Show less skills";
            }
        }
