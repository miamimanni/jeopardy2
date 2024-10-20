# Jeopardy Game

## Overview

This is a web-based Jeopardy game implemented using HTML, CSS, and JavaScript. The game simulates the classic quiz show, allowing multiple players to participate, answer clues, and adjust their scores accordingly. The interface includes audio cues, score adjustments, and a soundboard for additional interactivity.

Link: [Copy and Customize this Game Guide](https://github.com/miamimanni/jeopardy2/blob/main/CopyThisGameGuide.md)

## Features

- **Player Management**: Allows users to enter names for as many players as desired.
- **Game Rounds**: Includes Single Jeopardy, Double Jeopardy, and Final Jeopardy rounds.
- **Clue Interaction**: Players can view clues, reveal solutions, and adjust scores based on correct or incorrect responses.
- **Score Adjustment**: Manual score adjustment buttons are available next to player scores for flexibility.
- **Daily Double**: Special clues are marked as Daily Doubles with visual and audio cues.
- **Soundboard**: Includes a soundboard with a "Jeopardy Theme" button to play background music.
- **Audio Effects**: Plays appropriate sounds for correct and incorrect responses.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- Basic knowledge of HTML, CSS, and JavaScript if you plan to customize the game.
- Audio files:
  - `jeopardy_theme.mp3`
  - `daily_double.mp3`
  - `correct_answer.mp3`
  - `wrong_answer.mp3`

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/jeopardy-game.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd jeopardy-game
   ```

3. **Place Audio Files**

   Ensure the following audio files are placed in the root directory (same as `index.html`):

   - `jeopardy_theme.mp3`
   - `daily_double.mp3`
   - `correct_answer.mp3`
   - `wrong_answer.mp3`

   > **Note**: Due to copyright restrictions, these files are not included in the repository. You will need to provide your own versions.

4. **Open `index.html` in a Web Browser**

   - You can simply double-click `index.html` or open it via your browser's "Open File" option.

## Usage

### Starting the Game

- Upon loading the page, a player setup modal will appear.
- Enter the names of the players.
- Click **"Add Another Player"** to include more players.
- Click **"Start Game"** to begin.

### Gameplay

1. **Selecting Clues**

   - Click on any clue value on the game board to select it.
   - The clue modal will open, displaying the clue text.

2. **Revealing the Solution**

   - Click anywhere inside the clue modal to reveal the solution.

3. **Adjusting Scores**

   - After revealing the solution, score adjustment buttons appear for each player.
   - Click the green `+$<value>` button if the player answered correctly.
     - The player's score increases by the clue value.
     - A correct answer sound plays.
   - Click the salmon `–$<value>` button if the player answered incorrectly.
     - The player's score decreases by the clue value.
     - A wrong answer sound plays.

4. **Closing the Clue Modal**

   - Click inside the modal again after adjusting scores to close it.

5. **Proceeding to Next Round**

   - After all clues in a round have been used, a **"Proceed to Next Round"** button appears.
   - Click it to advance to the next round.

6. **Daily Doubles**

   - Special clues marked as Daily Doubles will display a **"!! Daily Double !!"** caption.
   - A Daily Double sound plays upon opening the clue.

7. **Final Jeopardy**

   - In the Final Jeopardy round, the category is displayed.
   - Click **"View Final Jeopardy Clue"** to see the clue.
   - Adjust player scores as needed (wagering is not implemented by default).

### Manual Score Adjustments

- Below the player scores, there are manual adjustment buttons.
- Use the green `+$100` and salmon `–$100` buttons to adjust any player's score by $100 increments at any time.

### Soundboard

- Below the players, there is a soundboard section.
- Click the **"Jeopardy Theme"** button to play or pause the Jeopardy theme music.

## Customization

### Modifying Game Data

- The game data is defined in the `scripts.js` file within the `gameData` object.
- It includes three rounds: `single`, `double`, and `final`.

#### Example Structure

```javascript
const gameData = {
  "single": [
    {
      "category": "Category 1",
      "clues": [
        {
          "value": 200,
          "clue": "This is a sample clue.",
          "solution": "What is the sample solution?"
        },
        // ... more clues
      ]
    },
    // ... more categories
  ],
  "double": [
    // Similar structure as "single" with different values
  ],
  "final": {
    "category": "Final Category",
    "clue": "This is the Final Jeopardy clue.",
    "solution": "What is the solution to the Final Jeopardy clue?"
  }
};
```

- **To Customize:**
  - Update the `category` names.
  - Modify the `clue` and `solution` texts.
  - Adjust the `value` amounts as desired.
  - Mark any clue as a Daily Double by adding `"dailyDouble": true` to the clue object.

### Adding More Soundboard Buttons

- In `index.html`, add more buttons within the `<div id="soundboard">` section.
- In `scripts.js`, add event listeners for the new buttons.
- Include the corresponding audio files and update the HTML to reference them.

## Files Included

- `index.html`: The main HTML file containing the structure of the game.
- `styles.css`: The CSS file containing styles for the game.
- `scripts.js`: The JavaScript file containing the game logic.
- `ReadMe.md`: This documentation file.

## Dependencies

- No external libraries or frameworks are required.

## Known Issues

- **Wagering in Final Jeopardy**: Wagering functionality is not implemented. You may need to extend the code to handle wagers.
- **Negative Scores**: Players' scores can go negative. If you wish to prevent this, add a condition in the `adjustPlayerScore` function.
- **Audio Playback Overlaps**: Rapid clicking may cause audio overlaps. The code resets the audio playback position to mitigate this.

## License

This project is provided for educational purposes. Please ensure compliance with any copyright laws when using audio files or other media.

## Acknowledgments

- Made using ChatGPT o1-Preview
- Took some stuff from https://github.com/brianyu28/jeopardy
- Inspired by the classic Jeopardy! game show.
- Sound effects and theme music are properties of their respective owners.

---

**Feel free to modify and expand upon this solution to suit your needs.**
