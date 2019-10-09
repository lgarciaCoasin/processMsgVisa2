class BusinessIndex {
    constructor (){
        this.modelIndex = new ModelIndex()
        this.visa2 = new Visa2()
    }

    loadTypeMsgToSelect(){
        for(let propetyObject in _MSG_LIST_NAME_FIELD){
            this.modelIndex.addOptionSelectTypeMsg(`${propetyObject}`, `${propetyObject}`)
        }
    }

    managerSelectTypeMsg(){
        this.modelIndex.anagerEventChangeSelectTypeMsg(() => {
            this.modelIndex.tagInputNameField.value = ''
            this.modelIndex.tagInputNameField.disableb = (this.modelIndex.tagSelectTypeMsg === 'otro') ? false : true;
        })
    }

    managerProcessReleaseData(){
        this.modelIndex.managerEventClickBtnClear(() => {
            this.modelIndex.tagTextAreaMsgVisa2.value = ''
            this.modelIndex.eraseAllRegistryTable()
        })
    }

    processingMsgVisa2NameField(){
        const listNameFieldMsgVisa2 = this.modelIndex.tagInputNameField.value
        if(this.modelIndex.tagSelectTypeMsg === 'otro')
            this.visa2.msgNameField = listNameFieldMsgVisa2.split(',')
        else
            this.visa2.msgNameField = _MSG_LIST_NAME_FIELD[this.modelIndex.tagSelectTypeMsg.value]
    }

    processingMsgVisa2ValueField(){
        this.visa2.msgToProcess = this.modelIndex.tagTextAreaMsgVisa2.value
        this.visa2.processMsgVisa2('|')
    }

    showResultProcesingMsgVisa2(){
        this.modelIndex.managerEventClickBtnProcess(() => {
            this.processingMsgVisa2ValueField()
            this.processingMsgVisa2NameField()

            this.visa2.msgValueField.forEach((element, index) => {
                let registerMsgVisa2 = {
                    countField : index + 1,
                    nameField : this.visa2.msgNameField[index],
                    LengthField : element.length,
                    valueField : element
                }
                this.modelIndex.addOneRegistryTable(registerMsgVisa2)
            });
        })
    }

}