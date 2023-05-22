//////////////////////////////////////////////////////////
//                                                      //
//////////////////////////////////////////////////////////
class Folder{
    constructor(){ this.name = 'pomme'}
    set(dataFile){
        this.name = dataFile.name
        this.size = dataFile.size
        this.permission = dataFile.mode
        this.birth  = dataFile.birthtime
        this.last = dataFile.mtime
        this.location
    }

    affiche(){
        console.log('File affichage ')
        console.log(" Name : "+ this.name)
        console.log(" Size : "+ this.size)
        console.log(" Permission: "+ this.permission)
        console.log(" birth : "+ this.birth)
        console.log(' last : '+this.last)
        console.log(" location:"+ this.location)
    }
}

const toto = new Folder()
toto.affiche

