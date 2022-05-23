const runCommand = require("./run");
this._process = require("child_process");

runCommand(["yarn", ["add", "-E"]], this._process);
