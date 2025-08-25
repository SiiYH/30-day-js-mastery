/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArray = path.split('/');
    let pathStack = [];

    if (path === '/' || path === '/../') return '/';

    for(let i = 0; i<pathArray.length; i++){
        let pathChar = pathArray[i];
        switch(pathChar){
            case "":
            case ".": 
                break;
            case "..": 
                if(pathStack.length > 0) pathStack.pop(); 
                break;
            default: 
                pathStack.push(pathChar); 
        }
    }

    return "/" + pathStack.join("/");
};