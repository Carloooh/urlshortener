// import Toastify from 'toastify-js';
// import 'toastify-js/src/toastify.css';

// async function shortenURL() {
//     const longURLInput = document.getElementById("url") as HTMLInputElement;
//     const aliasInput = document.getElementById("alias") as HTMLInputElement;
//     const shortURLInput = document.getElementById("short-url") as HTMLInputElement;
//     const copyButton = document.getElementById("copy-button") as HTMLButtonElement;

//     const longURL = longURLInput.value;
//     const alias = aliasInput.value;
//     const apiUrl = "https://api.tinyurl.com/create";
//     const apiKey = "nnqJLTUUS0dLHBAAmpWqSqXZCVEoNDx2zPIBTrnjA5dIsczWuCAc2QvNlVfz";

//     const requestBody = {
//         "url": longURL,
//         "domain": "tinyurl.com",
//         "alias": alias,
//     };

//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${apiKey}`
//         },
//         body: JSON.stringify(requestBody)
//     };

//     try {
//         const response = await fetch(apiUrl, requestOptions);
//         const data = await response.json();

//         if (response.ok) {
//             const shortURL = data.data.tiny_url;
//             shortURLInput.value = shortURL;
//             copyButton.click();
//             Toastify({
//                 text: "URL shortened successfully",
//                 duration: 3000,
//                 close: true,
//                 gravity: "top",
//                 position: 'center',
//                 backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
//             }).showToast();
//         } else {
//             throw new Error("Failed to shorten URL");
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         shortURLInput.value = "";
//         Toastify({
//             text: "Failed to shorten URL",
//             duration: 3000,
//             close: true,
//             gravity: "top",
//             position: 'center',
//             backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
//         }).showToast();
//     }
//     history.replaceState({}, document.title, window.location.pathname);
// }

// (document.querySelector('form') as HTMLFormElement)?.addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     shortenURL();
// });

// document.getElementById("copy-button")?.addEventListener("click", function() {
//     const shortURLInput = document.getElementById("short-url") as HTMLInputElement;

//     shortURLInput.select();
//     document.execCommand("copy");
//     Toastify({
//         text: "URL copied to clipboard",
//         duration: 3000,
//         close: true,
//         gravity: "bottom",
//         position: 'center',
//         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
//     }).showToast();
// });

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

async function shortenURL() {
    const longURLInput = document.getElementById("url") as HTMLInputElement;
    const aliasInput = document.getElementById("alias") as HTMLInputElement;
    const shortURLInput = document.getElementById("short-url") as HTMLInputElement;
    const copyButton = document.getElementById("copy-button") as HTMLButtonElement;

    const longURL = longURLInput.value;
    const alias = aliasInput.value;
    const apiUrl = "https://lilurl.vercel.app/url";

    const requestBody = {
        "url": longURL,
        "alias": alias,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        if (response.ok) {
            const shortURL = data.shortUrl;
            shortURLInput.value = shortURL;
            copyButton.click();
            Toastify({
                text: "URL shortened successfully",
                duration: 3000,
                close: true,
                gravity: "top",
                position: 'center',
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
        } else {
            throw new Error("Failed to shorten URL");
        }
    } catch (error) {
        console.error("Error:", error);
        shortURLInput.value = "";
        Toastify({
            text: "Failed to shorten URL",
            duration: 3000,
            close: true,
            gravity: "top",
            position: 'center',
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }).showToast();
    }
    history.replaceState({}, document.title, window.location.pathname);
}

(document.querySelector('form') as HTMLFormElement)?.addEventListener('submit', function(event) {
    event.preventDefault(); 
    shortenURL();
});

document.getElementById("copy-button")?.addEventListener("click", function() {
    const shortURLInput = document.getElementById("short-url") as HTMLInputElement;

    shortURLInput.select();
    document.execCommand("copy");
    Toastify({
        text: "URL copied to clipboard",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: 'center',
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
});
