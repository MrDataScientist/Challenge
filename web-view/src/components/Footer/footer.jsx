import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const divStyle = {
  backgroundColor: 'aqua'
};

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={divStyle}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">deepc GmbH</h5>
            <p>
            But Healthcare is not ready for A.I. The problem is that >99% of biomedical data is unstructured and thus cannot be used as input for model training. 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.orthanc-server.com/">Orthanc</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.osimis.io/en/download.html">Osimis</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.npmjs.com/package/dicom-parser">Dicom-Parser</a>
              </li>
              <li className="list-unstyled">
                <a href="https://docs.cornerstonejs.org/installation.html">Comerstone</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/tarik-en-nakdi-%ED%83%80%EB%A7%84-%EC%97%94-%EB%82%99%EB%94%94-88414131/"> Tarik En-Nakdi</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;