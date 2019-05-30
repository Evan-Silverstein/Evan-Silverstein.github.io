import React, { Component} from "react";

function Resume(props){
    var resumeLink = props.resumeLink; //+ '#zoom=50';
    //var googleLink = "https://docs.google.com/viewer?url=" + getHomeUrl() + resumeLink + "&embedded=true";
    // console.log(googleLink)
    // var service = props.service;
    // var resumeLink = service.getResumeUrl();

    // var googleLink = 'https://docs.google.com/gview';
    // var src = googleLink + '?url='
    // var src = "https://docs.google.com/gview?url=https://path.com/to/your/pdf.pdf&embedded=true
    return(
        <div className="resume-wrapper">
        <object data={resumeLink} type="application/pdf">
            {/* <iframe src={googleLink}></iframe> */}
        </object>
            {/* <iframe src={resumeLink} ></iframe> */}
        </div>
        // <iframe src="https://docs.google.com/gview?url=https://path.com/to/your/pdf.pdf&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe>
    )
}

export default Resume;