
        var reviewForm = document.getElementById('reviewForm');
        reviewForm.addEventListener('submit', function(event) {     
            var imageFile = document.getElementById('picture').files[0]; // Get the selected image file

            if (!title || !description || !imageFile) { // Validate required fields
                alert('Please enter all fields: Title, Description, and Image.');
                return;
            }

            // Handle image upload logic (consider server-side storage or displaying a preview)
            // For simplicity, this example just logs the image filename

            console.log("Selected image:", imageFile.name);

            localStorage.setItem("submittedTitle", title);
            localStorage.setItem("submittedDescription", description);

            alert('Review submitted successfully!');
        });