import { useState } from "react";

export default function useInput(defaultValue = null) {
    const [state, setState] = useState(defaultValue);

    const onChange = (event) => {setState(event.target.value)}

    return {state, onChange};
}

// 사용법
// const name = useInput();

// value={name.state};
// onChange={name.onChange}