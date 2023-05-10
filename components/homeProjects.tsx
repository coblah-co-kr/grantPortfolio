import Link from "next/link";
import { useState } from "react";

export default function HomeProjects () {
    const portfolioImageList = ["img/portfolio/intro.png"];
    const ruftkeksImageList = ["img/ruftkeks/intro.png", "img/ruftkeks/privacyTos.png"];
    const noticelogImageList = ["img/noticelog/released.png", "img/noticelog/intro.png", "img/noticelog/today.png", "img/noticelog/wishList.png", "img/noticelog/calendar.png"];

    const [portfolioImageIndex, setPortfolioImageIndex] = useState(0);
    const [ruftkeksImageIndex, setRuftkeksImageIndex] = useState(0);
    const [noticelogImageIndex, setNoticelogImageIndex] = useState(0);

    const handleArrowClick = (direction : string, imageList: Array<string>, imageIndex : number, setImageIndex : Function) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(imageList.length -1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else if (direction === "right") {
            if (imageIndex === imageList.length -1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        } else {
            console.log("Unexpected Input");
        }
    };
    
    const projectTitle = (titleName : string) => (
        <div className="hansans text-3xl mb-1">
            { titleName }
        </div>
    );

    const projectSubTitle = (subTitleName : string) => (
        <div className="kargugsu text-lg mb-5">
            { subTitleName }
        </div>
    );

    const projectImgUrl = (imageList: Array<string>, imageIndex : number, setImageIndex : Function) => (
        <div className="rounded-xl shadow-xl p-2 mb-10">
            <img src={imageList[imageIndex]} alt="" style={{maxHeight: "630px"}}/>
            <div className="flex flex-row justify-center items-center scale-75">
                <button onClick={() => handleArrowClick("left", imageList, imageIndex, setImageIndex)}>
                    <img src="icons/leftArrow.png" alt="" />
                </button>
                <div className="rounded-lg border-black border-2 p-2">
                    {imageIndex+1}/{imageList.length}
                </div>
                <button onClick={() => handleArrowClick("right", imageList, imageIndex, setImageIndex)}>
                    <img src="icons/rightArrow.png" alt="" />
                </button>
            </div>
        </div>
    );

    const portfolio = () => (
        <div className="rounded-xl bg-white w-[42rem] p-7 mx-5 shadow-2xl text-black text-center">
            {projectTitle("Portfolio <2023.05~>")}
            {projectSubTitle("개인 포트폴리오")}
            {projectImgUrl(portfolioImageList, portfolioImageIndex, setPortfolioImageIndex)}
            <div className="text-sm mb-5">
                지속적인 포트폴리오의 관리를 위해 지금 보고 계신 포트폴리오를 개발했습니다.<br/>
                구글링중에 우연히 발견한 <Link href="https://cdg-portfolio.com/" className="text-teal-500 font-bold">최덕경님의 포트폴리오</Link>의 디자인을 참고했습니다.
            </div>
            <ul className="grid grid-cols-5 nanum-square">
                <li className="col-span-2 mb-5">
                    팀 구성 및 <a className="underline decoration-2 decoration-teal-500">역할</a>
                </li>
                <li className="col-span-3">
                    <a className="underline decoration-2 decoration-teal-500">프론트 개발 1</a>
                </li>
                <li className="col-span-2 row-span-1">
                    내용
                </li>
                <li className="col-span-3">
                    포트폴리오 개발
                </li>
                <li className="col-span-2 mt-5">
                    성과
                </li>
                <li className="col-span-3 flex flex-row justify-around mt-1">
                    <Link href="https://github.com/coblah-co-kr/grantPortfolio" className="text-xs">
                        <img src="icons/git.png" alt="" style={{display:"block", margin:"0 auto"}}/>
                    </Link>
                </li>
            </ul>
        </div>
    );

    const ruftkeks = () => (
        <div className="rounded-xl bg-white w-[42rem] p-7 mx-5 shadow-2xl text-black text-center">
            {projectTitle("결사단 <2023.04~>")}
            {projectSubTitle("블로그 서비스")}
            {projectImgUrl(ruftkeksImageList, ruftkeksImageIndex, setRuftkeksImageIndex)}
            <div className="text-sm mb-5">
                오랜 친구들과 추억을 저장하기 위해 블로그를 만들고 있습니다.<br/>
                Springboot, Next.js, Redux 등의 기술스택의 향상을 목표로 합니다.<br/>
            </div>
            <ul className="grid grid-cols-5 nanum-square">
                <li className="col-span-2 mb-5">
                    팀 구성 및 <a className="underline decoration-2 decoration-teal-500">역할</a>
                </li>
                <li className="col-span-3">
                    <a className="underline decoration-2 decoration-teal-500">백엔드 개발 1, 프론트 개발 1</a>
                </li>
                <li className="col-span-2 row-span-1">
                    내용
                </li>
                <li className="col-span-3">
                    커스텀 인증 및 API 개발
                </li>
                <li className="col-span-2 mt-5">
                    성과
                </li>
                <li className="col-span-3 flex flex-row justify-around mt-1">
                    <figure>
                        <Link href="https://github.com/coblah-co-kr/ruftkeks_springboot" className="text-xs">
                            <img src="icons/git.png" alt="" style={{display:"block", margin:"0 auto"}}/>
                        </Link>
                        <figcaption>
                            Springboot(Java)
                        </figcaption>
                    </figure>
                    <figure>
                        <Link href="https://github.com/coblah-co-kr/ruftkeks_ts_next" className="text-xs">
                            <img src="icons/git.png" alt="" style={{display:"block", margin:"0 auto"}}/>
                        </Link>
                        <figcaption>
                            NextJs(Typescript)
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    );
    
    const noticelog = () => (
        <div className="rounded-xl bg-white w-[42rem] p-7 mx-5 shadow-2xl text-black text-center">
            {projectTitle("공시록 <2023.01~2023.03>")}
            {projectSubTitle("실시간 공시 알림 서비스")}
            {projectImgUrl(noticelogImageList, noticelogImageIndex, setNoticelogImageIndex)}
            <div className="text-sm mb-5">
                앱 개발자인 친동생과 함께 만든 서비스입니다.<br/>
                외주를 위탁한 디자인을 제외하고 기획부터 앱 배포까지 온전히 수행한데서 의미가 있습니다.<br/>
                공시록은 이슈만 관리하며 운영중이며, 다른 프로젝트들을 진행중입니다.
            </div>
            <ul className="grid grid-cols-5 nanum-square">
                <li className="col-span-2 mb-5">
                    팀 구성 및 <a className="underline decoration-2 decoration-teal-500">역할</a>
                </li>
                <li className="col-span-3">
                    앱 개발 1, 디자인 1, <a className="underline decoration-2 decoration-teal-500">백엔드 개발 1</a>
                </li>
                <li className="col-span-2 row-span-4 mt-8">
                    내용
                </li>
                <li className="col-span-3">
                    공시정보 수집 및 서비스 API 개발
                </li>
                <li className="col-span-3">
                    관심공시 알림 및 분산처리 개발
                </li>
                <li className="col-span-3">
                    기업정보, 로고 관리 페이지 개발
                </li>
                <li className="col-span-3">
                    AWS 배포 및 모니터링 시스템 개발
                </li>
                <li className="col-span-2 mt-5">
                    성과
                </li>
                <li className="col-span-3 flex flex-row justify-center mt-1">
                    <Link href="https://play.google.com/store/apps/details?id=com.coblah.dart_notification&hl=ko" className="text-xs">
                        <img src="icons/googlePlay.png" alt="" ></img>
                    </Link>
                    <Link href="https://apps.apple.com/kr/app/%EA%B3%B5%EC%8B%9C%EB%A1%9D/id1661274178" className="text-xs">
                        <img src="icons/appStore.png" alt="" ></img>
                    </Link>
                </li>
            </ul>
        </div>
    );

    return (
        <div className="bg-violet-500 text-white">
            <div className="max-w-[48rem] mx-auto h-auto grid justify-items-center">
                <div className="hansans text-5xl my-20">
                    Projects
                </div>
                <div className="flex flex-col mb-20 gap-y-10">
                    {portfolio()}
                    {ruftkeks()}
                    {noticelog()}
                </div>
            </div>
        </div>
    );
}