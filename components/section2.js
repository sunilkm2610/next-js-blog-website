import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  const { data, isLoading, isError } =
    fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="md:px-20 py-10 bg-gray-800">
      <h1 className="font-bold text-4xl py-12 text-center text-gray-50">
        Latest Posts
      </h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const {
    id,
    title,
    category,
    img,
    published,
    author,
  } = data;
  return (
    <div className="item hover:bg-gray-900 p-3 cursor-pointer rounded">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              alt="image"
              src={img || "/"}
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-800 hover:text-orange-700">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-500">
              - {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-600">
              {title || "Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no
          control about the blind texts it is an
          almost unorthographic life One day
          however a small line of blind text by
          the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        {author ? (
          <Author {...author}></Author>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
