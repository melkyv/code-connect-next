'use client'
import { useRef } from "react";
import { Modal } from "../Modal";
import styles from './modalreply.module.css'
import { TextArea } from "../TextArea";
import { SubmitButton } from "../SubmitButton";
import { Comment } from "../Comment";
import { postReply } from "@/actions";

export const ReplyModal = ({ comment }) => {
    const modalRef = useRef(null);
    const openModal = () => {
        modalRef.current.openModal();
    };

    const action = postReply.bind(null, comment)
    return (
        <>
            <Modal ref={modalRef}>
                <form action={action} onSubmit={() => modalRef.current.closeModal()}>
                    <div className={styles.body}>
                        <Comment comment={comment}/>
                    </div>

                    <div className={styles.divider}></div>

                    <TextArea required rows={8} name="text" placeholder="Digite aqui..." />

                    <div className={styles.footer}>
                        <SubmitButton>
                            Responder
                        </SubmitButton>
                    </div>
                </form>
            </Modal>
            <button className={styles.btn} onClick={openModal}>
                Responder
            </button>
        </>
    )
}