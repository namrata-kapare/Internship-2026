import React, { useState, useEffect } from "react";
import { baseBookURL } from "../axiosInstance.js";

const Home = () => {
// displaying the books 

const [booklist,setBookList]=useState([])

 const getBookList=async()=>{                           
  try{
  const{data}= await baseBookURL.get("getbook")
  setBookList(data.BookList)
  console.log(data.BookList);
  console.log(data);
  }catch(err){
    console.log(err.message);
  }
}
 
// reload
useEffect(()=>{
  getBookList();
},[])
 
 

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-10 py-5 flex justify-between">
        <h1 className="text-3xl font-bold text-indigo-600">
          BookNest
        </h1>

        <div className="space-x-6">
          <button>Home</button>
          <button>Books</button>
          <button>Add Book</button>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="text-center py-16">

        <h1 className="text-5xl font-bold text-gray-800">
          Manage Your Books Easily
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Store, manage and explore your favourite books in one place.
        </p>

        <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full">
          Explore Books
        </button>

      </section>



      {/* Books Cards */}
      <section className="px-10 pb-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Books
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {
            booklist.map((book)=>(
              
              <div 
                key={book.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
              >

                <img 
                  src={book.image}
                  alt={book.name}
                  className="w-full h-56 object-cover"
                />


                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {book.name}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Author: {book.author}
                  </p>

                  <p className="text-gray-600">
                    Category: {book.category}
                  </p>

                  <p className="text-indigo-600 font-bold mt-2">
                    {book.price}
                  </p>

                  <p className="mt-3 text-gray-500">
                    {book.description}
                  </p>


                  <button className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded-lg">
                    View Details
                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-5">
        © 2026 BookNest
      </footer>


    </div>
  );
};


export default Home;