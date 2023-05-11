import { ModalContent } from "./modalContent";

export class rabbitMQModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    celery의 task를 중개할 메세지큐 브로커로 도입했습니다.
                </li>
                <li>
                    celery에서 rabbitmq를 추천하기도 했고, 대안인 redis는 cache 용도로만 사용하기 위해 구분했습니다.
                </li>
            </div>
        );
    }
}