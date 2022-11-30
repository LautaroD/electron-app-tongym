import React, { useEffect } from 'react';
import { Sidebar } from '../index';
import './Layout.scss';
import { Database, Attedance } from '../../api';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const controllerDatabase = new Database();
const attendanceController = new Attedance();

(async function validations() {
    await controllerDatabase.validateDirectories();
    await controllerDatabase.newMonth();
    await attendanceController.checkMonth();
})();

export function Layout({ children }) {
    const loading = useSelector((state) => state.loadingReducer.isLoading);
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='logged-layout'>
            <div className='logged-layout__content'>
                <div className='logged-layout__left-menu'>
                    <Sidebar />
                </div>
                <div className='logged-layout__children-content'>
                    {
                        (loading)
                            ? <Dimmer active inverted>
                                <Loader inverted >Cargando...</Loader>
                            </Dimmer>
                            : <div>{children}</div>
                    }
                </div>
            </div>
            <span className='logged-layout__footer'>
                Soporte: LautaroDarretche@hotmail.es
            </span>
        </div>
    )
}
