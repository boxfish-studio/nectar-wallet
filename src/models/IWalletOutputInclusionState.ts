export interface IWalletOutputInclusionState {
    /**
     * Is the output solid.
     */
    solid?: boolean;
    /**
     * Is the output confirmed.
     */
    confirmed?: boolean;
    /**
     * Is the output rejected.
     */
    rejected?: boolean;
    /**
     * Is the output liked.
     */
    liked?: boolean;
    /**
     * Is the output conflicting.
     */
    conflicting?: boolean;
    /**
     * Is the output finalized.
     */
    finalized?: boolean;
    /**
     * Is the output preferred.
     */
    preferred?: boolean;
}
