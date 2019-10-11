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
        this.modelIndex.managerEventChangeSelectTypeMsg(() => {
            this.modelIndex.tagInputNameField.value = ''
            this.modelIndex.tagInputNameField.disabled = (this.modelIndex.tagSelectTypeMsg.value === 'otro') ? false : true;
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
        if(this.modelIndex.tagSelectTypeMsg.value === 'otro')
            this.visa2.msgNameField = listNameFieldMsgVisa2.split(',')
        else
            this.visa2.msgNameField = _MSG_LIST_NAME_FIELD[this.modelIndex.tagSelectTypeMsg.value]
    }

    processingMsgVisa2ValueField(){
        this.visa2.msgToProcess = this.modelIndex.tagTextAreaMsgVisa2.value
        this.visa2.processMsgVisa2('|')
    }

    buildRegitryProcessingMsgVisa2(valueField, indexValue){
        let registerMsgVisa2 = {}
        registerMsgVisa2.countField = (indexValue + 1)
        registerMsgVisa2.nameField = this.visa2.msgNameField[indexValue]
        registerMsgVisa2.LengthField = valueField.length
        registerMsgVisa2.valueField = valueField
        this.modelIndex.addOneRegistryTable(registerMsgVisa2)
    }

    showResultProcesingMsgVisa2(){
        this.modelIndex.managerEventClickBtnProcess(() => {
            this.processingMsgVisa2ValueField()
            this.processingMsgVisa2NameField()
            this.modelIndex.eraseAllRegistryTable()
            this.visa2.msgValueField.forEach(this.buildRegitryProcessingMsgVisa2.bind(this))
        })
    }

}