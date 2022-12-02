import { checkMembership } from "./checkMembership"

export const queryDayOneArrival = async (client, address) => {
  return checkMembership(
    client,
    "juno1j2ysyynjfmmxcj7pmctqzmyjvf3flyckf7hexllvjgx5h8k5j7cs26cj4c",
    address
  )
}
 
  
export const queryDayTwoArrival = async (client, address) => {
  return checkMembership(
    client,
    "juno1t3pu7c4r8476gxuc5037c4y94x9sxspsxg7gync07hnmjset7rvsln3qzf",
    address
  )
}
  

// Add Member Day two arrival
