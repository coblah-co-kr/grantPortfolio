import { ModalContent } from "./modalContent";

export class dockercomposeModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    서비스를 구성하는 컴포넌트들의 독립적인 환경을 위해 도입하여 활용중입니다.
                </li>
            </div>
        );
    }
}