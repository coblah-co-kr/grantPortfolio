import { ReactElement, useState } from "react";
import Modal from "./modal";
import { htmlShell } from "./htmlShell";


class stackScript extends htmlShell {
  private modalVariable : string;
  private setModalVariable : Function;


  constructor(themeCode:string, frameCode:string, modalVariable:string, setModalVariable:Function) {
      super(themeCode, frameCode);
      this.modalVariable = modalVariable;
      this.setModalVariable = setModalVariable;
  }

  getContent() {
      return (
          <div className={this.themeCode}>
              <Modal imgDescription={this.modalVariable} setImgDescription={this.setModalVariable}/>           
              {this.content()}
          </div>
      );
  }
  content() {
      return (
          <div className={this.frameCode}>
              {this.title()}
              {this.titleCaption()}
              <div className="grid grid-cols-2 grid-flow-row mb-20 items-start gap-y-10">
                {this.addBlock(
                  "Backend", 
                  ["django", "python", "celery", "rabbitmq", "redis", "mysql", "firebase", "springboot", "java"],
                  "row-span-2",  
                )}
                {this.addBlock(
                  "Frontend", 
                  ["react", "nextjs", "typescript", "redux", "tailwindcss"], 
                )}
                {this.addBlock(
                  "Deployment", 
                  ["aws", "dockercompose", "gitaction", "jenkins"], 
                  "row-span-2", 
                )}
                {this.addBlock(
                  "etc", 
                  ["jira", "slack", "figma"], 
                )}
              </div>
          </div>
      );
  }

  title() {
      return (
          <div className="hansans text-5xl mt-20">
              Skills
          </div>
      );
  }
  titleCaption():ReactElement {
      return (
          <div className="kargugsu text-xl mb-20">
          클릭하면 설명이 출력됩니다.
          </div>
      );
  }
  addBlock(blockTitle:string, stackList:Array<string>, spanRow?:string):ReactElement {
    return (
      <div className={"rounded-xl bg-white p-7 w-80 mx-5 shadow-2xl hover:shadow-indigo-700 ".concat(spanRow? spanRow: "")}>
          <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
              {this.setBlockTitle(blockTitle)}
              <div className="flex flex-col">
                {stackList.map((stack, index) => this.setBlockComponent(stack, index))}
              </div>
          </div>
      </div>
    );
  }
  setBlockTitle(titleName: string):ReactElement {
    return (
      <div className="text-2xl text-indigo-700 font-bold mb-2">
        {titleName}
      </div>
    );
  }
  setBlockComponent(iconFileName: string, index:number):ReactElement {
    return (
      <div className="mx-5 my-2" key={index}>
          <img src={"icons/".concat(iconFileName.concat(".png"))} alt="" onClick={() => this.setModalVariable(iconFileName)}/>
      </div>
    );
  }
}

export default function HomeStacks() {
  const [imgDescription, setImgDescription] = useState("");
  const ss = new stackScript(
    "bg-amber-400",
    "max-w-[48rem] mx-auto h-auto grid justify-items-center",
    imgDescription,
    setImgDescription
  );
  
  return ss.getContent();
}