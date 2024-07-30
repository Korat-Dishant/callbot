"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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

  const [data, setData] = useState<any>(null);
  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getData`, {
      method: "get",
    }).then((res) => res.json());
    console.log("data ===> ", res);
    setData(res);
  };

  const testPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
      method: "post",
      headers: {
        userID: "EE222",
        condition: "urgent",
        userName: "test test",
        userEmail: "test@test.com",
        lastDate: "12/7",
      },
    }).then((res) => res.json());
    console.log("data ===> ", res);
  };

  return (
    <div className="h-screen bg-white ">
      <div className="py-12 overflow-x-scroll">
        <table className="w-fit mx-auto">
          <tbody>
            <tr>
              <th className="p-3 border-2 border-gray-900 w-80 min-w-96">
                Customer Id
              </th>
              <th className="p-3 border-2 border-gray-900 w-40 text-center">
                Attention
              </th>
            </tr>
            {data && data?.data?.length > 0 ? (
              data.data.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="p-3 border-2 border-gray-900 w-80">
                      {item.userid}
                    </td>
                    <td
                      className={twMerge(
                        "p-3 border-2 border-gray-900 w-40 text-center",
                        item?.cause === "urgent" &&
                          "bg-red-700/20 font-semibold"
                      )}
                    >
                      {item.cause}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="p-3 border-2 border-gray-900 w-80 min-w-96">
                  ...
                </td>
                <td className={"p-3 border-2 border-gray-900 w-40 text-center"}>
                  ...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <button
          className="border-green-600 border-2 p-2 px-4 rounded-xl bg-green-800/10 font-semibold"
          onClick={testPost}
        >
          Get Data
        </button>
      </div>
    </div>
  );
}
