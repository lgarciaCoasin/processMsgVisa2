class SimpleHtml {
    
    static addEventListenerTagHtml(elementHtml, typeEvent, functionCallBack){
        elementHtml.addEventListener(typeEvent, functionCallBack)
    }

    static addOptionTagSelect(elementSelect, valueOption, textOption){
        const option = document.createElement('option')
        option.value = valueOption
        option.text = textOption
        elementSelect.add(option, null)
    }

    static addRowTable(elementTable, tagTable){
        const tagInsertRowTable = elementTable.getElementsByTagName(tagTable)[0]
        const countRowExisting = tagInsertRowTable.getElementsByTagName('tr').length
        return tagInsertRowTable.insertRow(countRowExisting)
    }

    static addCellTable(elementRowTable, dataForCell){
        const countCellExisting = elementRowTable.getElementsByTagName('td').length
        const newCell = elementRowTable.insertCell(countCellExisting)
        newCell.innerHTML = dataForCell
    }

    static eraseAllRowTable(elementTable, tagTable){
        elementTable.getElementsByTagName(tagTable)[0].innerHTML = ''
    }

    static managerPropertyDisableElement(elementHtml, booleanDisabled){
        elementHtml.disabled = booleanDisabled
    }
}