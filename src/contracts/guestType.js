export const queryGuestType = async (client, address) => {
  return client.queryContractSmart(
    // Guest Type CW4 Group Contract
    "juno1kwmpjp6we33gvkcnfka33l6l55ckyyvryyhnlpue3g7luh3ftd6qz3wqw5",
    {
      member: { addr: address },
    }
    )
  }

  export const queryAdmin = async (client, address) => {
    return client.queryContractSmart(
        // Admins query
        "juno1xqp4rv2mv0t040ytqj8wy9x2ugflltzf7aj338f49mjnv5d4cztsjdj97k",
        {
          member: { addr: address }
        }
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

export const getAdmin = (weight) => {
  switch (weight) {
    case 1:
      return "Admin"
    default:
      return "non-admin"
  }
}

