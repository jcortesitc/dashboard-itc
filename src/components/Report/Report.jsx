import { useState } from 'react'


let pbi_report1 = 'https://app.powerbi.com/view?r=eyJrIjoiNDA0YmIzOGYtYWRkYS00ZmJjLThmNGItMmJjMThiMmVhNDcxIiwidCI6IjMxZDdkOTk5LTJmZjItNGJmMi04MTIxLWYwZGM0YzUyYmQ0MiIsImMiOjR9&pageName=ReportSection'
let pbi_report2 = 'https://app.powerbi.com/view?r=eyJrIjoiYmE3NTA3NWQtNzI5NS00MTIyLTgzNTMtM2QwNzY0YWU4NTMwIiwidCI6IjMxZDdkOTk5LTJmZjItNGJmMi04MTIxLWYwZGM0YzUyYmQ0MiIsImMiOjR9&pageName=ReportSectione5486eaaf2949c164817'

const Report = () => {
    const [report, setReport] = useState([''])






    return (
        <div>
            <h2 className="title text-center mb-2">Reportes</h2>
            <p>Seleccione un reporte para desplegar</p>
            <button className="btn btn-primary mx-1" onClick={() => setReport(pbi_report1)}>Reporte Test</button>
            <button className="btn btn-primary mx-1" onClick={() => setReport(pbi_report2)}>Reporte Operaciones</button>
            <div>
            <iframe title="powerbi" width="600" height="400" src={report} allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default Report