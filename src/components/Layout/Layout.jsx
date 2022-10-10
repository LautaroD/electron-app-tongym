import React from 'react';
import { Sidebar } from '../index';
import './Layout.scss';
import { Database } from '../../api';

const controllerDatabase = new Database();

(async function validations() {
    await controllerDatabase.validateDirectories();
    await controllerDatabase.newMonth();
})();

export function Layout({ children }) {
    return (
        <div className='logged-layout'>
            <div className='logged-layout__content'>
                <div className='logged-layout__left-menu'>
                    <Sidebar />
                </div>
                <div className='logged-layout__children-content'>
                    <div>{children}</div>
                </div>
            </div>
            <span className='logged-layout__footer'>
                Soporte: LautaroDarretche@hotmail.es
            </span>
        </div>
    )
}
