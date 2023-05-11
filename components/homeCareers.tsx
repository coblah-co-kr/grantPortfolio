export default function HomeCareers () {
    return (
        <div className="bg-grantCareer text-white">
            <div className="max-w-[48rem] mx-auto h-auto grid justify-items-center gap-y-10 pb-20">
                <div className="hansans text-5xl my-20">
                    Careers
                </div>
                <div className="grid grid-cols-3 grid-flow-row gap-4">
                    <div className="col-span-1 row-span-5 hansans text-xl">
                        2019.08 ~ 2021.07
                    </div>
                    <div className="col-span-2 hansans text-3xl mb-5">
                        한국전자기술연구원
                    </div>
                    <div className="col-span-2 font-bold text-lg divide-y-2">
                        소프트웨어 개발 (2019.08 ~ 2021.7)
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 : 신호처리 알고리즘 논문 조사 및 개선, 모니터링 웹 개발
                        </li>
                        <li>
                            성과 : 연산시간 3배 단축
                        </li>
                    </ul>
                    <div className="col-span-2 font-bold text-lg divide-y-2">
                        머신러닝을 이용한 데이터 분류 및 교정 (2020.06 ~ 2021.7)
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 : 온/압 보정 회귀 모델 개발
                        </li>
                        <li>
                            성과 : 학회논문 1편 저술
                        </li>
                    </ul>
                    <div className="col-span-1 row-span-5 hansans text-xl mt-5">
                        2021.07 ~ 
                    </div>
                    <div className="col-span-2 hansans text-3xl mb-5 mt-5">
                        컬리지니에이아이
                    </div>
                    <div className="col-span-2 font-bold text-lg divide-y-2">
                        자연어 처리 모델 개발 (2021.07 ~ 2022.1)
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 : 자연어 처리 알고리즘 및 딥러닝 모델 개발
                        </li>
                        <li>
                            성과 : 적용 대비 연산시간 20%로 단축
                        </li>
                    </ul>
                    <div className="col-span-2 font-bold text-lg divide-y-2">
                        백엔드 개발 (2022.01 ~ )
                    </div>
                    <ul className="col-span-2 list-disc list-inside nanum-square">
                        <li>
                            역할 : 백엔드 개발 및 배포 운영
                        </li>
                        <li>
                            성과 : 서비스 기간 3개월간 해외 유저 2,500명 확보
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}