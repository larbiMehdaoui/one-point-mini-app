import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './field.css';
import addElement, {persistDataList} from "../../store/actions/add-element";

const Field = (): JSX.Element => {
    const [isError, setIsError] = useState<boolean>(false)
    const [state, setState] = useState<string>('');
    const dispatch = useDispatch();

    const handleAddElement = () => {
        if (state.length) {
            dispatch(addElement(state));
            setState('')
            dispatch(persistDataList())
        } else setIsError(true)
    }

    return (
        <div className='form_app'>
            <div className='field_app'>
                <input className={isError ? 'border-red' : 'border-none'} type="text" value={state} onFocus={() => setIsError(false)} onChange={(e) => setState(e.target.value)}/>
                <span>{isError && 'Ce champs est obligatoire'}</span>
            </div>
            <button onClick={handleAddElement}>
                Ajouter
            </button>
        </div>
    )
}

export default Field;

