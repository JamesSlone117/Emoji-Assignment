
const $wrapper = document.getElementById("wrapper") 

const emojis = [
    8986, 8987, 129409, 9193, 9200, 9748, 9924,
    9971, 10060, 128585, 129409, 128514
];



const emojisList = [];


for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    emojisList.push (
        `
        <p class = "card">
        <span>&#${emoji};</span><br>
        <code>${emoji}</code>
        </p>
        `
    )
}

$wrapper.innerHTML=emojisList.join("")




