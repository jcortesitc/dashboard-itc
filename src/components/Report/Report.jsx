import { useState } from 'react'


let pbi_report1 = 'https://app.powerbi.com/view?r=eyJrIjoiZjIwNGRjZGYtM2M4NS00ZWFhLWI0ZjktYTJjMzNiNDkxMzA5IiwidCI6IjMxZDdkOTk5LTJmZjItNGJmMi04MTIxLWYwZGM0YzUyYmQ0MiIsImMiOjR9&pageName=addd361c6569d1e3dac1'
let pbi_report2 = 'https://app.powerbi.com/view?r=eyJrIjoiYmE3NTA3NWQtNzI5NS00MTIyLTgzNTMtM2QwNzY0YWU4NTMwIiwidCI6IjMxZDdkOTk5LTJmZjItNGJmMi04MTIxLWYwZGM0YzUyYmQ0MiIsImMiOjR9&pageName=ReportSectione5486eaaf2949c164817'

const Report = () => {
    const [report, setReport] = useState([''])






    return (
        <div>
            <h2 className="title text-center mt-4">Reportes</h2>
            <p>Seleccione un reporte para desplegar</p>
            <button className="btn btn-primary mx-1" onClick={() => setReport(pbi_report1)}>Tablero Operaciones</button>
            <a href={report} target="_blank">
            <button className="btn btn-primary mx-1">
               <img src="../../src/assets/power-bi-icon.png" width={"15"} alt="" className='me-2' />
            Abrir en nueva pestaña
            </button>
            </a>   
            <button className="btn btn-primary mx-1" onClick={() => setReport(pbi_report2)}>Reporte Operaciones</button>
            <div>
                <iframe title="powerbi" width="800" height="600" src={report} allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default Report