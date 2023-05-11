import { ModalContent } from "./modalContent";

export class springbootModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    Django 보다 더 세밀하게 구성된 프레임워크를 공부하기위해 springboot를 도입했습니다.
                </li>
                <li>
                    아직은 Django에 비해 미숙해 개인 프로젝트에 적용하며 익숙해지고 있는 단계입니다.
                </li>
            </div>
        );
    }
}