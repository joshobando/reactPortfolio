import React from "react";
import './style.css';
import Resumepdf from '../../components/Resumepdf/Joshua Obando Resume 2019.docx.pdf';

function Resume(){
    return(
        <div className="viewFour" id="resume">
            <div className="row">
                <div className="col-md">
                    <a href={Resume}><h3 className="viewTitle" id="resumeTitle"></h3></a>
                </div>
            </div>
        </div>
    );
}

export default Resume;