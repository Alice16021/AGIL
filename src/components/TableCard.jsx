import React from 'react';

export default function TableCard({ colunas, acoes, children }) {
    return (
        <div className="card border-0 shadow-sm rounded-4 mt-2">
            <div className="tabela-header text-white rounded-top-4 p-3 d-flex align-items-center justify-content-between">

                <div className="row w-100 fw-semibold m-0 align-items-center d-none d-md-flex">
                    {colunas}
                </div>

                <div className="d-flex gap-3 fs-5 me-2 ms-auto ms-md-0">
                    {acoes}
                </div>
            </div>

            <div className="card-body p-0 bg-white rounded-bottom-4">
                {children}
            </div>
        </div>
    );
}