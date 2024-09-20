document.addEventListener('DOMContentLoaded', () => {

    const gameData = {
        "single": [
            {
                "category": "Chapter 1 part 1",
                "clues": [
                    {
                        "value": 200,
                        "clue": "Matt is updating the organization’s threat assessment process. What category of control is Matt implementing?\nA. Operational\nB. Technical\nC. Corrective\nD. Managerial",
                        "solution": "D. Managerial controls are procedural mechanisms that focus on the mechanics of the risk management process. Threat assessment is an example of one of these activities."
                    },
                    {
                        "value": 400,
                        "clue": "Jade’s organization recently suffered a security breach that affected stored credit card data. Jade’s primary concern is the fact that the organization is subject to sanctions for violating the provisions of the Payment Card Industry Data Security Standard. What category of risk is concerning Jade?\nA. Strategic\nB. Compliance\nC. Operational\nD. Financial",
                        "solution": "B. The breach of credit card information may cause many different impacts on the organization, including compliance, operational, and financial risks. However, in this scenario, Jade’s primary concern is violating PCI DSS, making his concern a compliance risk."
                    },
                    {
                        "value": 600,
                        "clue": "Chris is responding to a security incident that compromised one of his organization’s web servers. He believes that the attackers defaced one or more pages on the website. What cybersecurity objective did this attack violate?\nA. Confidentiality\nB. Nonrepudiation\nC. Integrity\nD. Availability",
                        "solution": "C. The defacement of a website alters content without authorization and is, therefore, a violation of the integrity objective. The attackers may also have breached the confidentiality or availability of the website, but the scenario does not provide us with enough information to draw those conclusions."
                    },
                    {
                        "value": 800,
                        "clue": "Gwen is exploring a customer transaction reporting system and discovers the table shown here. What type of data minimization has most likely been used on this table?\nA. Destruction\nB. Masking\nC. Tokenization\nD. Hashing",
                        "solution": "B. In this case, the first 12 digits of the credit card have been removed and replaced with asterisks. This is an example of data masking."
                    },
                    {
                        "value": 1000,
                        "clue": "Tonya is concerned about the risk that an attacker will attempt to gain access to her organization’s database server. She is searching for a control that would discourage the attacker from attempting to gain access. What type of security control is she seeking to implement?\nA. Preventive\nB. Detective\nC. Corrective\nD. Deterrent",
                        "solution": "D. Deterrent controls are designed to prevent an attacker from attempting to violate security policies in the first place."
                    }                
                ]
            },
            {
                "category": "Chapter 1 part 2",
                "clues": [
                    {
                        "value": 200,
                        "clue": "Greg is implementing a data loss prevention system. He would like to ensure that it protects against transmissions of sensitive information by guests on his wireless network. What DLP technology would best meet this goal?\nA. Watermarking\nB. Pattern recognition\nC. Host-based\nD. Network-based",
                        "solution": "D. Greg must use a network-based DLP system. Host-based DLP requires the use of agents, which would not be installed on guest systems. Greg may use watermarking and/or pattern recognition to identify the sensitive information, but he must use network-based DLP to meet his goal."
                    },
                    {
                        "value": 400,
                        "clue": "What term best describes data that is being sent between two systems over a network connection?\nA. Data at rest\nB. Data in transit\nC. Data in processing\nD. Data in use",
                        "solution": "B. Data being sent over a network is data in transit."
                    },
                    {
                        "value": 600,
                        "clue": "Tina is tuning her organization’s intrusion prevention system to prevent false positive alerts. What type of control is Tina implementing?\nA. Technical control\nB. Physical control\nC. Managerial control\nD. Operational control",
                        "solution": "A. Technical controls enforce confidentiality, integrity, and availability in the digital space."
                    },
                    {
                        "value": 800,
                        "clue": "Which one of the following is not a common goal of a cybersecurity attacker?\nA. Disclosure\nB. Denial\nC. Alteration\nD. Allocation",
                        "solution": "D. The three primary goals of cybersecurity attackers are disclosure, alteration, and denial."
                    },
                    {
                        "value": 1000,
                        "clue": "Tony is reviewing the status of his organization’s defenses against a breach of their file server. He believes that a compromise of the file server could reveal information that would prevent the company from continuing to do business. What term best describes the risk that Tony is considering?\nA. Strategic\nB. Reputational\nC. Financial\nD. Operational",
                        "solution": "A. The risk that Tony is contemplating is strategic because it concerns the company's ability to continue doing business if the risk materializes."
                    },
                ]
            },
            {
                "category": "Chapter 1 part 3",
                "clues": [
                    {
                        "value": 200,
                        "clue": "Which one of the following data elements is not commonly associated with identity theft?\nA. Social Security number\nB. Driver's license number\nC. Frequent flyer number\nD. Passport number",
                        "solution": "C. It is far more likely that identity thieves would use core identity documents like driver’s licenses, passports, and Social Security numbers."
                    },
                    {
                        "value": 400,
                        "clue": "What term best describes an organization’s desired security state?\nA. Control objectives\nB. Security priorities\nC. Strategic goals\nD. Best practices",
                        "solution": "A. Control objectives are statements of the desired security state that the organization wishes to achieve."
                    },
                    {
                        "value": 600,
                        "clue": "Lou mounted the sign below on the fence surrounding his organization’s data center. What control type best describes this control?\nA. Compensating\nB. Detective\nC. Physical\nD. Deterrent",
                        "solution": "D. The sign only has value as a deterrent control."
                    },
                    {
                        "value": 800,
                        "clue": "What technology uses mathematical algorithms to render information unreadable to those lacking the required key?\nA. Data loss prevention\nB. Data obfuscation\nC. Data minimization\nD. Data encryption",
                        "solution": "D. Encryption uses mathematical algorithms to protect information from prying eyes."
                    },
                    {
                        "value": 1000,
                        "clue": "Greg recently conducted an assessment of his organization’s security controls and discovered a potential gap: the organization does not use full-disk encryption on laptops. What type of control gap exists in this case?\nA. Detective\nB. Corrective\nC. Deterrent\nD. Preventive",
                        "solution": "D. The use of full-disk encryption is intended to prevent a security incident from occurring if a device is lost or stolen, making this a preventive control gap."
                    },
                ]
            },
            {
                "category": "Chapter 1 part 4",
                "clues": [
                    {
                        "value": 200,
                        "clue": "What compliance regulation most directly affects the operations of a health-care provider?\nA. HIPAA\nB. PCI DSS\nC. GLBA\nD. SOX",
                        "solution": "A. HIPAA provides direct regulations for the security and privacy of protected health information and has the most direct impact on a health-care provider."
                    },
                    {
                        "value": 400,
                        "clue": "Nolan is writing an after-action report on a security breach that took place in his organization. The attackers stole thousands of customer records from the organization’s database. What cybersecurity principle was most impacted in this breach?\nA. Availability\nB. Nonrepudiation\nC. Confidentiality\nD. Integrity",
                        "solution": "C. The disclosure of sensitive information to unauthorized individuals is a violation of the principle of confidentiality."
                    },
                    {
                        "value": 600,
                        "clue": "Which one of the following objectives is not one of the three main objectives that information security professionals must achieve to protect their organizations against cybersecurity threats?\nA. Integrity\nB. Nonrepudiation\nC. Availability\nD. Confidentiality",
                        "solution": "B. The three primary objectives of cybersecurity professionals are confidentiality, integrity, and availability."
                    },
                    {
                        "value": 800,
                        "clue": "Which one of the following data protection techniques is reversible when conducted properly?\nA. Tokenization\nB. Masking\nC. Hashing\nD. Shredding",
                        "solution": "A. Tokenization techniques use a lookup table and are designed to be reversible."
                    },
                    {
                        "value": 1000,
                        "clue": "Which one of the following statements is not true about compensating controls under PCI DSS?\nA. Controls used to fulfill one PCI DSS requirement may be used to compensate for the absence of a control needed to meet another requirement.\nB. Controls must meet the intent of the original requirement.\nC. Controls must meet the rigor of the original requirement.\nD. Compensating controls must provide a similar level of defense as the original requirement.",
                        "solution": "A. PCI DSS compensating controls must be “above and beyond” other PCI DSS requirements."
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

        // Set up the grid columns based on the number of categories
        const numCategories = roundData.length;
        gameBoard.style.gridTemplateColumns = `repeat(${numCategories}, 1fr)`;

        // Build category headers
        roundData.forEach(category => {
            const categoryCell = document.createElement('div');
            categoryCell.classList.add('category-cell');
            categoryCell.innerText = category.category;
            gameBoard.appendChild(categoryCell);
        });

        // Determine the maximum number of clues in any category
        let maxClues = 0;
        roundData.forEach(category => {
            if (category.clues.length > maxClues) {
                maxClues = category.clues.length;
            }
        });

        // Build clue cells
        for (let i = 0; i < maxClues; i++) {
            roundData.forEach(category => {
                const clueCell = document.createElement('div');
                clueCell.classList.add('clue-cell');

                if (category.clues[i]) {
                    const clue = category.clues[i];
                    clueCell.innerText = `$${clue.value}`;
                    clueCell.dataset.round = currentRound;
                    clueCell.addEventListener('click', () => {
                        if (!clueCell.classList.contains('used')) {
                            openClue(clue, clueCell);
                            clueCell.classList.add('used');
                        }
                    });
                } else {
                    // Empty cell for uneven clues
                    clueCell.classList.add('empty-cell');
                }

                gameBoard.appendChild(clueCell);
            });
        }

        // Update the number of remaining clues
        cluesRemaining = roundData.reduce((total, category) => total + category.clues.length, 0);
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
