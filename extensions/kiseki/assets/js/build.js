document.addEventListener("DOMContentLoaded", function () {
    // Configuration for linear story parsing
    const config = {
        delimiter: "\n", // Delimiter to split story into paragraphs
        paragraphTag: "p" // HTML tag to wrap paragraphs
    };

    // Open the story editor popup
    document.getElementById("edit-story-button").addEventListener("click", function () {
        document.getElementById("story-editor-popup").style.display = "flex";
        // Load the story from local storage and populate the textarea
        const savedStory = localStorage.getItem("story");
        if (savedStory) {
            document.getElementById("story-textarea").value = savedStory;
        }
    });

    // Close the story editor popup
    document.getElementById("close-story-popup").addEventListener("click", function () {
        document.getElementById("story-editor-popup").style.display = "none";
    });

    // Save the story to local storage
    document.getElementById("save-story-button").addEventListener("click", function () {
        const story = document.getElementById("story-textarea").value;
        localStorage.setItem("story", story);
        document.getElementById("story-editor-popup").style.display = "none";
    });

    // Display the parsed story
    function displayStory(storyText) {
        storyText = localStorage.getItem("story")
        const storyContainer = document.getElementById("parsed-story");
        const paragraphs = storyText.split(config.delimiter);
        storyContainer.innerHTML = ""; // Clear previous content
        paragraphs.forEach(paragraph => {
            const paragraphElement = document.createElement(config.paragraphTag);
            paragraphElement.textContent = paragraph;
            storyContainer.appendChild(paragraphElement);
        });
    }

    // Example of drag and drop modification
    document.getElementById("story-textarea").addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", event.target.value);
    });

    document.getElementById("story-textarea").addEventListener("drop", function (event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const target = event.target;
        target.value += "\n" + data;
        displayStory(target.value); // Update parsed story display
    });
})

// Function to display image preview
function displayImagePreview(base64) {
    const assetList = document.getElementById('asset-list');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('preview');
    img.src = base64;
    li.appendChild(img);
    assetList.appendChild(li);
}

// Show the assets popup
document.getElementById('assets-button').addEventListener('click', function () {
    document.getElementById('assets-popup').style.display = 'flex';
});

// Close the assets popup
document.getElementById('assets-close').addEventListener('click', function () {
    document.getElementById('assets-popup').style.display = 'none';
});

// Handle file input change
document.getElementById('file-input').addEventListener('change', function (e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        // Read the file as a Data URL (Base64 encoded)
        const reader = new FileReader();
        reader.onload = function () {
            const base64 = reader.result;

            // Add the Base64 string to the list
            displayImagePreview(base64);

            // Save the Base64 string to localStorage (add your own logic for uniqueness)
            const base64Images = JSON.parse(localStorage.getItem('base64Images')) || [];
            base64Images.push(base64);
            localStorage.setItem('base64Images', JSON.stringify(base64Images));
        };
        reader.readAsDataURL(files[i]);
    }
});

// Load and display previously saved images
const base64Images = JSON.parse(localStorage.getItem('base64Images')) || [];
base64Images.forEach(base64 => {
    displayImagePreview(base64);
});

// Create a bundle from assets
document.getElementById('create-bundle-button').addEventListener('click', function () {
    // Initialize new Bundler
    const kawaiBundler = new KawaiBundler();

    // Create a bundle
    kawaiBundler.createBundle('kiseki', [`${localStorage.getItem('base64Images')}`, `${localStorage.getItem('story')}`], 'console.log("done!");');

    // Downloading created bundle or extension
    kawaiBundler.downloadBundle();
});

document.getElementById('bundleFileInput').addEventListener('change', handleBundleFile);

function handleBundleFile(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const bundleJSON = e.target.result;
            console.log(bundleJSON)

            try {
                const kawaiBundler = new KawaiBundler();
                var bundleData = kawaiBundler.loadBundle(JSON.parse(bundleJSON));

                // You should call loadBundle from within an async function or context.
                async function getData() {
                const result = await bundleData;

                bundleData = result
                
                if (bundleData.type == 'kiseki') {
                    const novelTextBase64 = bundleData.kiseki;
                    const imageBase64 = bundleData.assets[0];
                    localStorage.setItem('base64Images', imageBase64);

                    // Load and display previously saved images
                    const base64Images = JSON.parse(imageBase64)
                    base64Images.forEach(base64 => {
                        displayImagePreview(base64);
                    });

                    localStorage.setItem('story', bundleData.assets[1])

                    alert("ok")

                } else {
                    alert('Invalid .kawaibundle file: Incorrect type.');
                }
                }

                getData()
            } catch (error) {
                alert('Invalid .kawaibundle file: Error parsing JSON.');
            }
        };

        reader.readAsText(file);
    }
}