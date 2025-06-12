const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "If you think you are too small to make a difference, try sleeping with a mosquito.", author: "Dalai Lama" },
  { text: "I'm not arguing, I'm just explaining why I'm right.", author: "Anonymous" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Why don’t scientists trust atoms? Because they make up everything!", author: "Dad Joke Central" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You can’t have everything. Where would you put it?", author: "Steven Wright" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" }
];

const colors = [
  '#ff6b6b', '#f06595', '#845ef7', '#5c7cfa', '#38d9a9', '#ffd43b', '#ffa94d', '#ff922b'
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const quoteBox = document.getElementById("quoteBox");
const body = document.body;

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function showNewQuote() {
  const { text, author } = getRandomQuote();
  const newColor = getRandomColor();

  
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = `"${text}"`;
    quoteAuthor.textContent = `— ${author}`;
    quoteBox.style.opacity = 1;
    body.style.background = `linear-gradient(45deg, ${newColor}, ${getRandomColor()})`;
  }, 300);
}

newQuoteBtn.addEventListener("click", showNewQuote);
