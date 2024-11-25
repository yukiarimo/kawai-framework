// Display the parsed story
function playNovel(novel) {
  console.log(`Title: ${novel.title}`);
  console.log(`Author: ${novel.author}`);
  console.log('Start:');

  // Step 2: Get the current branch or find the "start" branch
  const currentBranch = novel.currentBranch ? novel.currentBranch : novel.branches.find(branch => branch.name === "start");

  if (!currentBranch) {
    console.log('Error: Unable to find the starting branch.');
    return;
  }

  // Step 3: Start printing episodes
  while (currentBranch.currentEpisodeIndex < currentBranch.episodes.length) {
    const currentEpisode = currentBranch.episodes[currentBranch.currentEpisodeIndex];
    console.log(`Episode: ${currentEpisode.name}`);

    // Step 4: Print text elements
    for (const element of currentEpisode.elements) {
      if (element.text) {
        console.log(`Text: ${element.text}`);
      } else if (element.choices) {
        // Step 5: Prompt user for a choice
        const choiceIndex = prompt(element.choices.map(choice => choice.choice).join('\n'));
        console.log(`Choice Index: ${choiceIndex}`);

        // Step 6: Check if entered choice exists in "choices" and find the target_branch
        const selectedChoice = element.choices.find(choice => choice.choice === choiceIndex);

        if (selectedChoice) {
          const targetBranchName = selectedChoice.target_branch;
          console.log(`Target Branch Name: ${targetBranchName}`);

          // Step 7: Find the corresponding branch based on the target_branch name
          const targetBranch = novel.branches.find(branch => branch.name === targetBranchName);

          if (targetBranch) {
            // Step 8: Apply the same logic for the target branch
            novel.previousBranch = currentBranch;
            novel.currentBranch = targetBranch;
            playNovel(novel);
          } else {
            console.log(`Error: Target branch ${targetBranchName} not found.`);
            return;
          }
        } else {
          console.log(`Error: Invalid choice index: ${choiceIndex}`);
          return;
        }
      }
    }

    // Move to the next episode
    currentBranch.currentEpisodeIndex++;

    // Step 9: If the branch where you were redirected is finished, go one step back
    if (currentBranch.currentEpisodeIndex === currentBranch.episodes.length) {
      // If there is a previous branch, return to it
      if (novel.previousBranch) {
        const previousBranch = novel.previousBranch;
        novel.previousBranch = null;
        novel.currentBranch = previousBranch;
      } else {
        // Step 10: If it's the start branch and finished, finish the novel
        console.log('Novel finished.');
        return;
      }
    }
  }
}

// Function to create heart particles
function createHeartParticles(event) {
  const numParticles = 10;
  const particlesContainer = document.querySelector(".heart-particles");

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("heart-particle");
    particle.style.left = event.clientX - 7 + "px"; // Half width of particle
    particle.style.top = event.clientY - 7 + "px"; // Half height of particle
    particlesContainer.appendChild(particle);
  }

  // Remove the particles container after animation completes
  particlesContainer.addEventListener("animationend", () => {
    particlesContainer.innerHTML = "";
  });
}

// Add event listener to trigger heart particles on click
document.addEventListener("click", createHeartParticles, {
  once: false
});

function SaveStory() {
  const storyPopup = document.getElementById('story');
  storyPopup.style.display = 'none';
}

function playAudio() {
  var audio = document.querySelector("#audio");
  audio.currentTime = 0; // Reset audio to the beginning
  audio.play();
}

var blockButtons = document.querySelectorAll(".block-button");

blockButtons.forEach(function (button) {
  button.addEventListener("mouseover", playAudio);
  button.addEventListener("click", playAudio);
});