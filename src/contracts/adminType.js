import { checkMembership } from "./checkMembership"

export const queryAdmin = async (client, address) => {
  return checkMembership(
    client,
    "juno1xqp4rv2mv0t040ytqj8wy9x2ugflltzf7aj338f49mjnv5d4cztsjdj97k",
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