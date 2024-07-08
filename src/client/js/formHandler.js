// Replace checkForName with a function that checks the URL
import { checkForName } from './checkValidUrl'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8000/api'

window.onload = function () {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    let errElement = document.getElementById("error")

    // Check if the URL is valid
    let result = Client.checkValidUrl(formText);

    // If the URL is valid, send it to the server using the serverURL constant above
    if (result) {
        errElement.innerHTML = ""
        sendDataToServer(formText)
    } else {
        errElement.innerHTML = "Invalid Input"
        let resultElement = document.getElementById("results")
        resultElement.innerHTML = ""
    }
}

// Function to send data to the server
async function sendDataToServer(url) {
    let resultElement = document.getElementById("results")
    let body = await fetch(serverURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: url
        })
    })
    try {
        let result = await body.json()
        updateResultUI(result)
    } catch (exception) {
        console.log("ERROR WAS THROWING WHILE CALL TO SERVER: ", exception)
        resultElement.innerHTML = "ERROR"
    }
}

function updateResultUI(result) {
    let resultElement = document.getElementById("results")
    let polarityTag = document.createElement("li")
    polarityTag.innerHTML = `Polarity: ${convertScoreData(result.score_tag)}`
    let subjectivityTag = document.createElement("li")
    subjectivityTag.innerHTML = `Subjectivity: ${result.subjectivity}`
    let confidenceTag = document.createElement("li")
    confidenceTag.innerHTML = `Confidence: ${result.confidence}`
    let agreementTag = document.createElement("li")
    agreementTag.innerHTML = `Agreement: ${result.agreement}`
    let ironyTag = document.createElement("li")
    ironyTag.innerHTML = `Irony: ${result.irony}`
    resultElement.appendChild(polarityTag)
    resultElement.appendChild(subjectivityTag)
    resultElement.appendChild(confidenceTag)
    resultElement.appendChild(agreementTag)
    resultElement.appendChild(ironyTag)
}

function convertScoreData(score_tag) {
    switch (score_tag) {
        case "P+": return "strong positive"
        case "P": return "positive"
        case "NEU": return "neutral"
        case "N": return "negative"
        case "N+": return "strong negative"
        case "NONE": return "without polarity"
    }
}
// Export the handleSubmit function
export { handleSubmit };

