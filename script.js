const quotes = [
  "When you sleep, close your eyes - Adrian",
  "Life is like a bicycle. To keep your balance, you must keep moving - Adrain Yeoh",
  "I'm not here to be perfect, I'm here to be real - Unknown",
  "Your time is limited, dont waste it living someone else's life - Steve Jobs",
  "Don't let anyone tell you what to can't do.Follow your dreams and persist - Barack Obama",
  "Be persistent and never give up hope - Lucas",
]

const images = [
  "https://i.pravatar.cc/400?img=68",
  "https://i.pravatar.cc/400?img=12",
  "https://i.pravatar.cc/400?img=5",
  "https://i.pravatar.cc/400?img=46",
  "https://i.pravatar.cc/400?img=69",
  "https://i.pravatar.cc/400?img=50",
]

function setQuote() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const randomImages = images[randomIndex];
  const quoteParts = randomQuote.split(' - ');
  console.log(quoteParts)
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;
  document.getElementById("images").src = randomImages;
}