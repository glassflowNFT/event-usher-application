import { checkMembership } from "./checkMembership"

export const queryAdmin = async (client, address) => {
  return checkMembership(
    client,
    "juno1mq6fm6cp09r4aytufvs2x9keq6lv80r98mu0wtv609awpme8kursp4hgv9",
    address
  )
}

export const getAdmin = (weight) => {
  switch (weight) {
    case 1:
      return "Admin"
    default:
      return "non-admin"
  }
}