document.addEventListener('DOMContentLoaded', () => {
    // Define the game data directly in the script
    const gameData = {
        "single": [
            {
                "category": "Single Category 1",
                "clues": [
                    {
                        "value": 200,
                        "clue": "This is clue 1.1",
                        "solution": "What is the solution to clue 1.1?"
                    },
                    {
                        "value": 400,
                        "clue": "This is clue 1.2",
                        "solution": "What is the solution to clue 1.2?"
                    },
                    {
                        "value": 600,
                        "clue": "This is clue 1.3",
                        "solution": "What is the solution to clue 1.3?"
                    },
                    {
                        "value": 800,
                        "clue": "This is clue 1.4",
                        "solution": "What is the solution to clue 1.4?"
                    },
                    {
                        "value": 1000,
                        "clue": "This is clue 1.5",
                        "solution": "What is the solution to clue 1.5?",
                        "dailyDouble": true
                    }
                ]
            },
            {
                "category": "Single Category 2",
                "clues": [
                    {
                        "value": 200,
                        "clue": "This is clue 2.1",
                        "solution": "What is the solution to clue 2.1?"
                    },
                    {
                        "value": 400,
                        "clue": "This is clue 2.2",
                        "solution": "What is the solution to clue 2.2?"
                    },
                    {
                        "value": 600,
                        "clue": "This is clue 2.3",
                        "solution": "What is the solution to clue 2.3?"
                    },
                    {
                        "value": 800,
                        "clue": "This is clue 2.4",
                        "solution": "What is the solution to clue 2.4?",
                        "dailyDouble": true
                    },
                    {
                        "value": 1000,
                        "clue": "This is clue 2.5",
                        "solution": "What is the solution to clue 2.5?"
                    }
                ]
            },
            {
                "category": "Single Category 3",
                "clues": [
                    {
                        "value": 200,
                        "clue": "This is clue 3.1",
                        "solution": "What is the solution to clue 3.1?"
                    },
                    {
                        "value": 400,
                        "clue": "This is clue 3.2",
                        "solution": "What is the solution to clue 3.2?"
                    },
                    {
                        "value": 600,
                        "clue": "This is clue 3.3",
                        "solution": "What is the solution to clue 3.3?"
                    },
                    {
                        "value": 800,
                        "clue": "This is clue 3.4",
                        "solution": "What is the solution to clue 3.4?"
                    },
                    {
                        "value": 1000,
                        "clue": "This is clue 3.5",
                        "solution": "What is the solution to clue 3.5?"
                    }
                ]
            },
            {
                "category": "Single Category 4",
                "clues": [
                    {
                        "value": 200,
                        "clue": "This is clue 4.1",
                        "solution": "What is the solution to clue 4.1?"
                    },
                    {
                        "value": 400,
                        "clue": "This is clue 4.2",
                        "solution": "What is the solution to clue 4.2?"
                    },
                    {
                        "value": 600,
                        "clue": "This is clue 4.3",
                        "solution": "What is the solution to clue 4.3?"
                    },
                    {
                        "value": 800,
                        "clue": "This is clue 4.4",
                        "solution": "What is the solution to clue 4.4?"
                    },
                    {
                        "value": 1000,
                        "clue": "This is clue 4.5",
                        "solution": "What is the solution to clue 4.5?"
                    }
                ]
            },
            {
                "category": "Single Category 5",
                "clues": [
                    {
                        "value": 200,
                        "clue": "This is clue 5.1",
                        "solution": "What is the solution to clue 5.1?"
                    },
                    {
                        "value": 400,
                        "clue": "This is clue 5.2",
                        "solution": "What is the solution to clue 5.2?"
                    },
                    {
                        "value": 600,
                        "clue": "This is clue 5.3",
                        "solution": "What is the solution to clue 5.3?"
                    },
                    {
                        "value": 800,
                        "clue": "This is clue 5.4",
                        "solution": "What is the solution to clue 5.4?"
                    },
                    {
                        "value": 1000,
                        "clue": "This is clue 5.5",
                        "solution": "What is the solution to clue 5.5?"
                    }
                ]
            },
            {
                "category": "Single Category 6",
                "clues": [
                    {
                        "value": 200,
                        "clue": "This is clue 6.1",
                        "solution": "What is the solution to clue 6.1?"
                    },
                    {
                        "value": 400,
                        "clue": "This is clue 6.2",
                        "solution": "What is the solution to clue 6.2?"
                    },
                    {
                        "value": 600,
                        "clue": "This is clue 6.3",
                        "solution": "What is the solution to clue 6.3?"
                    },
                    {
                        "value": 800,
                        "clue": "This is clue 6.4",
                        "solution": "What is the solution to clue 6.4?"
                    },
                    {
                        "value": 1000,
                        "clue": "This is clue 6.5",
                        "solution": "What is the solution to clue 6.5?"
                    }
                ]
            }
        ],
        "double": [
            {
                "category": "Double Category 1",
                "clues": [
                    {
                        "value": 400,
                        "clue": "This is DJ clue 1.1",
                        "solution": "What is the solution to DJ clue 1.1?"
                    },
                    {
                        "value": 800,
                        "clue": "This is DJ clue 1.2",
                        "solution": "What is the solution to DJ clue 1.2?"
                    },
                    {
                        "value": 1200,
                        "clue": "This is DJ clue 1.3",
                        "solution": "What is the solution to DJ clue 1.3?"
                    },
                    {
                        "value": 1600,
                        "clue": "This is DJ clue 1.4",
                        "solution": "What is the solution to DJ clue 1.4?"
                    },
                    {
                        "value": 2000,
                        "clue": "This is DJ clue 1.5",
                        "solution": "What is the solution to DJ clue 1.5?"
                    }
                ]
            },
            {
                "category": "Double Category 2",
                "clues": [
                    {
                        "value": 400,
                        "clue": "This is DJ clue 2.1",
                        "solution": "What is the solution to DJ clue 2.1?"
                    },
                    {
                        "value": 800,
                        "clue": "This is DJ clue 2.2",
                        "solution": "What is the solution to DJ clue 2.2?"
                    },
                    {
                        "value": 1200,
                        "clue": "This is DJ clue 2.3",
                        "solution": "What is the solution to DJ clue 2.3?"
                    },
                    {
                        "value": 1600,
                        "clue": "This is DJ clue 2.4",
                        "solution": "What is the solution to DJ clue 2.4?"
                    },
                    {
                        "value": 2000,
                        "clue": "This is DJ clue 2.5",
                        "solution": "What is the solution to DJ clue 2.5?"
                    }
                ]
            },
            {
                "category": "Double Category 3",
                "clues": [
                    {
                        "value": 400,
                        "clue": "This is DJ clue 3.1",
                        "solution": "What is the solution to DJ clue 3.1?"
                    },
                    {
                        "value": 800,
                        "clue": "This is DJ clue 3.2",
                        "solution": "What is the solution to DJ clue 3.2?"
                    },
                    {
                        "value": 1200,
                        "clue": "This is DJ clue 3.3",
                        "solution": "What is the solution to DJ clue 3.3?",
                        "dailyDouble": true
                    },
                    {
                        "value": 1600,
                        "clue": "This is DJ clue 3.4",
                        "solution": "What is the solution to DJ clue 3.4?"
                    },
                    {
                        "value": 2000,
                        "clue": "This is DJ clue 3.5",
                        "solution": "What is the solution to DJ clue 3.5?"
                    }
                ]
            },
            {
                "category": "Double Category 4",
                "clues": [
                    {
                        "value": 400,
                        "clue": "This is DJ clue 4.1",
                        "solution": "What is the solution to DJ clue 4.1?"
                    },
                    {
                        "value": 800,
                        "clue": "This is DJ clue 4.2",
                        "solution": "What is the solution to DJ clue 4.2?"
                    },
                    {
                        "value": 1200,
                        "clue": "This is DJ clue 4.3",
                        "solution": "What is the solution to DJ clue 4.3?"
                    },
                    {
                        "value": 1600,
                        "clue": "This is DJ clue 4.4",
                        "solution": "What is the solution to DJ clue 4.4?"
                    },
                    {
                        "value": 2000,
                        "clue": "This is DJ clue 4.5",
                        "solution": "What is the solution to DJ clue 4.5?"
                    }
                ]
            },
            {
                "category": "Double Category 5",
                "clues": [
                    {
                        "value": 400,
                        "clue": "This is DJ clue 5.1",
                        "solution": "What is the solution to DJ clue 5.1?"
                    },
                    {
                        "value": 800,
                        "clue": "This is DJ clue 5.2",
                        "solution": "What is the solution to DJ clue 5.2?"
                    },
                    {
                        "value": 1200,
                        "clue": "This is DJ clue 5.3",
                        "solution": "What is the solution to DJ clue 5.3?"
                    },
                    {
                        "value": 1600,
                        "clue": "This is DJ clue 5.4",
                        "solution": "What is the solution to DJ clue 5.4?"
                    },
                    {
                        "value": 2000,
                        "clue": "This is DJ clue 5.5",
                        "solution": "What is the solution to DJ clue 5.5?"
                    }
                ]
            },
            {
                "category": "Double Category 6",
                "clues": [
                    {
                        "value": 400,
                        "clue": "This is DJ clue 6.1",
                        "solution": "What is the solution to DJ clue 6.1?"
                    },
                    {
                        "value": 800,
                        "clue": "This is DJ clue 6.2",
                        "solution": "What is the solution to DJ clue 6.2?"
                    },
                    {
                        "value": 1200,
                        "clue": "This is DJ clue 6.3",
                        "solution": "What is the solution to DJ clue 6.3?"
                    },
                    {
                        "value": 1600,
                        "clue": "This is DJ clue 6.4",
                        "solution": "What is the solution to DJ clue 6.4?"
                    },
                    {
                        "value": 2000,
                        "clue": "This is DJ clue 6.5",
                        "solution": "What is the solution to DJ clue 6.5?"
                    }
                ]
            }
        ],
        "final": {
            "category": "Final Category",
            "clue": "This is the Final Jeopardy clue.",
            "solution": "What is the solution to the Final Jeopardy clue?"
        }
    };

    // Current game state
    let currentRound = 'single';
    let cluesRemaining = 0;
    let solutionRevealed = false;
    let players = [];
    let currentClueValue = 0;

    // Get references to DOM elements
    const gameBoard = document.getElementById('game-board');
    const clueModal = document.getElementById('clue-modal');
    const modalContent = document.getElementById('modal-content');
    const clueText = document.getElementById('clue-text');
    const solutionText = document.getElementById('solution-text');
    const nextRoundBtn = document.getElementById('next-round-btn');
    const playerScores = document.getElementById('player-scores');
    const scoreButtons = document.getElementById('score-buttons');
    const dailyDoubleCaption = document.getElementById('daily-double-caption');

    // Audio elements
    const jeopardyThemeBtn = document.getElementById('jeopardy-theme-btn');
    const jeopardyThemeAudio = document.getElementById('jeopardy-theme-audio');
    const dailyDoubleAudio = document.getElementById('daily-double-audio');
    const correctAnswerAudio = document.getElementById('correct-answer-audio');
    const wrongAnswerAudio = document.getElementById('wrong-answer-audio');

    // Player setup elements
    const playerSetupModal = document.getElementById('player-setup-modal');
    const playerInputs = document.getElementById('player-inputs');
    const addPlayerBtn = document.getElementById('add-player-btn');
    const startGameBtn = document.getElementById('start-game-btn');

    // Event listeners for player setup
    addPlayerBtn.addEventListener('click', addPlayerInput);
    startGameBtn.addEventListener('click', startGame);

    function addPlayerInput() {
        const playerInput = document.createElement('input');
        playerInput.type = 'text';
        playerInput.classList.add('player-name-input');
        playerInput.placeholder = `Player ${playerInputs.children.length + 1}`;
        playerInputs.appendChild(playerInput);
    }

    function startGame() {
        const playerNameInputs = document.querySelectorAll('.player-name-input');
        players = [];
        playerNameInputs.forEach(input => {
            const name = input.value.trim();
            if (name !== '') {
                players.push({ name: name, score: 0 });
            }
        });

        if (players.length === 0) {
            alert('Please enter at least one player name.');
            return;
        }

        updatePlayerScores();
        playerSetupModal.style.display = 'none';
        buildGameBoard(gameData[currentRound]);
    }

    function updatePlayerScores() {
        playerScores.innerHTML = '';
        players.forEach((player, index) => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player-score');

            const playerNameDiv = document.createElement('div');
            playerNameDiv.classList.add('player-name');
            playerNameDiv.innerText = player.name;

            const playerAmountDiv = document.createElement('div');
            playerAmountDiv.classList.add('player-amount');
            playerAmountDiv.innerText = `$${player.score}`;

            // Increase and Decrease Buttons
            const adjustmentDiv = document.createElement('div');
            adjustmentDiv.classList.add('manual-adjustment');

            const increaseBtn = document.createElement('button');
            increaseBtn.innerText = `+$100`;
            increaseBtn.classList.add('increase-btn');
            increaseBtn.addEventListener('click', () => {
                adjustPlayerScore(index, 100);
            });

            const decreaseBtn = document.createElement('button');
            decreaseBtn.innerText = `–$100`;
            decreaseBtn.classList.add('decrease-btn');
            decreaseBtn.addEventListener('click', () => {
                adjustPlayerScore(index, -100);
            });

            adjustmentDiv.appendChild(increaseBtn);
            adjustmentDiv.appendChild(decreaseBtn);

            playerDiv.appendChild(playerNameDiv);
            playerDiv.appendChild(playerAmountDiv);
            playerDiv.appendChild(adjustmentDiv);
            playerScores.appendChild(playerDiv);
        });
    }

    function buildGameBoard(roundData) {
        // Clear the game board
        gameBoard.innerHTML = '';

        if (currentRound === 'final') {
            buildFinalJeopardy(gameData.final);
            return;
        }

        // Build category headers
        roundData.forEach(category => {
            const categoryCell = document.createElement('div');
            categoryCell.classList.add('category-cell');
            categoryCell.innerText = category.category;
            gameBoard.appendChild(categoryCell);
        });

        // Assume there are 5 clues per category
        for (let i = 0; i < 5; i++) {
            roundData.forEach(category => {
                const clue = category.clues[i];
                const clueCell = document.createElement('div');
                clueCell.classList.add('clue-cell');
                clueCell.innerText = `$${clue.value}`;
                clueCell.dataset.round = currentRound;
                clueCell.addEventListener('click', () => {
                    if (!clueCell.classList.contains('used')) {
                        openClue(clue, clueCell);
                        clueCell.classList.add('used');
                    }
                });
                gameBoard.appendChild(clueCell);
            });
        }

        // Update the number of remaining clues
        cluesRemaining = roundData.length * 5;
    }

    function openClue(clue, clueCell) {
        clueText.innerText = clue.clue;
        solutionText.style.display = 'none';
        solutionText.innerText = clue.solution;
        clueModal.style.display = 'block';
        solutionRevealed = false;
        currentClueValue = clue.value;

        // Check if the clue is a Daily Double
        if (clue.dailyDouble) {
            dailyDoubleCaption.style.display = 'block';
            dailyDoubleAudio.play();
        } else {
            dailyDoubleCaption.style.display = 'none';
        }

        // Decrement clues remaining
        cluesRemaining--;

        // Check if round is over
        if (cluesRemaining === 0) {
            if (currentRound !== 'double') {
                nextRoundBtn.innerText = 'Proceed to Double Jeopardy';
            } else {
                nextRoundBtn.innerText = 'Proceed to Final Jeopardy';
            }
            nextRoundBtn.style.display = 'inline-block';
        }
    }

    // Event listener for clicks within the modal content
    modalContent.addEventListener('click', () => {
        if (!solutionRevealed) {
            // Reveal the solution
            solutionText.style.display = 'block';
            solutionRevealed = true;

            // Show score adjustment buttons
            showScoreAdjustmentButtons();
        } else {
            // Close the modal if the solution is already revealed
            clueModal.style.display = 'none';
            scoreButtons.style.display = 'none';
        }
    });

    // Prevent event propagation to avoid closing modal when clicking on next round button
    nextRoundBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        nextRoundBtn.style.display = 'none';
        clueModal.style.display = 'none';
        scoreButtons.style.display = 'none';

        if (currentRound === 'single') {
            currentRound = 'double';
            buildGameBoard(gameData[currentRound]);
        } else if (currentRound === 'double') {
            currentRound = 'final';
            buildGameBoard(gameData[currentRound]);
        } else if (currentRound === 'final') {
            // Display final scores
            displayFinalScores();
        }
    });

    // Close modal when clicking outside the modal content, after solution is revealed
    window.addEventListener('click', (event) => {
        if (event.target === clueModal && solutionRevealed) {
            clueModal.style.display = 'none';
            scoreButtons.style.display = 'none';
        }
    });

    function showScoreAdjustmentButtons() {
        scoreButtons.innerHTML = '';
        players.forEach((player, index) => {
            const adjustmentDiv = document.createElement('div');
            adjustmentDiv.classList.add('score-adjustment');

            const playerNameDiv = document.createElement('div');
            playerNameDiv.classList.add('player-name');
            playerNameDiv.innerText = player.name;

            const correctBtn = document.createElement('button');
            correctBtn.innerText = `+$${currentClueValue}`;
            correctBtn.classList.add('increase-btn');
            correctBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                adjustPlayerScore(index, currentClueValue);

                // Play correct answer audio
                correctAnswerAudio.currentTime = 0; // Reset audio to start
                correctAnswerAudio.play();
            });

            const incorrectBtn = document.createElement('button');
            incorrectBtn.innerText = `–$${currentClueValue}`;
            incorrectBtn.classList.add('decrease-btn');
            incorrectBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                adjustPlayerScore(index, -currentClueValue);

                // Play wrong answer audio
                wrongAnswerAudio.currentTime = 0; // Reset audio to start
                wrongAnswerAudio.play();
            });

            adjustmentDiv.appendChild(playerNameDiv);
            adjustmentDiv.appendChild(correctBtn);
            adjustmentDiv.appendChild(incorrectBtn);

            scoreButtons.appendChild(adjustmentDiv);
        });
        scoreButtons.style.display = 'block';
    }

    function adjustPlayerScore(playerIndex, amount) {
        players[playerIndex].score += amount;
        updatePlayerScores();
    }

    function buildFinalJeopardy(finalData) {
        // Clear the game board
        gameBoard.innerHTML = '';

        const finalCategory = document.createElement('div');
        finalCategory.classList.add('final-category');
        finalCategory.innerText = `Final Jeopardy Category: ${finalData.category}`;
        gameBoard.appendChild(finalCategory);

        const finalClueBtn = document.createElement('button');
        finalClueBtn.classList.add('final-clue-btn');
        finalClueBtn.innerText = 'View Final Jeopardy Clue';
        finalClueBtn.addEventListener('click', () => {
            openFinalClue(finalData);
            finalClueBtn.style.display = 'none';
        });
        gameBoard.appendChild(finalClueBtn);
    }

    function openFinalClue(finalData) {
        clueText.innerText = finalData.clue;
        solutionText.style.display = 'none';
        solutionText.innerText = finalData.solution;
        clueModal.style.display = 'block';
        solutionRevealed = false;
        currentClueValue = 0; // For Final Jeopardy, you may handle wagers separately

        // Hide the Daily Double caption for Final Jeopardy
        dailyDoubleCaption.style.display = 'none';

        // Show score adjustment buttons (for Final Jeopardy)
        showScoreAdjustmentButtons();
    }

    function displayFinalScores() {
        gameBoard.innerHTML = '<h2>Final Scores</h2>';
        players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player-score');

            const playerNameDiv = document.createElement('div');
            playerNameDiv.classList.add('player-name');
            playerNameDiv.innerText = player.name;

            const playerAmountDiv = document.createElement('div');
            playerAmountDiv.classList.add('player-amount');
            playerAmountDiv.innerText = `$${player.score}`;

            playerDiv.appendChild(playerNameDiv);
            playerDiv.appendChild(playerAmountDiv);
            gameBoard.appendChild(playerDiv);
        });
    }

    // Event listener for Jeopardy Theme button
    jeopardyThemeBtn.addEventListener('click', () => {
        if (jeopardyThemeAudio.paused) {
            jeopardyThemeAudio.play();
            jeopardyThemeBtn.innerText = 'Pause Theme';
        } else {
            jeopardyThemeAudio.pause();
            jeopardyThemeBtn.innerText = 'Jeopardy Theme';
        }
    });
});
