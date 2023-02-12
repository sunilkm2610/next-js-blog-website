// const baseURL = "http://localhost:3000/api/posts";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://deft-gingersnap-8e09f5.netlify.app/"
    : "http://localhost:3000/api/posts";
console.log(process.env.NODE_ENV);

// endpoint: http://localhost:3000/api/posts
export default async function getPost(id) {
  const res = await fetch(`${baseURL}api/posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
