import axios from 'axios'

const userAvailability = {}
const priority = new Map([["No Priority", 0], ["Low Priority", 1], ["Medium Priority", 2], ["High Priority", 3], ["Urgent", 4]]);
const priorityName = new Map([[0, "No Priority"], [1, "Low Priority"], [2, "Medium Priority"], [3, "High Priority"], [4, "Urgent"]]);

export const getTickets = () => {
    return axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then((response) => {
        if(response.data) {
            response.data.users.forEach((user) => {
              userAvailability[user.name] = user.available
            })

            const ticketData = response.data.tickets.map((ticket) => {
              const users = response.data.users.find((user) => user.id === ticket.userId);

              return {
                id: ticket.id,
                title: ticket.title,
                tags: ticket.tag,
                status: ticket.status,
                priority: ticket.priority,
                available: users.available,
                user: users.name
              };
            });
            return ticketData
        } else throw console.error('Response null');
    })
    .catch((err) => console.log(err))
}

export const getPriorityName = (priority) => {
  return priorityName.get(priority)
}

export const getPriority = (priorityName) => {
  return priority.get(priorityName)
}

export const getAvailability = (userName) => {
  return userAvailability[userName]
}