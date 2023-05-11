import { ModalContent } from "./modalContent";

export class jiraModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    초기에는 Notion task의 칸반형식으로 업무를 할당했으나, Jira를 도입해 스크럼 방식으로 진행하고 있습니다.
                </li>
                <li>
                    Git과 Slack을 연동하여 지속적인 개발문화를 만드는데 기여하고 있습니다.
                </li>
            </div>
        );
    }
}