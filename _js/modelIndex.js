class ModelIndex {
    constructor (){
        this.tagTextAreaMsgVisa2 = document.getElementById('msg-text')
        this.tagSelectTypeMsg = document.getElementById('type-message')
        this.tagInputNameField = document.getElementById('name-field')
        this.tagBtnProcess = document.getElementById('process')
        this.tagBtnClear = document.getElementById('clear')
        this.tagTable = document.getElementById('table-data')
        this.utilitary = new Utilitarian()
    }

    addOneRegistryTable(valueFieldsTable){
        const row = this.utilitary.addRowTable(this.tagTable, 'tbody')
        this.utilitary.addCellTable(row, valueFieldsTable.countField)
        this.utilitary.addCellTable(row, valueFieldsTable.nameField)
        this.utilitary.addCellTable(row, valueFieldsTable.LengthField)
        this.utilitary.addCellTable(row, valueFieldsTable.valueField)
    }

    addOptionSelectTypeMsg(valueOption, textOption){
        this.utilitary.addOptionTagSelect(this.tagSelectTypeMsg, valueOption, textOption)
    }

    managerEventClickBtnProcess(functionCallBack){
        this.utilitary.addEventListenerTagHtml(this.tagBtnProcess, 'click', functionCallBack)
    }

    managerEventClickBtnClear(functionCallBack){
        this.utilitary.addEventListenerTagHtml(this.tagBtnClear, 'click', functionCallBack)
    }

    managerEventChangeTextAreaMsgVisa2(functionCallBack){
        this.utilitary.addEventListenerTagHtml(this.tagTextAreaMsgVisa2, 'change', functionCallBack)
    }

    managerEventChangeInputNameField(functionCallBack){
        this.utilitary.addEventListenerTagHtml(this.tagInputNameField, 'change', functionCallBack)
    }

    anagerEventChangeSelectTypeMsg(functionCallBack){
        this.utilitary.addEventListenerTagHtml(this.tagSelectTypeMsg, 'change', functionCallBack)
    }

    eraseAllRegistryTable(){
        this.utilitary.eraseAllRowTable(this.tagTable, 'tbody')
    }
}