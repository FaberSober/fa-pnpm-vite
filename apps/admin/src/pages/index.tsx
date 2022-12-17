import React from 'react';
import {Button, DatePicker} from "antd";
import {Button as UiButton} from "@fa/ui";


/**
 * @author xu.pengfei
 * @date 2022/12/17 17:23
 */
export default function index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web <br className="hidden lg:block" />
          <span className="inline-block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            Turborepo Example
          </span>{" "}
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <UiButton />
        </div>
        <Button type="primary">Hello</Button>
        <DatePicker />
      </main>
    </div>
  )
}