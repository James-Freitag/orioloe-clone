import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="w-full flex flex-col space-y-4 justify-center items-center mx-auto">
      <h2 className="text-md italic pl-5">
        We couldn&apos;t find the page you were looking for. This is either
        because:
      </h2>
      <ul className="list-disc pl-64 text-sm italic">
        <li>
          There is an error in the URL entered into your web browser. Please
          check the URL and try again.
        </li>
        <li>The page you are looking for has been moved or deleted.</li>
      </ul>
      <p className="text-md italic self-end">
        You can return to our homepage by <Link href="/">clicking here</Link>,
        or you can try searching for the content you are seeking by{" "}
        <Link href="/">clicking here</Link>.
      </p>
    </main>
  );
};

export default NotFound;
