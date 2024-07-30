"use client";

import { Button } from "@headlessui/react";

export default function Users() {
  return (
    <div className="m-4 flex">
      <div className="space-between flex-row">
        <h1>Users</h1>
        <Button
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
          onClick={() => {
            console.log("Button has been clicked");
          }}
        >
          Create a user
        </Button>
      </div>
    </div>
  );
}
