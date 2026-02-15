import { useState, useEffect } from 'react';

export const Dashboard = () => {
    const [dataAtual, setDataAtual] = useState(() => new Date().toLocaleTimeString());
    const [idAleatorio] = useState(() => Math.floor(Math.random() * 1000));

    useEffect(() => {
        const timer = setInterval(() => {
            setDataAtual(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Painel de Controle</h1>
            <div className="card" style={{ border: '1px solid #ccc', padding: '10px' }}>
                <h3>Status do Sistema</h3>

                <p data-testid="dynamic-time">Hora atual: {dataAtual}</p>
                <p data-testid="dynamic-id">ID da Sessão: {idAleatorio}</p>

                <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
                    Confirmar
                </button>
            </div>
        </div>
    );
};