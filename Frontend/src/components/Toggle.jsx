import { useState } from 'react'

import './toggle.css'

export const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label>
            <input className='mx-2' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span/>
            <strong>{label}</strong>
        </label>
    )
}