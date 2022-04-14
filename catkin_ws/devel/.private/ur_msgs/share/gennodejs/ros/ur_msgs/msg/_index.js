
"use strict";

let Analog = require('./Analog.js');
let RobotModeDataMsg = require('./RobotModeDataMsg.js');
let MasterboardDataMsg = require('./MasterboardDataMsg.js');
let ToolDataMsg = require('./ToolDataMsg.js');
let RobotStateRTMsg = require('./RobotStateRTMsg.js');
let Digital = require('./Digital.js');
let IOStates = require('./IOStates.js');

module.exports = {
  Analog: Analog,
  RobotModeDataMsg: RobotModeDataMsg,
  MasterboardDataMsg: MasterboardDataMsg,
  ToolDataMsg: ToolDataMsg,
  RobotStateRTMsg: RobotStateRTMsg,
  Digital: Digital,
  IOStates: IOStates,
};
