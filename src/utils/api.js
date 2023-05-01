const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_KEY = process.env.NEXT_PUBLIC_G2U_API_KEY
console.log("API_BASE_URL", API_BASE_URL)

export async function getGamesList(zipcode) {

    const gamesRes = await fetch(`${API_BASE_URL}/games/${zipcode}`, {
        method: "GET",
        headers: {
            'x-api-key': API_KEY
          },
    });
    const games = await gamesRes.json();
    return games;
}