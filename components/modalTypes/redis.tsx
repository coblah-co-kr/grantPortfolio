import { ModalContent } from "./modalContent";

export class redisModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    DB를 보완할 Cache로 이용하기 위해 도입했습니다.
                </li>
                <li>
                    임시로 보관할 데이터 처리나, task간 데이터 서빙에 RabbitMQ를 보조하는 용도로 활용하고있습니다.
                </li>
            </div>
        );
    }
}