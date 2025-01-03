'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal"
import { SubmitButton } from "../SubmitButton"
import { TextArea } from "../TextArea"
import { SubHeading } from "../SubHeading"

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <SubHeading>Deixe seu comentário sobre o post:</SubHeading>
          <TextArea name="text" rows={8} placeholder="Digite aqui o comentário"></TextArea>

          <SubmitButton>
            Comentar
          </SubmitButton>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  )
}
