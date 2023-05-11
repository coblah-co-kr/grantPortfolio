import { ModalContent } from "./modalContent";

export class typescriptModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    React에서 Next.js로 넘어가면서 Typescript도 함께 도입했습니다.
                </li>
                <li>
                    기존의 웹페이지에서 의도하지 않은 결과가 나오는 이슈가 있었고, Typescript를 도입하면서 해결할 수 있었습니다.
                </li>
            </div>
        );
    }
}