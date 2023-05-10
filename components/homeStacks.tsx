export default function HomeStacks() {
    return (
        <div className="bg-amber-400">
        <div className="max-w-[48rem] mx-auto h-auto grid justify-items-center">
          <div className="hansans text-5xl mt-20">
            Skills
          </div>
          <div className="kargugsu text-xl mb-20">
            클릭하면 설명이 출력됩니다.
          </div>
          <div className="grid grid-cols-2 grid-flow-row mb-20 items-start">
            <div className="rounded-xl bg-white p-7 w-80 mx-5 row-span-2 shadow-2xl hover:shadow-indigo-700">
              <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
                <div className="text-2xl text-indigo-700 font-bold mb-2">
                  Backend
                </div>
                <div className="flex flex-col">
                    <div className="mx-5 my-2">
                        <img src="icons/springboot.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/java.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/django.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/python.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/celery.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/rabbitmq.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/mysql.png" alt="" />
                    </div>
                    <div className="mx-5 my-2">
                        <img src="icons/firebase.png" alt="" />
                    </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-7 w-80 mx-5 shadow-2xl hover:shadow-indigo-700">
              <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
                <div className="text-2xl text-indigo-700 font-bold mb-2">
                  Frontend
                </div>
                <div className="flex flex-col">
                  <div className="mx-5 my-2">
                    <img src="icons/react.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/nextjs.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/typescript.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/redux.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/tailwindcss.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-7 w-80 mx-5 my-10 row-span-2 shadow-2xl hover:shadow-indigo-700">
              <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
                <div className="text-2xl text-indigo-700 font-bold mb-2">
                  Deployment
                </div>
                <div className="flex flex-col">
                  <div className="mx-5 my-2">
                    <img src="icons/aws.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/dockercompose.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/jenkins.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/gitaction.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-7 w-80 mx-5 my-10 shadow-2xl hover:shadow-indigo-700">
              <div className="grid grid-cols-1 divide-y-2 divide-indigo-700">
                <div className="text-2xl text-indigo-700 font-bold mb-2">
                  etc
                </div>
                <div className="flex flex-col">
                  <div className="mx-5 my-2">
                    <img src="icons/jira.png" alt="" />
                  </div>
                  <div className="mx-5 my-2">
                    <img src="icons/figma.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}