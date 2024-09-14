import React from 'react'
import { Metadata } from "next";
import { InTro, Info, Similar } from "@/blocks";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "PageTwo",
};

const PageTwo = () => {
  return (
    <div>
      <InTro/>
      <Info/>
      <Similar/>
      <Footer/>
    </div>
  )
}

export default PageTwo



