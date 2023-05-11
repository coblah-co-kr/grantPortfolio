import { ModalContent } from "./modalContent";

export class mySqlModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    MongoDB와 MySQL 둘다 써보며 고민하다가 Django ORM으로 사용했을 때, 보다 관리가 간편한 MySQL을 도입했습니다.
                </li>
                <li>
                    Django와 연동하기위해 pymysql을 사용했는데, InterfaceError, OperationError 이슈를 해결하는데 많은 고생을 했습니다.
                </li>
                <li>
                    서비스 사용자가 많아지면서 파티션을 나눠야했는데, Django 환경에서 MySQL은 파티셔닝 필드의 한계가 있어 추후 다른 DB 도입을 고려하고 있습니다.
                </li>
            </div>
        );
    }
}