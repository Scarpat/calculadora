/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState("0");
  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const handleAddToCount = (digit: string) => {
    const lastNumber = count?.split(/[^0-9.]/)?.pop();
    if (count == "0") {
      setCount(digit);
    } 
    else if (digit === ".") {
      if (lastNumber && !lastNumber.includes(".")) {
        setCount(count + digit);
      }
    } 
    else if (digit === "%") {
      if (lastNumber) {
        setCount(count.slice(0, count.length - lastNumber.length) + (Number(lastNumber)/100));
      }
    } 
    else if (!/[0-9]/.test(digit)) {
      setCount(
        /[0-9]/.test(count.slice(count.length - 1, count.length))
          ? count + digit
          : count.slice(0, count.length - 1) + digit
      );
    } else {
      setCount(count + digit);
    }
  };
  return (
    <>
      <main className="w-screen h-screen bg-slate-800 flex items-center justify-center">
        <div className="w-11/12 max-w-xl bg-slate-600 rounded-xl p-5">
          <div className="w-full bg-black p-4 rounded-lg  h-16 flex items-center">
            <p className="font-digital text-4xl digital-font ">{count}</p>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-4">
            <div className=" col-span-3 grid grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setCount(
                    count.length > 1 ? count.slice(0, count.length - 1) : "0"
                  );
                }}
                className="w-full h-16  bg-red-400 text-4xl rounded-lg"
              >
                {"<"}
              </button>
              <div />
              <button
                onClick={() => {
                  setCount("0");
                }}
                className="w-full h-16  bg-slate-400 text-4xl rounded-lg"
              >
                AC
              </button>
              {nums.map((e) => (
                <button
                  onClick={() => {
                    handleAddToCount(String(e));
                  }}
                  className="w-full h-16  bg-orange-400 text-4xl rounded-lg"
                >
                  {e}
                </button>
              ))}
              <button
                onClick={() => {
                  handleAddToCount(".");
                }}
                className="w-full h-16  bg-slate-400 text-4xl rounded-lg"
              >
                .
              </button>
              <button
                onClick={() => {
                  handleAddToCount("0");
                }}
                className="w-full h-16  bg-orange-400 text-4xl rounded-lg"
              >
                0
              </button>
              <button    onClick={() => {
                  handleAddToCount("%");
                }} className="w-full h-16  bg-slate-400 text-4xl rounded-lg">
                %
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => {
                  handleAddToCount("+");
                }}
                className="w-full h-16  bg-slate-400 text-4xl rounded-lg"
              >
                +
              </button>
              <button
                onClick={() => {
                  handleAddToCount("-");
                }}
                className="w-full h-16  bg-slate-400 text-4xl rounded-lg"
              >
                -
              </button>
              <button
                onClick={() => {
                  handleAddToCount("*");
                }}
                className="w-full h-16  bg-slate-400 text-4xl rounded-lg"
              >
                *
              </button>
              <button
                onClick={() => {
                  handleAddToCount("/");
                }}
                className="w-full h-16  bg-slate-400 text-4xl rounded-lg"
              >
                /
              </button>
              <button
                onClick={() => {setCount(String(eval(count)))}}
                className="w-full h-16  bg-lime-600 text-4xl rounded-lg"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
