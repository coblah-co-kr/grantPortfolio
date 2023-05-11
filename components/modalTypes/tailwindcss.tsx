import { ModalContent } from "./modalContent";

export class tailwindcssModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    Next.js를 도입하면서 함께 도입하게 되었습니다.
                </li>
                <li>
                    처음에는 JSX와 module.css에 비해 미숙해 사용빈도가 적었으나, 점차 빈도가 증가하고 있습니다.
                </li>
            </div>
        );
    }
}