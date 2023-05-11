import { ModalContent } from "./modalContent";

export class reactModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    백엔드 개발을 시작하면서, 기획/QA에 제공할 테스트 페이지를 만들기 위해 도입했습니다.
                </li>
                <li>
                    Django template에서 표현할 수 없는 반응형 웹 페이지를 만들면서, 프론트 개발에 대한 욕심이 생겼습니다.
                </li>
            </div>
        );
    }
}