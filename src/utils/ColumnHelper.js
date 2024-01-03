let priorities = ["No Priority", "Urgent", "High", "Medium", "Low"]
let statuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"] 

export const getColumnData = (sortedTickets, groupingType) => {
    const numberOfColumns = (groupingType == "priority")?priorities.length:(groupingType == "status")?statuses.length:sortedTickets.length

    return Array.from({ length: numberOfColumns }, (_, columnIndex) => {
        if(columnIndex>=sortedTickets.length) {
        if(groupingType == "priority") return {heading: priorities[columnIndex]}
        else if(groupingType == "status") return {heading: statuses[columnIndex]}
        }

        return {
        heading: `${sortedTickets[columnIndex][0]?.[groupingType]}`,
        cells: Array.from({ length: sortedTickets[columnIndex].length }, (_, cellIndex) => ({
            id: `${columnIndex}-${cellIndex}`,
            content: `Cell ${cellIndex + 1}`,
        })),
        }
    })
}