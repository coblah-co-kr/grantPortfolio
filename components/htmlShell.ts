import { ReactElement } from "react";

export abstract class htmlShell {
    protected themeCode:string;
    protected frameCode:string;

    constructor(themeCode:string, frameCode:string) {
        this.themeCode = themeCode;
        this.frameCode = frameCode;
    }

    public abstract getContent():ReactElement;
    protected abstract title():ReactElement;
    protected abstract content():ReactElement;
}