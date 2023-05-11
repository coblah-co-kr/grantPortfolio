import { htmlShell } from "./htmlShell";

class profileShell extends htmlShell {
  constructor(themeCode:string, frameCode:string) {
    super(themeCode, frameCode);
  }

  getContent() {
    return (
      <div className={this.themeCode}>
        {this.content()}
      </div>
    );
  }
  content() {
    return (
      <div className={this.frameCode}>
        {this.title()}
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 mb-20">
          {this.addInfo("school", "학력", ["한국항공대학교", "전자정보공학부"])}
          {this.addInfo("birthday", "생년월일", ["1992.12.28"])}
          {this.addInfo("address", "주소", ["경기도 하남시"])}
          {this.addInfo("phone", "연락처", ["010-4141-3783"])}
          {this.addInfo("email", "이메일", ["grant@coblah.co.kr"], "text-sm")}
          {this.addInfo("git", "Git", ["github.com/modec28"], "text-xs")}
        </div>
      </div>
    );
  }
  title () {
    return (
      <div className="hansans text-5xl my-20">
        Profile
      </div>
    );
  }
  addInfo(iconName:string, topic:string, detail:Array<string>, textSize?:string) {
    return (
      <div className="flex flex-row">
        <div className="basis-1/3 mr-2">
          <img src={"icons/".concat(iconName.concat(".png"))} alt="" />
        </div>
        <div className="basis-full flex flex-col">
          <div className="text-slate-600 font-bold">
            {topic}
          </div>
          <div className={textSize}>
            {detail.map((char, index) => this.divChar(char, index))}
          </div>  
        </div>
      </div>
    );
  }
  divChar(char:string, index:number) {
    return (
      <div key={index}>
        {char}<br/>
      </div>
    );
  }
}

export default function HomeProfile() {
  const ps = new profileShell(
    "bg-white text-black py-10 snap-start",
    "max-w-[48rem] mx-auto h-auto grid justify-items-center"
  );
  return ps.getContent();
}