const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
console.log("baseURL", baseURL)

export async function getAllBlogPosts() {

    // const postsRes = await fetch(API_BASE_URL + `blogs_dubai_collection_?fields=id,title,slug`);
    //const posts = await postsRes.json();
    return "posts";
}