import React, { useState } from 'react'

function Semaforo() {

    const [activeLight, setActiveLight] = useState('red')
    const [intervalId, setIntervalId] = useState(null);
    const [showPurple, setShowPurple] = useState(false)


    const handleToggleInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId = setInterval(() => {
                setActiveLight(prevLight => {
                    switch (prevLight) {
                        case 'red':
                            return 'yellow';
                        case 'yellow':
                            return 'green';
                        case 'green':
                            if (showPurple){
                                return 'purple'
                            }
                            else{
                                return 'red';
                            }
                        default:
                            return 'red';
                    }
                });
            }, 3000);

            setIntervalId(newIntervalId);
        }
    };

    const handleLight = (color) => {
        setActiveLight(color)
    }

    const handlePurpleLight = () => {
        if (showPurple) {
            setShowPurple(false)
        }
        else {
            setShowPurple(true)
        }
    }


    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <div className='bg-dark m-0 p-0' id='posteSemaforo'>
            </div>
            <div className='bg-dark m-0 p-0 d-flex justify-content-center align-items-center flex-column' id='SemaforoLuces'>
                <div className='luz mb-4'>
                    <button type='button' className={`w-100 h-100 luz-roja-${activeLight === 'red' ? 'encendida' : 'apagada'}`} onClick={() => handleLight('red')}></button>
                </div>
                <div className='luz my-2'>
                    <button type='button' className={`w-100 h-100 luz-amarilla-${activeLight === 'yellow' ? 'encendida' : 'apagada'}`} onClick={() => handleLight('yellow')}></button>
                </div>
                <div className='luz mt-4'>
                    <button type='button' className={`w-100 h-100  luz-verde-${activeLight === 'green' ? 'encendida' : 'apagada'}`} onClick={() => handleLight('green')}></button>
                </div>
            </div>
            {showPurple && (
                <div className='bg-dark m-0 p-0 d-flex justify-content-center align-items-center flex-column' id='SemaforoPurpura'>
                    <div className='luz mb-4'>
                        <button type='button' className={`w-100 h-100 luz-morada-${activeLight === 'purple' ? 'encendida' : 'apagada'}`} onClick={() => handleLight('purple')}></button>
                    </div>
                </div>
            )}
            <div className='my-5'>
                <button type='button' className='btn btn-outline-success fs-2' onClick={handleToggleInterval}>{intervalId ? 'Detener Automático' : 'Iniciar Automático'}</button>
            </div>
            <div className='my-3'>
                <button type='button' className='btn btn-outline-info fs-2' onClick={handlePurpleLight}>{showPurple ? 'No mostrar color' : 'Mostrar color'}</button>
            </div>


        </div>
    )
}

export default Semaforo