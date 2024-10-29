import React from "react"

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Result  School</h1>
//             <h3 className="centered" style={{ color: '#666' }}> We help you gain confidence and improve your speaking, pronunciation and vocabulary.</h3>
//         </section>
//     )
// }

export default function IntroSection() {
    return React.createElement('section', null, [React.createElement('h1', { className: 'centered', key: 1 }, 'Result  School'),
    React.createElement('h3', { className: 'centered', style: { color: '#666' }, key: 2 }, 'We help you gain confidence and improve your speaking, pronunciation and vocabulary.'),
    ])
}