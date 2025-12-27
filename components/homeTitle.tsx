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
            <div className="hansans text-5xl mb-3">
                김용균
            </div>
        );
    }
    title2() {
        return (
            <div className="hansans text-3xl mb-10 text-slate-300">
                Backend Engineer
            </div>
        );
    }
    comment() {
        return (
            <div className="kargugsu text-xl">
            </div>
        );
    }
    comment2() {
        return (
            <div className="kargugsu text-xl">
                안정적인 시스템을 팀과 함께 만들어가고싶습니다.
            </div>
        );
    }
}

export default function HomeTitle() {
    const ts = new titleShell(
        "bg-slate-600 text-white py-20 snap-start",
        "max-w-[48rem] mx-auto h-auto grid justify-items-center"
    );
    return ts.getContent();
}