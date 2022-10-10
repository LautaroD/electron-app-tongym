import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { GeneratorPDF } from '../../api';

const controllerPDF = new GeneratorPDF();

export default function SinglePage({ rutina }) {
    const [filePDF, setFilePDF] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setPageNumber(1);
    }

    const getPDF = async () => {
        let result = await controllerPDF.loadPDF(rutina);
        setFilePDF(result);
    }

    useEffect(() => {
        getPDF();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <span style={{ display: 'flex', justifyContent: 'center' }}>
                <Document
                    file={filePDF}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </span>
        </>
    );
}
