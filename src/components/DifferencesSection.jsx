import Button from "./Button/Button"
import { useState } from 'react'
import { differences } from '../data';

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
            <h3>School Life</h3>

            <Button
                isActive={contentType === 'way'}
                onClick={() => handleClick('way')}
            >
                About
            </Button>
            <Button isActive={contentType === 'easy'}
                onClick={() => handleClick('easy')}
            >
                Curriculum
            </Button>
            <Button
                isActive={contentType === 'program'}
                onClick={() => handleClick('program')}
            >
                Admissions
            </Button>

            {!contentType && <p>Click the button</p>}

            {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}