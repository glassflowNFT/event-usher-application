import { checkMembership } from "./checkMembership"
import { coins } from "@cosmjs/stargate"

const VOTING_CONTRACT = "juno1ca4l2mrf26vh64q9cax4rjpgpcdsf57ff2dykty7e70k2zl4d0qs3wgmw0"

export const queryJudge = async (client, address ) => {
    return checkMembership(
            client,
            "juno1ndrpu3xuyk92zj7z95pc20fnp0hryyu8thy8d94q4gl2xj7766xsj90n8g",
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

export const queryTallyVotes = (client, entryId, startAfter, limit) => {
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
