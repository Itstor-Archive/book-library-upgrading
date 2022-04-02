import Image from "next/image";

export default function Card({
  bookName,
  bookAuthor,
  bookPublisher,
  bookCoverImage,
}) {
  return (
    <div className="grid items-start justify-center gap-8">
      <div className="group relative">
        <div className="animate-tilt absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"></div>
        <div className="relative max-w-sm rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4">
            <div className="grid grid-cols-2 items-start gap-5">
              <Image
                className="shrink-0 rounded-2xl"
                src={bookCoverImage}
                alt="Book"
                width="200px"
                height="300px"
                layout="responsive"
              />

              <div className="grid grid-flow-row items-start gap-1 flex-wrap">
                <h1 className="text-white text-2xl font-semibold">
                  {bookName}
                </h1>
                <div className="mt-3"></div>
                <span className="text-white text-xs font-bold">
                  Author:{" "}
                  <span className="text-white text-xs font-light">
                    {bookAuthor}
                  </span>
                </span>
                <span className="text-white text-xs font-bold">
                  Publisher:{" "}
                  <span className="text-white text-xs font-light">
                    {bookPublisher}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
