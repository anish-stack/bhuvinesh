"use client";
import SearchProperty from "@/components/SearchProperty";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>} >
        <SearchProperty />
      </Suspense>
    </>
  );
};

export default page;
