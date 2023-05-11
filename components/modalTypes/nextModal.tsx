import { ModalContent } from "./modalContent";

export class nextjsModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    React로 페이지를 만들다보니, 점차 많은 데이터가 추가되면서 로딩 이슈가 발생해 도입하게 되었습니다.
                </li>
                <li>
                    서버 사이드 렌더링에 대한 개념을 알게되고, next.js로 다시 만들어 보면서 프론트 개발에 더욱 매료되었습니다.
                </li>
            </div>
        );
    }
}