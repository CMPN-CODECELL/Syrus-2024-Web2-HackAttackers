// Array containing the giggles
const giggles = [
  {
    title: "Why don't skeletons fight each other?",
    description: "Skeletons, being made of bones, lack the capability to engage in physical combat. This joke plays on the literal meaning of guts as internal organs and guts as courage or bravery. By stating that skeletons don't have the guts, it humorously implies that they lack both the physical organs and the courage necessary for a fight, adding a playful and light-hearted twist."
  },
  {
    title: "What did the grape do when it got stepped on?",
    description: "Grapes, being squishy fruits, would likely burst or release liquid when stepped on. This joke personifies the grape, suggesting that it reacts like a human when under pressure. The wordplay on wine adds a humorous twist, as wine refers to both the liquid that grapes produce and the sound a person might make when in pain or distress."
  },
  
  {
    title: "Why couldn't the bicycle stand up by itself?",
    description: "Bicycles need to be balanced to remain upright, and without someone holding or leaning them against something, they tend to fall over. This joke humorously personifies the bicycle by suggesting that it lacks the physical capability to stand up on its own, adding a playful twist to a common scenario."
  },
  {
    title: "What did one plate say to the other plate?",
    description: " Plates, being inanimate objects, cannot speak or engage in conversation. This joke creates a humorous scenario by personifying the plates and imagining them having a conversation. The punchline, Lunch is on me, plays on the double meaning of on me, suggesting both the physical placement of food on a plate and the idiomatic expression meaning someone will pay for a meal."
  },
  {
    title: "Why did the tomato turn red?",
    description: "This giggle sets up a playful scenario involving a tomato, a common vegetable known for its red color when ripe. The punchline, Because it saw the salad dressing, introduces a humorous twist by anthropomorphizing the tomato and suggesting that it blushed or changed color upon seeing the salad dressing. This personification adds a whimsical element to the joke, combining food-related humor with a playful observation about human behavior."
  },
  {
    title: "How does a penguin build its house?",
    description: "This giggle sets up a playful scenario involving a penguin, a bird known for its distinctive appearance and habitat in cold climates. The unexpected punchline, Igloos it together, adds humor by incorporating a pun based on the word igloos and the phrase glues it together. This clever wordplay creates a humorous contrast between the natural behavior of penguins and the human-made structure of an igloo, resulting in a lighthearted and amusing joke."
  }
];

// Function to get a random giggle
function getRandomGiggle() {
  const randomIndex = Math.floor(Math.random() * giggles.length);
  return giggles[randomIndex];
}

// Function to update the modal content with a random giggle
function updateModal() {
  const randomGiggle = getRandomGiggle();
  document.getElementById('giggleTitle').textContent = randomGiggle.title;
  document.getElementById('giggleDescription').textContent = randomGiggle.description;
}

// Event listener for when the modal is shown
document.getElementById('exploreGigglesModal').addEventListener('shown.bs.modal', function () {
  updateModal();
});
