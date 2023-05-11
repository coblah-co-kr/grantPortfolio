import { ModalContent } from "./modalContent";

export class djangoModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    이직 후, 백엔드 업무를 맡게 되면서 단기간에 결과물을 만들어야 했기에 Django를 채택했습니다.
                </li>
                <li>
                    DRF와 Python 생태계의 놀라운 생산성 덕분에 단기간에 제품을 만들어 릴리즈할 수 있었습니다.
                </li>
                <li>
                    하지만 서비스를 운영하면서 관리할 영역이 많아지자 이슈가 발생하기 시작했고, Django의 한계에 대해 고민하게 되었습니다.
                </li>
            </div>
        );
    }
}