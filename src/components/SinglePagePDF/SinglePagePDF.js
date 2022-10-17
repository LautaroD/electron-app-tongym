import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { GeneratorPDF } from '../../api';
import { Button, Icon } from 'semantic-ui-react';
import './SinglePadePDF.scss';

const controllerPDF = new GeneratorPDF();

export default function SinglePage({ rutina }) {
    const [filePDF, setFilePDF] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const getPDF = async () => {
        let result = await controllerPDF.loadPDF(rutina, 'preview');
        setFilePDF(result);
    }

    useEffect(() => {
        getPDF();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nextPage = () => {
        setPageNumber(2)
    }

    return (
        <>
            <span style={{ display: 'flex', justifyContent: 'center' }}>
                <Document
                    file={filePDF}
                    options={{ workerSrc: "/pdf.worker.js", standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`, }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    renderMode="svg"
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </span>
            <span className="buttons-pdf-page">
                <Button size="tiny" icon={<Icon name="arrow left" inverted />} onClick={() => setPageNumber(1)} />
                <Button size="tiny" icon={<Icon name="arrow right" inverted />} onClick={() => nextPage()} />
            </span>
        </>
    );
}
