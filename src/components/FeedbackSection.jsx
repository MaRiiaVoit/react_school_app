import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                className="control" />
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    return (
        <section>
            <h3>Feedback</h3>

            <form style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                    }}
                    onChange={handleNameChange} />

                <label htmlFor="reason">Reason for contacting</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({ ...prev, reason: event.target.value }))
                    }
                >
                    <option value="error">Error</option>
                    <option value="help">Need help</option>
                    <option value="suggest">Proposal</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
            </form>
            <StateVsRef />
        </section>
    )
}