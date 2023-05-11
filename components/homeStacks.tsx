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

  const stackComponent = (iconFileName : string, index: number) => (
    <div className="mx-5 my-2" key={index}>
        <img src={"icons/".concat(iconFileName.concat(".png"))} alt="" onClick={() => imgClickHandler(iconFileName)}/>
    </div>
  );

  const setTitle = (stackTitle : string) => (
    <div className="hansans text-5xl mt-20">
      {stackTitle}
    </div>
  );

  const setTitleCaption = (stackTitleCaption : string) => (
    <div className="kargugsu text-xl mb-20">
      {stackTitleCaption}
    </div>
  );

  const addBlock = (titleName:string, stackList:Array<string>, spanType:string) => (
    <div className={"rounded-xl bg-white p-7 w-80 mx-5 shadow-2xl hover:shadow-indigo-700 ".concat(spanType)}>
      <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
        {stackTitle(titleName)}
        <div className="flex flex-col">
          {stackList.map((stack, index) => stackComponent(stack, index))}
        </div>
      </div>
    </div>
  );
  
  return (
      <div className="bg-amber-400">
      <Modal imgDescription={imgDescription} setImgDescription={setImgDescription}/>
      <div className="max-w-[48rem] mx-auto h-auto grid justify-items-center">
        {setTitle("Skills")}
        {setTitleCaption("클릭하면 설명이 출력됩니다.")}
        <div className="grid grid-cols-2 grid-flow-row mb-20 items-start gap-y-10">
          {addBlock("Backend", ["django", "python", "celery", "rabbitmq", "redis", "mysql", "firebase", "springboot", "java",], "row-span-2")}
          {addBlock("Frontend", ["react", "nextjs", "typescript", "redux", "tailwindcss"], "")}
          {addBlock("Deployment", ["aws", "dockercompose", "gitaction", "jenkins"], "row-span-2")}
          {addBlock("etc", ["jira", "slack", "figma"], "")}
        </div>
      </div>
    </div>
  );
}