const fs = require('fs')
const validator = require('validator')

// more easy to use
function ls(texte){console.log('  '+texte)}


/////////////////////////////////////////////////////////
//          Check if the folder exists                 //
//-----------------------------------------------------//
// In(String:name of folder)                           //
// Out: True if the folder exits                       //
/////////////////////////////////////////////////////////
function findFolderByName(id){if (fs.existsSync(id)) {return true}return false}
function findFileByName(fileName){if (fs.existsSync(fileName)) {return true}return false}

/////////////////////////////////////////////////////////
//          Give data of folder                        //
//-----------------------------------------------------//
// In(String:name of folder)                           //
// Out: object                                         //
/////////////////////////////////////////////////////////
//Don't use this function when your are not sure !
function giveAllDataFolder(folderName){if(findFolderByName(folderName)== true){return fs.statSync(folderName)} return false}
function giveDataFolder(folderName){
    const StatsFolder = giveAllDataFolder(folderName)
    if (StatsFolder!= false){
        return{
        name:folderName, 
        mode:StatsFolder.mode, 
        size:StatsFolder.size, 
        nlink:StatsFolder.nlink, 
        mtime:StatsFolder.mtime, 
        birthtime:StatsFolder.birthtime
        }    
    } 
    return false  
}


//////////////////////////////////////////////////////////
//          Give data file on folder                    //
//------------------------------------------------------//
//////////////////////////////////////////////////////////
function giveDataFileByName(fileName){}
function giveFilesFolderByName(folderName){}
function giveDataFilesFolderByName(folderName){}

//////////////////////////////////////////////////////////
//          Write or update file on folder              //
//------------------------------------------------------//
// In(String:folderName, String:fileName, object:file)  //
// Out: True if the function write or update            //
//////////////////////////////////////////////////////////
function writeFileOnFolder(folderName, fileName, file){
    if(!validator.isAlphanumeric(fileName)){ls('[x] Update decline by the file name.');return false}//check if 'fileName' is realy a file name
    if(!findFolderByName(folderName)){ls('[x] Update decline by missing folder '); return false}//check if the folder exist
    fs.writeFileSync(folderName+'/'+fileName, file, function(err){if(err)throw err})
    ls('[o] '+fileName+' updated or create.') 
    return true
}

//////////////////////////////////////////////////////////
//          Delete a file on folder                     //
//------------------------------------------------------//
// In(String:folderName, String:fileName, object:file)  //
// Out: True if the file are deleted                    //
//////////////////////////////////////////////////////////
function deleteFileOnFolder(folderName, fileName){
    if(!validator.isAlphanumeric(fileName)){ls('[x] Deleted decline by the file name.');return false}//check if 'fileName' is realy a file name
    if(!findFolderByName(folderName)){ls('[x] Update decline by missing folder.'); return false}//check if the folder exist
    if(!findFileByName(folderName+'/'+fileName)){ls('[x] Delete decline by missing file.');return false}//check if the file exist
    fs.unlinkSync(folderName+'/'+fileName)//delete
    if(!findFileByName(folderName+'/'+fileName)){ls('[o] '+fileName+' deleted.');return true}//check
}




////////////////////    MAIN    ////////////////////
writeFileOnFolder('DATA', 'req3','contenu du fichier')
deleteFileOnFolder('DATA','req3')


