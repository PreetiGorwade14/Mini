// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CharityDonation {
    struct Campaign {
        uint256 campaignId;
        uint256 fundsRaised;
        uint256 balance;
        address payable initiatorAddress;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public totalCampaigns;

    event DonationReceived(uint256 campaignId, address donor, uint256 amount);

    constructor() {
        addCampaign(1, payable(0xA616e8a090e803273B01C5b61530F29E1aA1F394));
        addCampaign(2, payable(0xBE79a1Dac85e55C249c2222B3e548564e4B62dd7));
        addCampaign(3, payable(0x49708242551fD0593fE9dBB199B98771Bf3E49Aa));
        addCampaign(4, payable(0x2F503504536231dEc5Dec7c276B92af2199B1235));
    }

    function addCampaign(uint256 _campaignId, address payable _initiatorAddress) internal {
        campaigns[_campaignId] = Campaign({
            campaignId: _campaignId,
            fundsRaised: 0,
            balance: 0,
            initiatorAddress: _initiatorAddress
        });
        totalCampaigns++;
    }

    function donate(uint256 _campaignId) public payable {
        require(msg.value > 0, "Donation amount must be greater than zero.");
        require(campaigns[_campaignId].campaignId != 0, "Campaign does not exist.");

        Campaign storage campaign = campaigns[_campaignId];
        campaign.fundsRaised += msg.value;
        campaign.balance += msg.value;

        // Transfer funds to the initiator's wallet
        campaign.initiatorAddress.transfer(msg.value);

        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    function getCampaignDetails(uint256 _campaignId)
        public
        view
        returns (uint256, uint256, uint256, address)
    {
        Campaign memory campaign = campaigns[_campaignId];
        return (campaign.campaignId, campaign.fundsRaised, campaign.balance, campaign.initiatorAddress);
    }
}