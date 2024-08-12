module Oracles {
    use 0x1::Signer;
    use 0x1::Vector;

    // A struct to store oracle data
    struct OracleData {
        source: vector<u8>,
        value: u64,
    }

    public fun submit_data(
        oracle: &signer,
        source: vector<u8>,
        value: u64,
    ): OracleData {
        OracleData { source, value }
    }

    public fun get_data(data: &OracleData): u64 {
        data.value
    }
}
