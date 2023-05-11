import { ModalContent } from "./modalContent";

export class slackModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    Git과 Jira, 업무 DM의 비동기 커뮤니케이션을 위해 도입했습니다.
                </li>
                <li>
                    Slack 허들로 스크럼 회의를 하고, 서비스의 치명적인 오류를 수신받는 Logger로도 활용하고 있습니다.
                </li>
            </div>
        );
    }
}