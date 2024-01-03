import { getPriorityName } from "./TicketApi";

const attributeComparator = (attribute) => (a, b) => {
  let valueA, valueB
  if(typeof a[attribute] === 'string') {
    valueA = a[attribute].toLowerCase()
  } else {
    valueA = b[attribute]
  }

  if(typeof b[attribute] === 'string') {
    valueB = b[attribute].toLowerCase()
  } else {
    valueB = a[attribute]
  }

  const compareResult = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  return compareResult;
};

const groupByProperty = (tickets, groupingType) => {
  const groupedMap = {};

  tickets.forEach((ticket) => {
    const key = ticket[groupingType];
    groupedMap[key] = groupedMap[key] || [];
    groupedMap[key].push(ticket);
  });

  return Object.values(groupedMap);
};

const priorityIndex = new Map([["No Priority", 0], ["Low Priority", 4], ["Medium Priority", 3], ["High Priority", 2], ["Urgent", 1]]);
const statusIndex = new Map([["Backlog", 0], ["Todo", 1], ["In progress", 2], ["Done", 3], ["Done", 4]]);

const sortOnBasisOfUser = (groupedTickets, orderingType) => {
  groupedTickets.sort((a, b) => a[0].user.localeCompare(b[0].user))
  return groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
}

const sortOnBasisOfPriority = (groupedTickets, orderingType) => {
  groupedTickets.sort((a, b) => {
    const indexA = priorityIndex.get(getPriorityName(a[0].priority));
    const indexB = priorityIndex.get(getPriorityName(b[0].priority));

    return indexA - indexB;
  })
  return groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
}

const sortOnBasisOfStatus = (groupedTickets, orderingType) => {
  groupedTickets.sort((a, b) => {
    const indexA = statusIndex.get(a[0].status);
    const indexB = statusIndex.get(b[0].status);

    return indexA - indexB;
  })
  return groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
}

export const getSortedTickets = (ticketsData, groupingType, orderingType) => {
  const groupedTickets = groupByProperty(ticketsData, groupingType);

  if(groupingType === "user") {
    return sortOnBasisOfUser(groupedTickets, orderingType)
  } else if(groupingType == "priority") {
    return sortOnBasisOfPriority(groupedTickets, orderingType)
  } else if(groupingType == "status") {
    return sortOnBasisOfStatus(groupedTickets, orderingType)
  }

  return []
}