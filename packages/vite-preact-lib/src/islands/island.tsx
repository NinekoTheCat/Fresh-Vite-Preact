import { useState,useCallback } from 'preact/hooks';
interface Props {
    state: number
}
export default function name(props: Props) {
    const [value, setValue] = useState(props.state);
    const handleButtonClick =useCallback(() => {
        setValue(value + 1);
      }, [value]);
    return <button disabled={is_server()} onClick = {handleButtonClick}>
        {value}
    </button>
}

function is_server() {
    return ! (typeof window != 'undefined' && window.document);
 }