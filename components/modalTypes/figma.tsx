import { ModalContent } from "./modalContent";

export class figmaModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    기획, 디자이너, 개발자간 원활한 커뮤니케이션을 위해 도입했습니다.
                </li>
                <li>
                    개인 프로젝트의 기획을 디자인하고, 플러그인을 통해 참고용 css를 만드는데 사용하고 있습니다.
                </li>
            </div>
        );
    }
}