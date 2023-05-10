import { useState } from "react";
import Modal from "./modal";

export default function HomeStacks() {
  const [imgDescription, setImgDescription] = useState("");

  const imgClickHandler = (stackName : string) => {
    setImgDescription(stackName);
  };

  const stackTitle = (titleName : string) => (
    <div className="text-2xl text-indigo-700 font-bold mb-2">
      {titleName}
    </div>
  );

  const stackComponent = (iconFileName : string) => (
    <div className="mx-5 my-2">
        <img src={"icons/".concat(iconFileName.concat(".png"))} alt="" onClick={() => imgClickHandler(iconFileName)}/>
    </div>
  );
  
  return (
      <div className="bg-amber-400">
      <Modal isOpen={imgDescription} setOpen={setImgDescription}/>
      <div className="max-w-[48rem] mx-auto h-auto grid justify-items-center">
        <div className="hansans text-5xl mt-20">
          Skills
        </div>
        <div className="kargugsu text-xl mb-20">
          클릭하면 설명이 출력됩니다.
        </div>
        <div className="grid grid-cols-2 grid-flow-row mb-20 items-start">
          <div className="rounded-xl bg-white p-7 w-80 mx-5 shadow-2xl hover:shadow-indigo-700 row-span-2">
            <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
              {stackTitle("Backend")}
              <div className="flex flex-col">
                  {stackComponent("springboot")}
                  {stackComponent("java")}
                  {stackComponent("django")}
                  {stackComponent("python")}
                  {stackComponent("celery")}
                  {stackComponent("rabbitmq")}
                  {stackComponent("mysql")}
                  {stackComponent("firebase")}
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-7 w-80 mx-5 shadow-2xl hover:shadow-indigo-700">
            <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
              {stackTitle("Frontend")}
              <div className="flex flex-col">
                {stackComponent("react")}
                {stackComponent("nextjs")}
                {stackComponent("typescript")}
                {stackComponent("redux")}
                {stackComponent("tailwindcss")}
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-7 w-80 mx-5 my-10 shadow-2xl hover:shadow-indigo-700 row-span-2">
            <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
              {stackTitle("Deployment")}
              <div className="flex flex-col">
                {stackComponent("aws")}
                {stackComponent("dockercompose")}
                {stackComponent("jenkins")}
                {stackComponent("gitaction")}
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-7 w-80 mx-5 my-10 shadow-2xl hover:shadow-indigo-700">
            <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
              {stackTitle("etc")}
              <div className="flex flex-col">
                {stackComponent("jira")}
                {stackComponent("figma")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}