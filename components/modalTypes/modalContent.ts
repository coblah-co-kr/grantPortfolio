import { ReactElement } from "react";

export abstract class ModalContent {
    abstract getContent():ReactElement;
}