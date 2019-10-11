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
        const row = Utilitarian.addRowTable(this.tagTable, 'tbody')
        Utilitarian.addCellTable(row, valueFieldsTable.countField)
        Utilitarian.addCellTable(row, valueFieldsTable.nameField)
        Utilitarian.addCellTable(row, valueFieldsTable.LengthField)
        Utilitarian.addCellTable(row, valueFieldsTable.valueField)
    }

    addOptionSelectTypeMsg(valueOption, textOption){
        Utilitarian.addOptionTagSelect(this.tagSelectTypeMsg, valueOption, textOption)
    }

    managerEventClickBtnProcess(functionCallBack){
        Utilitarian.addEventListenerTagHtml(this.tagBtnProcess, 'click', functionCallBack)
    }

    managerEventClickBtnClear(functionCallBack){
        Utilitarian.addEventListenerTagHtml(this.tagBtnClear, 'click', functionCallBack)
    }

    managerEventChangeTextAreaMsgVisa2(functionCallBack){
        Utilitarian.addEventListenerTagHtml(this.tagTextAreaMsgVisa2, 'change', functionCallBack)
    }

    managerEventChangeInputNameField(functionCallBack){
        Utilitarian.addEventListenerTagHtml(this.tagInputNameField, 'change', functionCallBack)
    }

    managerEventChangeSelectTypeMsg(functionCallBack){
        Utilitarian.addEventListenerTagHtml(this.tagSelectTypeMsg, 'change', functionCallBack)
    }

    eraseAllRegistryTable(){
        Utilitarian.eraseAllRowTable(this.tagTable, 'tbody')
    }
}