class ModelIndex {
    constructor (){
        this.tagTextAreaMsgVisa2 = document.getElementById('msg-text')
        this.tagSelectTypeMsg = document.getElementById('type-message')
        this.tagInputNameField = document.getElementById('name-field')
        this.tagBtnProcess = document.getElementById('process')
        this.tagBtnClear = document.getElementById('clear')
        this.tagTable = document.getElementById('table-data')
    }

    addOneRegistryTable(valueFieldsTable){
        const row = SimpleHtml.addRowTable(this.tagTable, 'tbody')
        SimpleHtml.addCellTable(row, valueFieldsTable.countField)
        SimpleHtml.addCellTable(row, valueFieldsTable.nameField)
        SimpleHtml.addCellTable(row, valueFieldsTable.LengthField)
        SimpleHtml.addCellTable(row, valueFieldsTable.valueField)
    }

    addOptionSelectTypeMsg(valueOption, textOption){
        SimpleHtml.addOptionTagSelect(this.tagSelectTypeMsg, valueOption, textOption)
    }

    managerEventClickBtnProcess(functionCallBack){
        SimpleHtml.addEventListenerTagHtml(this.tagBtnProcess, 'click', functionCallBack)
    }

    managerEventClickBtnClear(functionCallBack){
        SimpleHtml.addEventListenerTagHtml(this.tagBtnClear, 'click', functionCallBack)
    }

    managerEventChangeTextAreaMsgVisa2(functionCallBack){
        SimpleHtml.addEventListenerTagHtml(this.tagTextAreaMsgVisa2, 'change', functionCallBack)
    }

    managerEventChangeInputNameField(functionCallBack){
        SimpleHtml.addEventListenerTagHtml(this.tagInputNameField, 'change', functionCallBack)
    }

    managerEventChangeSelectTypeMsg(functionCallBack){
        SimpleHtml.addEventListenerTagHtml(this.tagSelectTypeMsg, 'change', functionCallBack)
    }

    eraseAllRegistryTable(){
        SimpleHtml.eraseAllRowTable(this.tagTable, 'tbody')
    }
}