document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('jobApplicationForm');
    var phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;

    // Function to handle form submission
    form.addEventListener('submit', function(event) {
        var phone = document.getElementById('phone').value;

        // Validate phone number
        if (!phonePattern.test(phone)) {
            alert('Phone number must be in Canadian format (e.g., 437-456-7890).');
            event.preventDefault(); // Prevent form submission
            return;
        }

        var experienceYes = document.getElementById('experienceYes').checked;
        var experienceDescription = document.getElementById('experienceDescription').value;

        // Check if experience is 'Yes' and description is empty
        if (experienceYes && experienceDescription.trim() === '') {
            alert('Please describe your job experience.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // If everything is correct, show a confirmation message
        alert('Your application has been submitted successfully!');
    });

    // Function to toggle the visibility of the experience details section
    function toggleExperienceDetails() {
        var experienceDetails = document.getElementById('experienceDetails');
        if (document.getElementById('experienceYes').checked) {
            experienceDetails.style.display = 'block';
        } else {
            experienceDetails.style.display = 'none';
        }
    }

    // Initialize visibility on page load
    toggleExperienceDetails();

    // Add event listeners to radio buttons
    document.getElementById('experienceYes').addEventListener('change', toggleExperienceDetails);
    document.getElementById('experienceNo').addEventListener('change', toggleExperienceDetails);
});
