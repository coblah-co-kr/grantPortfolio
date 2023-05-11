import { htmlShell } from "./htmlShell";

class titleShell extends htmlShell {
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
                {this.title2()}
                {this.comment()}
                {this.comment2()}
            </div>
        );
    }
    title() {
        return (
            <div className="hansans text-5xl">
                김용균
            </div>
        );
    }
    title2() {
        return (
            <div className="hansans text-5xl mb-10">
                포트폴리오
            </div>
        );
    }
    comment() {
        return (
            <div className="kargugsu text-2xl">
                안녕하세요
            </div>
        );
    }
    comment2() {
        return (
            <div className="kargugsu text-2xl">
                연구원으로 커리어를 시작하여 웹 개발을 공부하고있습니다.
            </div>
        );
    }
}

export default function HomeTitle() {
    const ts = new titleShell(
        "bg-slate-600 text-white py-20",
        "max-w-[48rem] mx-auto h-auto grid justify-items-center"
    );
    return ts.getContent();
}