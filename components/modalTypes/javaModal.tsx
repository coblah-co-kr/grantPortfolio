import { ModalContent } from "./modalContent";

export class javaModal extends ModalContent{
    getContent() {
        return (
            <div className="list-none">
                <li>
                    KETI에서 모니터링 시스템을 만들 때 처음 Java와 Spring을 접했습니다.
                </li>
                <li>
                    내부 연구목적으로 만든 프로그램이었기에, 심도깊게 다루지는 못했지만 백엔드 개발자의 전향동기가 되었습니다.
                </li>
                <li>
                    Springboot에 적용할 개발언어로 Kotlin과 함께 고민하다가, 상대적으로 익숙한 Java를 선택했습니다.
                </li>
                <li>
                    추후 Springboot 개발에 익숙해지면 Kotlin으로 변경할 계획입니다.
                </li>
            </div>
        );
    }
}