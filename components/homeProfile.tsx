export default function HomeProfile() {
    return (
        <div className="bg-white text-black py-10">
        <div className="max-w-[48rem] mx-auto h-auto grid justify-items-center">
          <div className="hansans text-5xl my-20">
            Profile
          </div>
          <div className="grid grid-cols-3 gap-x-32 gap-y-10 mb-20">
            <div className="flex flex-row">
              <div className="basis-1/3 mr-2">
                <img src="icons/school.png" alt="" />
              </div>
              <div className="basis-full flex flex-col">
                <div className="text-slate-600 font-bold">
                  학력
                </div>
                <div className="">
                  한국항공대학교<br/>
                  전자정보공학부
                </div>  
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/3 mr-2">
                <img src="icons/birthday.png" alt="" />
              </div>
              <div className="basis-full flex flex-col">
                <div className="text-slate-600 font-bold">
                  생년월일
                </div>
                <div className="">
                  1992.12.28
                </div>  
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/3 mr-2">
                <img src="icons/address.png" alt="" />
              </div>
              <div className="basis-full flex flex-col">
                <div className="text-slate-600 font-bold">
                  주소
                </div>
                <div className="">
                  경기도 하남시
                </div>  
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/3 mr-2">
                <img src="icons/phone.png" alt="" />
              </div>
              <div className="basis-full flex flex-col">
                <div className="text-slate-600 font-bold">
                  연락처
                </div>
                <div className="">
                  010-4141-3783
                </div>  
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/3 mr-2">
                <img src="icons/email.png" alt="" />
              </div>
              <div className="basis-full flex flex-col">
                <div className="text-slate-600 font-bold">
                  이메일
                </div>
                <div className="text-sm">
                  grant@coblah.co.kr
                </div>  
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/3 mr-2">
                <img src="icons/git.png" alt="" />
              </div>
              <div className="basis-full flex flex-col">
                <div className="text-slate-600 font-bold">
                  Git
                </div>
                <div className="text-xs">
                  github.com/modec28
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}