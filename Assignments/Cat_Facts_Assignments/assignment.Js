// Select the page element and the button
const page = document.getElementsByClassName("page");
const factsButton = document.getElementById('catFacts');

// Add a click event listener to the 'Load Cat Facts' button
factsButton.addEventListener('click', () => {
    // Create a new promise for fetching the cat facts
    const newFact = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Create a new XMLHttpRequest to fetch data from the Cat Facts API
            const req = new XMLHttpRequest();
            
            // Create a new promise to handle the request
            const getFacts = new Promise((resolve, reject) => {
                req.open("GET", "https://catfact.ninja/facts?limit=15&max_length=60"); // Fixed the URL (added & between query parameters)
                req.send(); // Send the request
                req.responseType = "json"; // Expect a JSON response
                req.onload = () => resolve(req.response); // Resolve the promise with the response data
                req.onerror = () => reject(req.statusText); // Reject the promise if an error occurs
            });

            // Handle the response when the data is fetched
            getFacts.then(result => {
                // Randomly select a fact from the response
                const randomFact = result.data[Math.floor(Math.random() * result.data.length)].fact;
                resolve(randomFact); // Resolve the newFact promise with the random fact
            })
            .catch(error => reject(error)); // Handle any errors
        }, 3000); // Simulate a delay of 3 seconds
    });

    // Async function to fetch and display the cat fact
    const greeting = async () => {
        try {
            // Update the page with a loading message
            page[0].textContent = "...Loading";
            page[0].style = "text-align: center"; // Center align the text

            // Wait for the newFact promise to resolve
            const fact = await newFact;

            // Display the fact on the page
            page[0].textContent = "Cat Fact: " + fact;
        } catch (error) {
            // If there’s an error, log it and show an error message
            console.log(error);
            page[0].textContent = "Sorry, we couldn't fetch a cat fact at the moment. Please try again later.";
        }
    }

    // Call the greeting function to fetch and display the fact
    greeting();
});
