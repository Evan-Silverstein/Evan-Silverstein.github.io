
var src = '/src';
function getSrcModulePath(path){
    absPath = src + '/' + path;
    return absPath;
}

function getHomeUrl(){
    var url = 'http://localhost:3000';
    return url
}

function getUploadsDir(path = ''){
    absPath = src + '/uploads/' + path
    return absPath; 
}