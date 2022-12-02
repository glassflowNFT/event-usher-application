import { checkMembership } from "./checkMembership"

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