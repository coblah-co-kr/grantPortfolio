import { ModalContent } from "./modalContent";

export class celeryModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    Django 프레임워크에서 서비스를 만들면서, 비동기 작업에 대한 수요를 충족하기 위해 도입했습니다.
                </li>
                <li>
                    prefork, solo, gevent pool들을 subtask로 나누어 용도에 맞게 처리하면서 안정적인 서비스를 제공할 수 있었습니다.
                </li>
            </div>
        );
    }
}