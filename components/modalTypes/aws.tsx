import { ModalContent } from "./modalContent";

export class awsModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    EC2로 시작해 지금은 API-gateway와 Lambda를 이용해 서버리스 환경으로 구성하고 있습니다.
                </li>
                <li>
                    점차 다뤄야할 서비스 컨테이너가 많아지면서 EKS를 도입하기 위해 쿠버네티스를 공부하고 있습니다.
                </li>
            </div>
        );
    }
}