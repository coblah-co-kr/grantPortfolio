import { ModalContent } from "./modalContent";

export class vercelModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    현재 보고계신 포트폴리오와 같이 간단한 Next.js 프로젝트를 배포하기위해 도입했습니다.
                </li>
            </div>
        );
    }
}