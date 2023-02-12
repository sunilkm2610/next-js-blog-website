import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";

import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section4() {
  const { data, isLoading, isError } = fetcher(
    "api/popular"
  );

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="md:px-20 py-16 bg-gray-800">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-gray-50">
            Business
          </h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[1] ? (
              <Post data={data[1]}></Post>
            ) : (
              <></>
            )}
            {data[2] ? (
              <Post data={data[2]}></Post>
            ) : (
              <></>
            )}
            {data[3] ? (
              <Post data={data[3]}></Post>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-gray-50">
            Travel
          </h1>
          <div className="flex flex-col gap-6">
            {data[4] ? (
              <Post data={data[4]}></Post>
            ) : (
              <></>
            )}
            {data[5] ? (
              <Post data={data[5]}></Post>
            ) : (
              <></>
            )}
            {data[2] ? (
              <Post data={data[2]}></Post>
            ) : (
              <></>
            )}
          </div>
        </div>
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
    <div className="flex gap-5 rounded hover:bg-gray-900 cursor-pointer p-3">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || ""}
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-800 hover:text-orange-700">
              {category || "No Category"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-600 hover:text-gray-600">
              - {published || ""}
            </a>
          </Link>
        </div>
        <div className="title text-gray-600">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-600 hover:text-gray-600">
              {title || "No Title"}
            </a>
          </Link>
        </div>
        {author ? (
          <Author {...author}></Author>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
