import { htmlShell } from "./htmlShell";

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
                <div className="grid grid-cols-3 grid-flow-row gap-4">
                    <div className="col-span-1 row-span-6 hansans text-xl">
                        2019.08 ~ 2021.07
                    </div>
                    <div className="col-span-2 hansans text-3xl mb-5">
                        한국전자기술연구원
                    </div>
                    <div className="col-span-2 font-bold text-xl mb-5">
                        초음파 가스미터 개발 (2019.08 ~ 2021.08)
                        <div className="text-xs my-1">
                            프로젝트 설명: 초음파를 이용한 스마트 가스미터 개발
                        </div>
                        <div className="text-xs">
                            프로젝트 구성 인원: 기구 설계 2사, 하드웨어 1사, 알고리즘 1인, 소프트웨어 2인, PM 1인
                        </div>
                    </div>
                    <div className="col-span-2 font-bold divide-y-2">
                        계측 알고리즘 개선 소프트웨어 개발
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 구성 인원 : 알고리즘 1인, 소프트웨어 1인 중 소프트웨어
                        </li>
                        <li>
                            언어 : C
                        </li>
                        <li>
                            기술 스택 : Matlab, CCS
                        </li>
                        <li>
                            성과 : 기존 알고리즘 대비 약 3배의 연산 시간 개선
                        </li>
                    </ul>
                    <div className="col-span-2 font-bold divide-y-2">
                        머신러닝을 이용한 데이터 분류 및 교정
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 구성 인원 : 소프트웨어 1인 단독
                        </li>
                        <li>
                            언어 : Python, Java, Javascript
                        </li>
                        <li>
                            기술 스택 : Keras, Pytorch, Tomcat, Apache, MySQL
                        </li>
                        <li>
                            성과 : 유량 측정 오차의 팀 목표 달성
                        </li>
                    </ul>
                    <div className="col-span-1 row-span-4 hansans text-xl mt-5">
                        2021.07 ~ 
                    </div>
                    <div className="col-span-2 hansans text-3xl mb-5 mt-5">
                        컬리지니에이아이
                    </div>
                    <div className="col-span-2 font-bold text-xl mb-5">
                        Essayfit 개발 (2021.08 ~ 2022.12)
                        <div className="text-xs my-1">
                            프로젝트 설명: 미국 대학 진학을 위한 에세이 평가 서비스 개발
                        </div>
                        <div className="text-xs">
                            프로젝트 구성 인원: 기획 1인, 디자이너 1인, 백엔드 1인, 프론트엔드 1인, 앱 1인, QA 1인
                        </div>
                    </div>
                    <div className="col-span-2 font-bold divide-y-2">
                        자연어처리 알고리즘 및 API 개발, 분산처리 시스템 구축
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 구성 인원 : 백엔드 1인 단독
                        </li>
                        <li>
                            언어 : Python
                        </li>
                        <li>
                            기술 스택 : Django, Celery, RabbitMQ, MySQL, Redis, Nginx, Jenkins, Docker Compose, AWS
                        </li>
                        <li>
                            성과 : 3개월간 2500명의 해외 유저 확보, 서비스 운영 경험 체득
                        </li>
                    </ul>
                    <div className="col-span-1 row-span-4 hansans text-xl">
                        
                    </div>
                    <div className="col-span-2 hansans text-3xl">
                        
                    </div>
                    <div className="col-span-2 font-bold text-xl mb-5">
                        AirWrite 개발 (2023.01 ~ 2023.06)
                        <div className="text-xs my-1">
                            프로젝트 설명: 표절 검사와 문법 검사를 제공하는 B2B 서비스 개발
                        </div>
                        <div className="text-xs">
                            프로젝트 구성 인원: 디자이너 1인, 백엔드&AWS 1인, 프론트엔드 1인, 백엔드&PM 1인
                        </div>
                    </div>
                    <div className="col-span-2 font-bold divide-y-2">
                        AWS 및 백엔드 API 개발
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 구성 인원 : 백엔드&AWS 1인, 백엔드&PM 1인 중 백엔드&AWS 1인
                        </li>
                        <li>
                            언어 : Python
                        </li>
                        <li>
                            기술 스택 : Django, Celery, RabbitMQ, MySQL, Redis, Nginx, Jenkins, Docker Compose, AWS
                        </li>
                        <li>
                            성과 : 매출 확보, 클라우드 시스템 개발 경험 체득
                        </li>
                    </ul>
                    <div className="col-span-1 row-span-6 hansans text-xl">
                        
                    </div>
                    <div className="col-span-2 hansans text-3xl">
                        
                    </div>
                    <div className="col-span-2 font-bold text-xl mb-5">
                        Essayfit 개선 (2023.06 ~ )
                        <div className="text-xs my-1">
                            프로젝트 설명: 전년도에 개발한 Essayfit 서비스 개선
                        </div>
                        <div className="text-xs">
                            프로젝트 구성 인원: 기획 1인, 디자이너 1인, 백엔드&AWS 1인, 백엔드&PM 1인, 앱 1인, QA 1인, PO 1인
                        </div>
                    </div>
                    <div className="col-span-2 font-bold divide-y-2">
                        AWS 및 백엔드 API 개발
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 구성 인원 : 백엔드&AWS 1인, 백엔드&PM 1인 중 백엔드&AWS 1인
                        </li>
                        <li>
                            언어 : Python
                        </li>
                        <li>
                            기술 스택 : FastAPI, AWS, Kubernetes, Kafka, Redis, PostgreSQL, Jenkins
                        </li>
                    </ul>
                </div>
                <img src="Essayfit-Architecture_description.svg" alt="" />
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