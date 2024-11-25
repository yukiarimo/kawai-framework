# Kiseki - Your Visual Novel Journey

Welcome to Kiseki, your go-to tool for crafting captivating and interactive visual novels! Dive into the world of storytelling, where every choice you make shapes the destiny of the characters and the plot. Kiseki is built using pure JavaScript and leverages the power of the Kawai Framework WebUI to offer you a simple, yet robust, visual novel creation experience.

## Features

- **Intuitive Interface**: Kiseki provides an intuitive and user-friendly interface for authors, allowing them to focus on their story's creativity.

- **Interactive Choices**: Create branching narratives with choices that impact the storyline and engage your readers.

- **Rich Media Support**: Embed images, audio, and video elements to enrich your visual novel and make it come alive.

- **Cross-Platform Compatibility**: Kiseki exports visual novels that can be enjoyed across various platforms, from browsers to mobile devices.

- **Local Asset Management**: Easily upload, store, and manage your assets directly within the application.

- **Export and Import Bundles**: Create bundles of your visual novel and its assets for easy sharing or backup, and then reload them seamlessly.

## Getting Started

1. **Clone the Repository**: Start by cloning the Kiseki repository to your local machine.

    ```
    git clone https://github.com/yukiarimo/kiseki.git
    ```

2. **Open the Application**: Navigate to the project directory and open `index.html` in your web browser to launch the Kiseki visual novel builder.

3. **Create Your Masterpiece**: Begin your creative journey by writing your visual novel, adding choices, and embedding media to bring your story to life.

4. **Manage Assets**: Use the integrated asset manager to upload and manage images, audio, and other resources directly in the application.

5. **Export Bundles**: When you're ready to share or back up your visual novel, use the "Create Bundle" feature to bundle your novel and its assets into a single file.

6. **Import Bundles**: To load your bundled visual novel, use the "Load Bundle" option and continue working on your story.

## Example Visual Novel

Here's a simple example of a visual novel script created using Kiseki:

```
start()
    episode("Ep 1 - A Mysterious Beginning")
        text("Once upon a time...")
        text("In this world...")

    episode("Ep 2 - Unexpected Encounters")
        text("Hi there. Kizuna's voice chimed, the sound like a melodic echo in the tranquil surroundings. Their eyes met, and in that instant, a bond began to form.")
        choice("I love you Kizuna", "Reject Kizuna", "Be my girlfriend", "We break up", "Ignore Kizuna") => ("love_dialogue_1", "rejection", "love_dialogue_2", "end", "move")
        text("As the soft rays of dawn filtered through the trees, the protagonist awoke to find themselves in a world brimming with mysteries and enchantment.")
```

## Contribution

We welcome contributors to make Kiseki even better! If you have ideas, bug reports, or code contributions, feel free to submit them through issues and pull requests.

## License

Kiseki is released under the MIT license.

Embark on your storytelling journey with Kiseki today and captivate your audience with interactive visual novels. If you have any questions or need assistance, please don't hesitate to reach out.

Ready to create your own visual novel? Let the adventure begin! 📚✨
