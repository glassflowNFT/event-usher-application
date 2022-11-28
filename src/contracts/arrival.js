export const queryDayOneArrival = async (client, address) => {
    return client.queryContractSmart(
      // Day One Arrival CW4 Group Contract
      "juno1j2ysyynjfmmxcj7pmctqzmyjvf3flyckf7hexllvjgx5h8k5j7cs26cj4c",
      {
        member: { addr: address },
      }
    )
  }
  
  export const queryDayTwoArrival = async (client, address) => {
    return client.queryContractSmart(
      // Day Two Arrival CW4 Group Contract
      "juno1t3pu7c4r8476gxuc5037c4y94x9sxspsxg7gync07hnmjset7rvsln3qzf",
      {
        member: { addr: address },
      }
    )
  }
 
// Add Member Day one arrival 

// Add Member Day two arrival
