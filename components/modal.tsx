import { useState } from "react"
import styles from "./modal.module.css"

interface ModalInterface {
    isOpen : string
    setOpen : Function
}

export default function Modal ({ isOpen, setOpen } : ModalInterface) {
    const handleModal = () => {
        setOpen("");
    }

    return (
        <div className={styles.overlay} style={{ display: isOpen !== "" ? "block" : "none" }}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    {isOpen}
                </div>
                <button className={styles.closeButton} onClick={handleModal}>닫기</button>
            </div>
        </div>
    )
}