import React from "react";

const Main = () => {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full max-w-screen-md flex-col p-20 text-white">
        <div className="mb-5 w-full text-center text-2xl">Chat App</div>

        <div className="flex w-full gap-5 rounded-md bg-neutral-700 p-5">
          <div className="flex w-1/3 flex-col rounded-md">
            <div className="flex w-full border-b bg-neutral-600">test</div>
            <div className="flex w-full bg-neutral-600">testing</div>
          </div>
          <div className="flex h-40 w-full flex-col rounded-md bg-neutral-500 p-5">
            <div className="flex">chat</div>
            <input
              type="text"
              className="focus:border-1 flex w-full self-baseline rounded-md border bg-neutral-400 p-2.5 outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
