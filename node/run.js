function runCommand(command, childProcess, options = {}) {
  return new Promise((resolve, reject) => {
    let outData = "";
    const spawn = childProcess.spawn;
    let ls = spawn(...command, options);

    ls.stdout.on("data", function (data) {
      outData += data;
      !options.quiet && process.stdout.write(data);
      // console.log(data.toString());
    });

    ls.stderr.on("data", function (data) {
      process.stdout.write(data);
      // console.log(data.toString());
    });

    ls.on("exit", function (code) {
      if (code.toString() === "0") {
        resolve(outData);
      } else {
        reject(code);
      }
      console.log("child process exited with code " + code.toString());
    });
  });
}

module.exports = runCommand;
