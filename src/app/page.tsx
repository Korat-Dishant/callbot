"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// const getData = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
//     method: "post",
//     headers: {
//       userID: "useriiid1d",
//       condition: "urgentnn",
//     },
//   }).then((res) => res.json());
//   console.log("sending", res);
// };

export default function Home() {
  useEffect(() => {
    const newData = getData();
    console.log("ndd", newData);
  }, []);

  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getData`, {
      method: "get",
    }).then((res) => res.json());
    console.log("data ===> ", res);
    setData(res);
  };

  return (
    <div className="h-screen bg-green-200">
      dashboard
      {data && data.data.length > 0
        ? data.data.map((item) => {
            return (
              <div className="w-full bg-blue-300 p-4">
                {item.userid} - {item.cause}
              </div>
            );
          })
        : "no data"}
      <button className="bg-red-400 h-20 w-64" onClick={getData}>
        click
      </button>
    </div>
  );
}
