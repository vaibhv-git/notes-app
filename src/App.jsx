import { useState } from "react";
import React from "react";

const App = () => {
  const [yoo, setYoo] = useState("");

  const [lol, setLol] = useState("");

  const [pass, setPass] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copy = [...pass];
    if (!yoo || !lol) return;

    copy.push({ yoo, lol });

    setPass(copy);

    setYoo("");
    setLol("");
  };

  const deleteHandler = (idx) => {
    const newNotes = pass.filter((elem, index) => {
      return index !== idx;
    });

    setPass(newNotes);
  };

  return (
    <div>
      <div className="p-7 float-animation">
        <h1 className="p-2 mt-3 text-center text-5xl capitalize text-amber-500 love-ya-like-a-sister-regular">
          Your Personal Notes Hub
        </h1>
        <h3 className="p-3 text-center text-s capitalize text-white love-ya-like-a-sister-regular">
          you can create or delete your notess !!
        </h3>
      </div>

      <form
        onSubmit={submitHandler}
        className="min-h-screen w-full text-white mynerve-regular"
      >
        <div className="flex flex-col lg:flex-row gap-5">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/2 p-5 md:p-10 flex flex-col gap-5">
            <h1 className="text-yellow-300 capitalize text-2xl md:text-3xl font-bold">
              write your notes
            </h1>

            <input
              className="bg-white text-black  outline-none w-full px-5 py-2 rounded"
              type="text"
              placeholder="Enter Title"
              value={yoo}
              onChange={(e) => {
                setYoo(e.target.value);
              }}
            />

            <textarea
              className="bg-white text-black  outline-none w-full px-5 py-2 h-42 rounded"
              placeholder="Add Note..."
              value={lol}
              onChange={(e) => {
                setLol(e.target.value);
              }}
            ></textarea>

            <button className="bg-white text-black active:scale-95 w-full px-5 py-2 rounded hover:bg-cyan-500 hover:text-white transition">
              Create
            </button>
          </div>

          {/* RIGHT SECTION */}

          <div className="lg:border-1-2 lg:w-1/2 p-10 ">
            <h1 className="mb-4 capitalize text-2xl md:text-3xl font-bold text-yellow-300">
              your notes
            </h1>
            <div className="flex flex-wrap h-full gap-5 mt-5 overflow-auto">
              {pass.map(function (elem, idx) {
                return (
                  <div
                    key={idx}
                    className="card-hover hover:scale-95 mt-3 bg-center bg-cover bg-[url('https://i.pinimg.com/736x/0a/66/17/0a66179110ec0ba95c23e4bc3619ef28.jpg')] min-h-75 w-72 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col"
                  >
                    <h2 className="text-black mt-4 leading-tight break-all text-2xl flex text-center px-5 py-4.5 capitalize">
                      {elem.yoo}
                    </h2>
                    <p className="text-gray-600  break-all text-m leading-tight px-5  overflow-y-auto scrollbar-hide">
                      {elem.lol}
                    </p>
                    <button
                      onClick={() => deleteHandler(idx)}
                      className="mt-auto active:scale-95 w-2/6 text-center mx-5 px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition-all mb-10"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
