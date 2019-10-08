class ModelIndex {
    constructor (){
        this.msgVisa2 = document.getElementById('msg-text')
        this.typeMsg = document.getElementById('type-message')
        this.nameField = document.getElementById('name-field')
        this.btoProcess = document.getElementById('process')
        this.btoClear = document.getElementById('clear')
        this.tableData = document.getElementById('table-data')
    }

    addListener(elementHtml, event, callback){
        elementHtml.addEventListener(event, callback)
    }

    addOptionSelect(elementSelect, value, text){
        const option = document.createElement('option')
        
        option.value = value
        option.text = text
        elementSelect.add(option, null)
    }

    addCell(row, data){
        const countCell = row.getElementsByTagName('td').length
        const cell = row.insertCell(countCell)
        cell.innerHTML = data
    }

    addRowTable(elementTable, objectValueCell){
        const tagTbody = elementTable.getElementsByTagName('tbody')[0]
        const countRow = tagTbody.getElementsByTagName('tr').length
        const row = tagTbody.insertRow(countRow)
        
        this.addCell(row, objectValueCell.cell1)
        this.addCell(row, objectValueCell.cell2)
        this.addCell(row, objectValueCell.cell3)
        this.addCell(row, objectValueCell.cell4)
    }

    eraseAllRowTable(elementTable){
        elementTable.getElementsByTagName('tbody')[0].innerHTML = ''
    }

    disableElement(elementHtml, disabled){
        elementHtml.disabled = disabled
    }

    getValueElement(elementHtml){
        return elementHtml.value
    }

    setValueElement(elementHtml, data){
        elementHtml.value = data
    }
}