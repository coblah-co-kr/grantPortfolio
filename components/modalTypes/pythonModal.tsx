import { ModalContent } from "./modalContent";

export class pythonModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    C와 Verilog만 보다가 학부 3학년에 Python을 처음 접하면서 진로가 변경되었습니다.
                </li>
                <li>
                    다양한 커뮤니티와 수많은 오픈소스 덕분에 많은 프로젝트를 완수할 수 있었습니다.
                </li>
                <li>
                    최근에는 제 실력의 한계를 느껴 다시 초심으로 돌아가 코딩테스트와 PCCP를 준비하고 있습니다.
                </li>
            </div>
        );
    }
}