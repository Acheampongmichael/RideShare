document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submit action
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        // For this static example, we'll just check if the fields are not empty.
        if (username && password) {
            // In a real app, here you would check with your server.
            alert('Login successful');
            // Redirect to the main page or dashboard
            // window.location.href = 'mainPage.html';
        } else {
            alert('Please fill in both fields');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("requestRide");
    var btn = document.querySelectorAll("a[href='#requestRide']");
    var span = document.getElementsByClassName("close")[0];

    btn.forEach(function(item) {
        item.onclick = function() {
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('rideRequestForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Ride request submitted!');
        modal.style.display = "none";
        // Here you would normally send the form data to the server and handle the response.
    });
});



function requestRide(eventName) {
    localStorage.setItem('eventName', eventName);
    window.location.href = 'request-ride.html';
}

document.addEventListener('DOMContentLoaded', function () {
    var eventName = localStorage.getItem('eventName');
    if (eventName && document.getElementById('eventName')) {
        document.getElementById('eventName').value = eventName;
    }
});


//RIDER INFORMATION
document.getElementById('riderInfoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submit action
    alert('Information Submitted!'); // Placeholder action
    // Here, you would typically gather form data and send it to a server


    // Here you would typically collect the data and send it to the server
    // For now, we'll just log it to the console
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('studentId').value;
    const classification = document.getElementById('classification').value;
    const pickup = document.getElementById('pickup').value;

    console.log('Rider Information:', { name, course, studentId, classification, pickup });
    // You can also implement AJAX request to server here

    // Clear the form or provide feedback to user
    // alert('Information submitted successfully.');
});




//Ride Selection
function selectRide(rideType) {
    // Log the selected ride type
    console.log(`Ride selected: ${rideType}`);
    
    // Example: Save the selected ride type to local storage
    localStorage.setItem('selectedRideType', rideType);

    // Redirect to index.html or another page as needed
    window.location.href = 'RiderInformation.html';

    // If you need to send the data to a server, you would typically make an AJAX request here.
    // After the request completes, you can then redirect.
}


