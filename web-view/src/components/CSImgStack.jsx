import React, { useEffect } from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import * as dicomParser from "dicom-parser";
import * as cornerstoneTools from "cornerstone-tools";
import cornerstoneMath from "cornerstone-math";
import Hammer from "hammerjs";
import "./App.css";

function CSImgStack({ dicomList }) {
    const stack = dicomList.filter(value => value.serie === dicomList[0].serie);
    const element = React.createRef();
    let imageIds = [], i = -1;
    stack.sort((a, b) => {
        if (a.instance > b.instance) {
            return 1;
        }
        if (b.instance > a.instance) {
            return -1;
        }
        return 0;
    });
    while (stack[++i])
        imageIds[i] = "wadouri:" + stack[i].fileName;
    
    const ids = {
        currentImageIdIndex: 0,
        imageIds
    }
    function setImage() {  
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
        cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
        cornerstoneTools.external.cornerstone = cornerstone;
        cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
        cornerstoneTools.external.Hammer = Hammer;
        cornerstoneTools.init();
        cornerstone.enable(element.current);
        cornerstoneTools.addTool(cornerstoneTools.RectangleRoiTool);
        cornerstoneTools.addTool(cornerstoneTools.StackScrollMouseWheelTool);
        cornerstoneTools.setToolActive('StackScrollMouseWheel', { });
        cornerstoneTools.setToolActive("RectangleRoi", { mouseButtonMask: 1 });
        cornerstone.loadImage(imageIds[0]).then((image) => {
            cornerstone.displayImage(element.current, image);
            cornerstoneTools.addStackStateManager(element.current, ['stack']);
            cornerstoneTools.addToolState(element.current, 'stack', ids);
            });
    }
    useEffect(setImage, []);
    return (
        <div style={{ textAlign: "center", backgroundColor: "rgb(233, 236, 239)" }}>
            <div style={{ display: "inline-block", position: "relative" }}>
                <div ref={element} style={{ width: "100vw", height: "600px" }}>
                </div>
            </div>
        </div>
    );
}

export default CSImgStack;