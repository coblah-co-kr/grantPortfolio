import { ReactElement } from "react";
import styles from "./modal.module.css"
import { springbootModal } from "./modalTypes/springbootModal";
import { djangoModal } from "./modalTypes/djangoModal";
import { pythonModal } from "./modalTypes/pythonModal";
import { celeryModal } from "./modalTypes/celeryModal";
import { rabbitMQModal } from "./modalTypes/rabbitmq";
import { redisModal } from "./modalTypes/redis";
import { mySqlModal } from "./modalTypes/mysqlModal";
import { firebaseModal } from "./modalTypes/firebase";
import { javaModal } from "./modalTypes/javaModal";
import { reactModal } from "./modalTypes/react";
import { nextjsModal } from "./modalTypes/nextModal";
import { typescriptModal } from "./modalTypes/typescript";
import { reduxModal } from "./modalTypes/reduxModal";
import { tailwindcssModal } from "./modalTypes/tailwindcss";
import { awsModal } from "./modalTypes/aws";
import { dockercomposeModal } from "./modalTypes/dockercompose";
import { jenkinsModal } from "./modalTypes/jenkins";
import { gitactionModal } from "./modalTypes/gitaction";
import { jiraModal } from "./modalTypes/jira";
import { slackModal } from "./modalTypes/slack";
import { figmaModal } from "./modalTypes/figma";

interface ModalInterface {
    imgDescription : string
    setImgDescription : Function
}

class ModalPrinter {
    static getModal(modalType:string) {
        switch (modalType) {
            case "django":
                return new djangoModal().getContent();
            case "python":
                return new pythonModal().getContent();
            case "celery":
                return new celeryModal().getContent();
            case "rabbitmq":
                return new rabbitMQModal().getContent();
            case "redis":
                return new redisModal().getContent();
            case "mysql":
                return new mySqlModal().getContent();
            case "firebase":
                return new firebaseModal().getContent();
            case "springboot":
                return new springbootModal().getContent();
            case "java":
                return new javaModal().getContent();
            case "react":
                return new reactModal().getContent();
            case "nextjs":
                return new nextjsModal().getContent();
            case "typescript":
                return new typescriptModal().getContent();
            case "redux":
                return new reduxModal().getContent();
            case "tailwindcss":
                return new tailwindcssModal().getContent();
            case "aws":
                return new awsModal().getContent();
            case "dockercompose":
                return new dockercomposeModal().getContent();
            case "gitaction":
                return new gitactionModal().getContent();
            case "jenkins":
                return new jenkinsModal().getContent();
            case "jira":
                return new jiraModal().getContent();
            case "slack":
                return new slackModal().getContent();
            case "figma":
                return new figmaModal().getContent();
            default:
                return (
                    <div></div>
                );
        }
    }
}

export default function Modal ({ imgDescription, setImgDescription } : ModalInterface) {
    const handleModal = () => {
        setImgDescription("");
    }

    return (
        <div className={styles.overlay} style={{ display: imgDescription !== "" ? "block" : "none" }}>
            <div className={styles.modal}>
                <div className="mx-2 mt-2 text-3xl font-bold capitalize text-grantProject">
                    {imgDescription}
                </div>
                <div className="mx-2 mb-2 mt-5 hansans text-xl">
                    {ModalPrinter.getModal(imgDescription)}
                </div>
                <button className="absolute top-0 right-0 p-2" onClick={handleModal}>
                    <img src="icons/close.png" alt="" width="30px"/>
                </button>
            </div>
        </div>
    )
}