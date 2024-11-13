import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Open information</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officia, iste neque voluptatem debitis quae vero voluptatibus quod laudantium deleniti laborum mollitia ipsam, impedit enim. In voluptates similique nam quae!</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>
        </section>
    )
}