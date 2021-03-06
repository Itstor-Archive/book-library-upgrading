import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react/cjs/react.development'
import Card from '../components/BookCard'
import styles from '../styles/Home.module.css'

function Home({ data }) {
  const [books, setBooks] = useState(data)


  const addBook = async event => {
    event.preventDefault()

    var newBook = {
      "judul": event.target.bookTitle.value,
      "coverBuku": event.target.bookCover.value,
      "tahun": event.target.bookYear.value,
      "pengarang": event.target.bookAuthor.value,
      "penerbit": event.target.bookPublisher.value,
    }

    const { data } = await axios.post('http://localhost:3001/books', newBook)

    setBooks([...books, data])
  }
  return (
    <div className="p-1 bg-gray-900">
      <Head>
        <title>Book Library</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl font-bold text-white font-sans">
          Book Library
        </h1>

        <div className="mt-24 bg-gray-800 p-5 w-1/2 rounded-xl border border-gray-700">
          <form onSubmit={addBook}>

            <div className="grid grid-flow-row gap-2 w-full">

              <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Title</label>
              <input type="text" id="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


              <label htmlFor="bookAuthor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Author</label>
              <input type="text" id="bookAuthor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

              <label htmlFor="bookYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tahun terbit</label>
              <input type="text" id="bookYear" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

              <label htmlFor="bookPublisher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Publisher</label>
              <input type="text" id="bookPublisher" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


              <label htmlFor="bookCover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Cover Image</label>
              <input type="text" id="bookCover" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4">Submit</button>

            </div>
          </form>

        </div>


        <div className='grid grid-rows-1 gap-6 mt-28 md:grid-cols-3'>
          {books.map((book) => (
            <Card key={book._id} bookName={book.judul} bookAuthor={book.pengarang} bookPublisher={book.penerbit} bookCoverImage={book.coverBuku} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:3001/books/')

  return {
    props: {
      data
    },
  }
}

export default Home