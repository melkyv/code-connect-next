'use client'

import { Spinner } from "../Spinner"
import { IconButton } from "../IconButton"
import { ThumbsUp } from "../icons/ThumbsUp"

import { useFormStatus } from "react-dom"

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <IconButton disabled={pending}>
      {pending ? <Spinner /> : <ThumbsUp />}
    </IconButton>
  )
}
