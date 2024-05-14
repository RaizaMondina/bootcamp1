interface SwitchGame {
    id: number,
    name: string,
    genre: string[],
    developers: string[],
    publisher: string[],
    releaseDates: {
        Japan: string,
        NorthAmerica: string,
        Europe: string,
        Australia: string
    }
}

const fetchData = async () => {
    try {
        const response = await fetch("https://api.sampleapis.com/switch/games");
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const switchGames: SwitchGame[] = await response.json();
        console.log("Number of games:", switchGames.length);
        console.log("First 10 games:");
        for (let i = 0; i < 10 && i < switchGames.length; i++) {
            console.log(switchGames[i]);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
