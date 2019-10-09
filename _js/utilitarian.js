class Utilitarian {
    
    addEventListenerTagHtml(elementHtml, typeEvent, functionCallBack){
        elementHtml.addEventListener(typeEvent, functionCallBack)
    }

    addOptionTagSelect(elementSelect, valueOption, textOption){
        const option = document.createElement('option')
        option.value = valueOption
        option.text = textOption
        elementSelect.add(option, null)
    }

    addRowTable(elementTable, tagTable){
        const tagInsertRowTable = elementTable.getElementsByTagName(tagTable)[0]
        const countRowExisting = tagInsertRowTable.getElementsByTagName('tr').length
        return tagInsertRowTable.insertCell(countRowExisting)
    }

    addCellTable(elementRowTable, dataForCell){
        const countCellExisting = elementRowTable.getElementsByTagName('td').length
        const newCell = elementRowTable.insertCell(countCellExisting)
        newCell.innerHTML = dataForCell
    }

    eraseAllRowTable(elementTable, tagTable){
        elementTable.getElementsByTagName(tagTable)[0].innerHTML = ''
    }

    managerPropertyDisableElement(elementHtml, booleanDisabled){
        elementHtml.disabled = booleanDisabled
    }
}