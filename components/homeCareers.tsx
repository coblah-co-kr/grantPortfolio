import { htmlShell } from "./htmlShell";
import { ReactElement } from "react";

class careerShell extends htmlShell {
    constructor(themeCode:string, frameCode:string) {
        super(themeCode, frameCode);
    }

    getContent() {
        return (
            <div className={this.themeCode}>
                {this.content()}
            </div>
        );
    }

    content() {
        return (
            <div className={this.frameCode}>
                {this.title()}
                <div className="flex flex-col gap-y-12">
                    {this.renderCompany(
                        "2023.12 ~ 재직중",
                        "(주)비비티에이아이코리아",
                        [
                            this.renderProject(
                                "사내 프로덕트 개발",
                                "2025.08 ~ 현재",
                                "화재/쓰러짐/안전장비 미착용 등 안전 이벤트 감지 서비스",
                                "FastAPI 주요 모듈 개발 및 Observability 구축",
                                [
                                    "OTEL 공용 모듈 개발 및 서비스 전반 도입",
                                    "Fluentd / Loki / Grafana 로그 시스템 구축",
                                    "Jaeger 트레이스-로그 연동 체계 구성",
                                ]
                            ),
                            this.renderProject(
                                "크레인 세이프티 / 화재 감지",
                                "2025.03 ~ 2025.07",
                                "산업 현장 안전사고 예방 및 이상 상황 감지",
                                "인터페이스 및 공용 모듈 개발",
                                [
                                    "gRPC 인터페이스 구현, RabbitMQ 기반 큐 관리",
                                    "FastAPI 프레임워크 및 MQTT 공용모듈 개발",
                                    "이벤트 스키마 공용화, SSE/PLC 제어 파이프라인 구축",
                                ],
                                "납기 내 완료, 사내 프로덕트로 발전"
                            ),
                            this.renderProject(
                                "신규 아키텍처 설계 및 성능 개선",
                                "2024.06 ~ 2025.02",
                                "기존 솔루션 재설계 및 정식 납품 버전 개발",
                                "아키텍처 설계 및 백엔드 개발",
                                [
                                    "전체 백엔드 아키텍쳐 직접 설계 및 인터페이스 정의",
                                    "gRPC 기반 통신 구조 설계 및 구현",
                                    "Valkey 상태관리, Celery GPU 사용 최적화",
                                ],
                                "100프레임 처리: 3분 → 5초 (약 36배 개선)"
                            ),
                            this.renderProject(
                                "오일 드립 감지 / 진동 감지",
                                "2024.01 ~ 2024.05",
                                "Senior ML 엔지니어 퇴사 후 프로젝트 인수",
                                "기존 코드 안정화 및 개발 환경 개선",
                                [
                                    "과도하게 분리된 MSA 구조(6개 서비스) 분석 및 정상화",
                                    "Jenkins 기반 통합테스트 환경 도입",
                                ],
                                "비전 파트 개발 속도 및 품질 개선"
                            ),
                            this.renderProject(
                                "알고리즘 개선 지원, 서비스 안정화",
                                "2023.12 ~ 2024.01",
                                "납기 1달 전, 외부 업체가 미완성 납품한 솔루션 인수",
                                "백엔드 환경 복구 및 비전 모델 추론 환경 구축",
                                [
                                    "스키마 없는 MongoDB 환경을 코드 분석 후 복구",
                                    "TFserving/TorchServe 기반 혼합 모델 서빙 환경 재구성",
                                ],
                                "포기 직전 프로젝트를 안정화하여 납품 완료"
                            ),
                        ]
                    )}
                    {this.renderCompany(
                        "2021.07 ~ 2023.12",
                        "주식회사 컬리지니에이아이",
                        [
                            this.renderProject(
                                "Essayfit 개선",
                                "2023.06 ~ 2023.12",
                                "전년도 개발 서비스 개선",
                                "AWS 및 백엔드 API 개발",
                                [
                                    "FastAPI, AWS, Kubernetes, Kafka 기반 시스템 재구축",
                                ]
                            ),
                            this.renderProject(
                                "AirWrite",
                                "2023.01 ~ 2023.06",
                                "표절 검사와 문법 검사 B2B 서비스",
                                "AWS 및 백엔드 API 개발",
                                [
                                    "Django, Celery, RabbitMQ 기반 분산처리 시스템 구축",
                                ],
                                "매출 확보, 클라우드 시스템 개발 경험"
                            ),
                            this.renderProject(
                                "Essayfit",
                                "2021.08 ~ 2022.12",
                                "미국 대학 진학 에세이 평가 서비스",
                                "백엔드 1인 단독 - NLP 알고리즘, API, 분산처리 시스템",
                                [
                                    "RabbitMQ 큐 모니터링 기반 AWS EC2 오토스케일링 구현",
                                ],
                                "3개월간 2,500명 해외 유저 확보"
                            ),
                        ]
                    )}
                    {this.renderCompany(
                        "2019.08 ~ 2021.07",
                        "한국전자기술연구원",
                        [
                            this.renderProject(
                                "초음파 가스미터 개발",
                                "2019.08 ~ 2021.07",
                                "초음파를 이용한 스마트 가스미터 개발",
                                "계측 알고리즘 소프트웨어 개발 및 ML 기반 데이터 교정",
                                [
                                    "메모리 제한 내 수식 변환으로 동일 결과 도출",
                                    "ML 모델을 활용한 온도/압력 보정 시스템 개발",
                                ],
                                "연산 시간 3배 개선, 유량 측정 오차 목표 달성"
                            ),
                        ]
                    )}
                </div>
            </div>
        );
    }

    renderCompany(period: string, name: string, projects: ReactElement[]): ReactElement {
        return (
            <div className="border-l-4 border-slate-400 pl-6">
                <div className="flex flex-row items-baseline gap-4 mb-4">
                    <div className="hansans text-2xl">{name}</div>
                    <div className="text-slate-300 text-sm">{period}</div>
                </div>
                <div className="flex flex-col gap-y-6">
                    {projects}
                </div>
            </div>
        );
    }

    renderProject(
        title: string,
        period: string,
        description: string,
        role: string,
        contributions: string[],
        achievement?: string
    ): ReactElement {
        return (
            <div className="ml-2">
                <div className="font-bold text-lg">{title}</div>
                <div className="text-slate-300 text-xs mb-2">{period}</div>
                <div className="text-sm text-slate-200 mb-1">{description}</div>
                <div className="text-sm text-slate-200 mb-2">역할: {role}</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                    {contributions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {achievement && (
                    <div className="mt-2 text-sm font-semibold text-green-300">
                        → {achievement}
                    </div>
                )}
            </div>
        );
    }

    title() {
        return (
            <div className="hansans text-5xl my-20">
                Careers
            </div>
        );
    }
}

export default function HomeCareers () {
    const cs = new careerShell(
        "bg-grantCareer text-white snap-start",
        "max-w-[48rem] mx-auto h-auto grid justify-items-center gap-y-10 pb-20"
    );
    return cs.getContent();
}
