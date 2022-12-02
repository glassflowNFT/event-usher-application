export const voteSubmit = async (client, address, contract, msg, fee, memo ) => {
    client.execute(
        address,
        contract,
        msg,
        fee,
        memo
    )
}