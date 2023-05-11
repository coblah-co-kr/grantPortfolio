import { ModalContent } from "./modalContent";

export class jenkinsModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    테스트 파이프라인과 배포 자동화를 위해 도입했습니다.
                </li>
            </div>
        );
    }
}