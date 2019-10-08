class BusinessIndex {
    constructor (){
        this.modelIndex = new ModelIndex()
    }

    clear(){
        this.modelIndex.addListener(this.modelIndex.btoClear, 'click', ()=>{
            this.modelIndex.setValueElement(this.modelIndex.msgVisa2, '')
            this.modelIndex.setValueElement(this.modelIndex.nameField, '')
            this.modelIndex.eraseAllRowTable(this.modelIndex.tableData)
        })
    }

    processMsg(){
        this.modelIndex.addListener(this.modelIndex.btoProcess, 'click', ()=>{
            let valueCells ={
                cell1 : '1',
                cell2 : '2',
                cell3 : '3',
                cell4 : '4',
            }
           
            this.modelIndex.addRowTable(this.modelIndex.tableData, valueCells)
        }) 
    }
}