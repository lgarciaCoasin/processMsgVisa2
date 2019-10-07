const msgText = document.getElementById('msg-text')
const tabladata = document.getElementById('table-data')
const buttonClear = document.getElementById('clear')
const buttonProcess = document.getElementById('process')
const selectMsg = document.getElementById('typeMessage')


// Add content
const addCell = (row, data) => {
    let countCell = row.getElementsByTagName('td').length
    let cell = row.insertCell(countCell)
    cell.innerHTML = `${data}`
    return cell
}

const addRow = (table) => {
    let countRow = table.getElementsByTagName('tr').length
    let row = table.insertRow(countRow)
    return row
}

const addOption = (select, value, text) => {
    let option = document.createElement('option')
    option.value = value
    option.text = text
    select.add(option, null)
    return option
}


// Listener
const listenerClear = () => {
    msgText.value = ""
}

const listenerProcess = () => {
    // Msg seleted to process
    let msgTypeSeleted = _MSG_LIST_[selectMsg.value]

    // Get value textarea (msg Visa2)
    let classVisa2 = new VISA2(msgText.value)

    // Init tbody
    let tbodyTable = tabladata.getElementsByTagName('tbody')[0]
    tbodyTable.innerHTML = ""

    // Process msg Visa2
    classVisa2.processMsg('|')
    classVisa2.msgField.forEach((value, i) => {
        
        // Add row and cell
        let row = addRow(tbodyTable)    
        addCell(row, i + 1)
        addCell(row, msgTypeSeleted[i])
        addCell(row, value.length)
        addCell(row, value)
    })
}

const addTypeMsg = () => {
    for(const prop in _MSG_LIST_){
        addOption(selectMsg, prop, prop)
    }
}



// Event listener
buttonProcess.addEventListener('click', listenerProcess)

buttonClear.addEventListener('click', listenerClear)

// Event main
addTypeMsg()