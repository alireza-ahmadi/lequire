var path = require('path'),
    lequire;

lequire = (function(){
    function lequire(filePath){
        var mainFile,
            mainDirectory,
            pathToRequire;

        if(filePath.indexOf('./') == 0){
            mainFile = module.parent.filename;
        }
        else{
            mainFile = require.main.filename;
        }
        mainDirectory = path.dirname(mainFile);
        pathToRequire = path.join(mainDirectory, filePath);
        console.log(pathToRequire);
        return require(pathToRequire);
    }

    return lequire;
})();

module.exports = lequire;