function configJP(conf) {
  const myObj = new Object();
  if (!conf.colorDots) {
    myObj.colorDots = "orange";
  } else if (conf.colorDots != "") {
    myObj.colorDots = conf.colorDots;
  }
  if (!conf.width) {
    myObj.width = 667;
  } else {
    myObj.width = conf.width;
  }
  if (!conf.height) {
    myObj.height = 375;
  } else {
    myObj.height = conf.height;
  }
  if (!conf.hopColor) {
    myObj.hopColor = "grey";
  } else {
    myObj.hopColor = conf.hopColor;
  }
  if (!conf.hopWidth) {
    myObj.hopWidth = "1.5px";
  } else {
    myObj.hopWidth = conf.hopWidth;
  }
  if (!conf.hopBigWidth) {
    myObj.hopBigWidth = "10px";
  } else {
    myObj.hopBigWidth = conf.hopBigWidth;
  }
  if (!conf.textAxisColor) {
    myObj.textAxisColor = "grey";
  } else {
    myObj.textAxisColor = conf.textAxisColor;
  }
  if (!conf.axisColor) {
    myObj.axisColor = "#000";
  } else {
    myObj.axisColor = conf.axisColor;
  }
  if (!conf.axisInfoColor) {
    myObj.axisInfoColor = "orange";
  } else {
    myObj.axisInfoColor = conf.axisInfoColor;
  }
  if (!conf.transitionDuration) {
    myObj.transitionDuration = 1000;
  } else {
    myObj.transitionDuration = conf.transitionDuration;
  }
  if (!conf.mouseOverColor) {
    myObj.mouseOverColor = "";
  } else {
    myObj.mouseOverColor = conf.mouseOverColor;
  }
  if (!conf.nodeSize) {
    myObj.nodeSize = 5;
  } else {
    myObj.nodeSize = conf.nodeSize;
  }
  if (!conf.nodeBigSize) {
    myObj.nodeBigSize = 10;
  } else {
    myObj.nodeBigSize = conf.nodeBigSize;
  }
  return myObj;
}
