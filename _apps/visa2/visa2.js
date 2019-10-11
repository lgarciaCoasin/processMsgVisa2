class Visa2 {
    constructor (msg){
        this.msgToProcess = msg
        this.msgValueField = []
        this.msgNameField = [] 
    }

    lenMsgWithOutSeparator(){
        let msgAux = this.msgToProcess.replace(/|/gi, "") 
        return msgAux.length
    }

    lenMsgWithSeparator(){
        return this.msgToProcess.length
    }

    processMsgVisa2(separator){
        this.msgValueField = this.msgToProcess.split(separator)
    }

    getDataElement(numDataElement){
        return this.msgValueField[numDataElement]
    }

}