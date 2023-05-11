import { ModalContent } from "./modalContent";

export class reduxModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    JWT 토큰을 프론트에서 효율적으로 관리하기 위해 도입했습니다.
                </li>
                <li>
                    토큰뿐만 아니라 다양한 상태값을 관리하는데 활용하고 있습니다.
                </li>
            </div>
        );
    }
}