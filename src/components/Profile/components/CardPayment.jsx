import React from 'react';
import { Card, Message } from 'semantic-ui-react';
import './CardPayment.scss';

const items = [
    {
        header: 'Julio',
        description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        header: 'Agosto',
        description:
            'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        header: 'Septiembre',
        description:
            'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
    },
]

export function CardPayment({ payment }) {
    return (
        <>
            {
                (payment.length !== 0)
                    ? <Message warning>
                        <Message.Header>Sin pagos previos</Message.Header>
                    </Message>
                    : <Card.Group items={items} />
            }
        </>
    )
}
