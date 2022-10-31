import React from 'react';
import './Message.scss';
import { Button, Popup, Icon } from 'semantic-ui-react';
import { addClientMedicalForm } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

export function Message({ clientKey }) {
    const dispatch = useDispatch();
    const submitMedicalF = async () => {
        await dispatch(addClientMedicalForm(clientKey))
    }

    return (
        <div className='bodyMessage'>
            <div className='bodyMessage__header'>
                Sin planilla médica...
            </div>
            <div className='bodyMessage__content'>
                {/* <Popup content='Confirmar que ya entregó planilla médica...' trigger={<Button size='mini' circular icon='add' onClick={submitMedicalF} />} /> */}
                <Popup content='Confirmar que ya entregó planilla médica...' trigger={<Icon size='large' inverted name='check circle' onClick={submitMedicalF} />} />
            </div>
        </div>
    )
}
