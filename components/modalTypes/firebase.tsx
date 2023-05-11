import { ModalContent } from "./modalContent";

export class firebaseModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    서비스를 만들면서 SNS 계정 연동을 위해 도입했습니다.
                </li>
                <li>
                    Authentication 뿐만 아니라, 사용자에게 Push alarm을 제공하는 FCM도 함께 사용했습니다.
                </li>
            </div>
        );
    }
}