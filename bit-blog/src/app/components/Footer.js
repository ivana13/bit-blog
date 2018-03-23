import React from 'react';

const Footer = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Blog posvecen posebnoj osobi, nema veze sto ne radi.</h5>
                <p className="card-text">Samiloscu naseg gospoda i Vesne Biorac.</p>
                <a href="#" className="btn btn-primary">Ovo dugme ne radi nista</a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}

export { Footer }