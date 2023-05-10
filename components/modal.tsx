import { useState } from "react"
import styles from "./modal.module.css"

interface ModalInterface {
    content : Function
    isOpen : boolean
    setOpen : Function
}

export default function Modal ({ content, isOpen, setOpen } : ModalInterface) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        setScrollPosition(e.currentTarget.scrollTop);
    }

    const handleModal = () => {
        setOpen(false);
    }

    return (
        <div className={styles.overlay} style={{ display: isOpen ? "block" : "none" }}>
            <div className={styles.modal}>
                <div className={styles.content} onScroll={handleScroll}>
                    {content()}
                </div>
                <div className={styles.scrollbar}>
                    <div className={styles.track}>
                        <div className={styles.thumb} style={{ top: `${(scrollPosition / 2)}px` }} />
                    </div>
                </div>
                <button className={styles.closeButton} onClick={handleModal}>닫기</button>
            </div>
        </div>
    )
}