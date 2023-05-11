import { ModalContent } from "./modalContent";

export class gitactionModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    Pull-request를 Jira와 Slack에 알리기 위해 도입했습니다.
                </li>
            </div>
        );
    }
}