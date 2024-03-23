document.getElementById('riderInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const riderInfo = {
        name: document.getElementById('name').value,
        course: document.getElementById('course').value,
        studentId: document.getElementById('studentId').value,
        classification: document.getElementById('classification').value,
        pickup: document.getElementById('pickup').value
    };

    // Reference to your database, "ridersInfo" is the name of the node you could use
    const databaseRef = firebase.database().ref('UserAuthList');
    
    // Pushing the data to Firebase, you can also use .set() if you want to overwrite the data
    databaseRef.push().set(riderInfo, function(error) {
        if (error) {
            // Handle the error case
            alert("Data could not be saved." + error);
        } else {
            // Data saved successfully!
            alert("Information submitted successfully.");
            // Clear the form or redirect the user
        }
    });
});
