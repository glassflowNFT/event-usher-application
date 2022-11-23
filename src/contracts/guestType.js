export const queryGuestType = async (client, address) => {
  return client.queryContractSmart(
    // Guest Type CW4 Group Contract
    "juno1ss9tlfsj53uc5w6g45sjtu88uyc6nf7ar0k8wge8fmzz3588ceks2xvsnn",
    {
      member: { addr: address },
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
