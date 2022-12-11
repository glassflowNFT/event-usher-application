import { checkMembership } from "./checkMembership"

export const queryJudge = async (client, address ) => {
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