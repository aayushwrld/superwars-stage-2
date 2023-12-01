const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
];

const initPlayers = (players) => {
    let infoOfPlayers = [];
    players.forEach((play, i) => {
        let playerInfo = {
            name: play,
            strength: getRandomStrength(),
            image: `./images/super-${i + 1}.png`,
        };
        if (i % 2 != 0) {
            playerInfo.type = "villain";
        } else {
            playerInfo.type = "hero";
        }
        infoOfPlayers.push(playerInfo);
    });
    return infoOfPlayers;
};

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100) + 1;
};

const buildPlayers = (players, para) => {
    let dataOfPlayer = "";
    for (let i = 0; i < players.length; i++) {
        if (players[i].type === para) {
            console.log(players[i].type);
            dataOfPlayer += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`;
        }
    }
    return dataOfPlayer;
};

let getPlayer = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(players,"villain");
};

window.onload = () => {
    getPlayer(initPlayers(PLAYERS));
};