'use client'

import { Button } from '../Button'
import { useFormStatus } from 'react-dom'
import { Spinner } from '../Spinner'
import { ArrowFoward } from '../icons/ArrowFoward'

export const SubmitButton = ({ children }) => {
    const { pending } = useFormStatus();
    return (
        <Button aria-disabled={pending} type='submit'>
            {pending ? <Spinner /> : <>{children} <ArrowFoward /></>}
        </Button>
    )
}