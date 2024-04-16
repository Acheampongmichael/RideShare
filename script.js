document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submit action
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        if (username && password) {
            
            alert('Login successful');
            
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


//Ride Selection
function selectRide(rideType) {

    console.log(`Ride selected: ${rideType}`);

    localStorage.setItem('selectedRideType', rideType);

    // Redirect to index.html or another page as needed
    window.location.href = 'RiderInformation.html';

}


