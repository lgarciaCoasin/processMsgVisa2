class VISA2 {
    constructor (msg){
        this.msgProcess = msg
        this.msgField = [] 
    }

    lenMsgWithOutSeparator(){
        let msgAux = this.msgProcess.replace(/|/gi, "") 
        return msgAux.length
    }

    lenMsgWithSeparator(){
        return this.msgProcess.length
    }

    processMsg(separator){
        this.msgField = this.msgProcess.split(separator)
    }

    getDataElement(numDataElement){
        return this.msgField[numDataElement]
    }

}