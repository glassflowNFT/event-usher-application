import { checkMembership } from "./checkMembership"
import { coins } from "@cosmjs/stargate"

const VOTING_CONTRACT = "juno15vk6eu7kvh24uzj447xkfqm654y0uv48pt524nl44cx592gzdwcs9y47ga"

export const queryJudge = async (client, address) => {
  return checkMembership(
    client,
    "juno1rzc8xmegmsm20c7nz5zm657vs0lq0f3vu764eghqrd78c5725edqw5rqp4",
    address
  )
}

export const getJudge = (weight) => {
  switch (weight) {
    case 1:
      return "Judge"
    default:
      return "non-judge"
  }
}

export const queryEntries = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryDryWinners = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryDryEntries = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryMeltEntries = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryMeltWinners = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryRosinEntries = (
  client,
  category,
  startAfter = 17, // Last entry id of previous category
  limit = 60
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryRosinWinners = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryEntry = (client, category, entryId) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entry: {
      category,
      entry_id: entryId,
    },
  })
}

export const queryVotes = (client, entryId, makerAddress) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    votes: {
      entry_id: entryId,
      maker_addr: makerAddress,
    },
  })
}

export const queryTallyVotes = (client, entryId, startAfter = undefined, limit = undefined) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    tally_votes: {
      entry_id: entryId,
      start_after: startAfter,
      limit,
    },
  })
}

export const vote = (
  client,
  sender,
  category,
  entryId,
  { look, smell, taste, postMelt }
) => {
  return client.execute(
    sender,
    VOTING_CONTRACT,
    {
      vote: {
        category,
        entry_id: entryId,
        votes: {
          look,
          smell,
          taste,
          post_melt: postMelt,
        },
      },
    },
    {
      amount: coins(10000, "ujunox"),
      gas: "10000",
    }
  )
}