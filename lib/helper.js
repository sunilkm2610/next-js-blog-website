// const baseURL = "http://localhost:3000/api/posts";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://next-js-blog-website-7c14.vercel.app/"
    : "http://localhost:3000/";

// endpoint: http://localhost:3000/api/posts
export default async function getPost(id) {
  // const res = await fetch(`${baseURL}api/posts`);
  // const posts = await res.json();
  // if (id) {
  //   return posts.find((value) => value.id == id);
  // }
  // return posts;
  return [];
}
