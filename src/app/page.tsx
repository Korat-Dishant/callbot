"use client";
import Image from "next/image";

const callAPI = async () => {
  const res = await fetch("http://localhost:3000/api/contact", {
    method: "post",
    headers: {
      userID: "useriiidd",
      condition: "urgentnn",
    },
  }).then((res) => res.json());

  console.log("sending", res);
};
export default function Home() {
  return (
    <div className="h-screen bg-green-200">
      dashboard
      <button className="bg-red-400 h-20 w-64" onClick={callAPI}>click</button>
    </div>
  );
}
