export default function authHeader() {
    const API_Key = process.env.NEXT_PUBLIC_G2U_API_KEY
    if (API_Key) {
        return { "x-api-key": API_Key };
    } else {
        return {};
    }
}
