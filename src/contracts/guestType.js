import { checkMembership } from "./checkMembership"

export const queryGuestType = async (client, address) => {
  return checkMembership(
    client,
    "juno1kwmpjp6we33gvkcnfka33l6l55ckyyvryyhnlpue3g7luh3ftd6qz3wqw5",
     address
  )
}
  
  export const getGuestType = (weight) => {
  switch (weight) {
    case 1:
      return "Brunch Guest"
    case 2:
      return "Dinner Guest"
    case 3:
      return "Maker Guest"
    case 4:
      return "Maker"
    case 5:
      return "Special Guest"
    default:
      return "Unknown Guest"
  }
}
