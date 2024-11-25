let novel = {
    title: "",
    author: "",
    branches: []
};

function updateTitle(value) {
    novel.title = value;
    updateNovelDisplay();
}

function updateAuthor(value) {
    novel.author = value;
    updateNovelDisplay();
}

function addBranch() {
    const branchName = prompt("Enter branch name:");
    if (branchName) {
        const branch = {
            name: branchName,
            episodes: [],
            currentEpisodeIndex: 0
        };
        novel.branches.push(branch);
        updateNovelDisplay();
    }
}

function addEpisode() {
    const branchIndex = prompt("Enter branch index to add episode:");
    if (branchIndex !== null && !isNaN(branchIndex) && novel.branches[branchIndex]) {
        const episodeName = prompt("Enter episode name:");
        if (episodeName) {
            const episode = {
                name: episodeName,
                elements: []
            };
            novel.branches[branchIndex].episodes.push(episode);
            updateNovelDisplay();
        }
    }
}

function addElement(type) {
    const branchIndex = prompt("Enter branch index:");
    const episodeIndex = prompt("Enter episode index:");
    if (branchIndex !== null && !isNaN(branchIndex) && novel.branches[branchIndex] &&
        episodeIndex !== null && !isNaN(episodeIndex) && novel.branches[branchIndex].episodes[episodeIndex]) {
        if (type === 'text') {
            const text = prompt("Enter text:");
            if (text) {
                const textElement = {
                    text
                };
                novel.branches[branchIndex].episodes[episodeIndex].elements.push(textElement);
            }
        } else if (type === 'choices') {
            const choices = [];
            for (let i = 0; i < 3; i++) {
                const choice = prompt(`Enter choice ${i + 1}:`);
                const targetBranch = prompt(`Enter target branch for choice ${i + 1}:`);
                choices.push({
                    choice,
                    target_branch: targetBranch
                });
            }
            const choicesElement = {
                choices
            };
            novel.branches[branchIndex].episodes[episodeIndex].elements.push(choicesElement);
        }
        updateNovelDisplay();
    }
}

function manualUpdate() {
    const jsonString = prompt("Enter JSON string to update the novel:");
    try {
        const updatedNovel = JSON.parse(jsonString);
        novel = updatedNovel;
        updateNovelDisplay();
    } catch (error) {
        console.error("Invalid JSON string:", error.message);
    }
}

function updateNovelDisplay() {
    const displayElement = document.getElementById('novel-display');
    displayElement.textContent = JSON.stringify(novel, null, 2);
}

function downloadNovel() {
    const jsonString = JSON.stringify(novel, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'novel.json';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}