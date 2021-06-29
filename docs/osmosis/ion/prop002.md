---
id: prop002
title: Proposal 2 - By DK
sidebar_label: Ion - Proposal 2
hide_title: true
hide_table_of_contents: true
description: Proposal 2 - By DK
keywords:
 - "Osmosis"
 - "Ion"
 
image:  /static/eth-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Utility for ION - By DK

Nothing is more important to an AMM protocol than its network security and the stability of its liquidity pools. 
ION’s scarcity and speculative use cases has currently made the coin soar around 200 ATOMS per token. 
Within these circumstances, ION holders are disincentivized to participate in liquidity pools and instead use the asset to swing trade with the natural rises and falls from the epoch reward schedule. 
This use case is antithetical to an AMM market which should incentivize its participants with sufficient rewards to provide liquidity. 
 

## Proposal

The community proposes the following base utility parameters for ION: 

1. ION tokens will have the power to draw rewards from the community pool and IONIZE the LP rewards of ANY liquidity pool (not just ION-based pairings) to which it is bonded to. 
THE APR boost applies to the whole pool, so other OSMOS users are free to provide liquidity and enjoy the boosted returns.
1. IONs bonded to pools will drain within (x) days. Depleted or depleting IONs can be recharged by exchanging OSMOS that will be burned from the supply. 
IONs bonded to smaller pools will deplete slower/have a greater number of transactions with the boost in rewards to incentivize liquidity in newer pools. 
Moreover, the fewer bonded IONs in a pool, the greater the boosted reward effects will be, further incentivizing ION bonders to boost newer and smaller pools. 
1. All IONs bonded to a pool will deplete and recharge at the same rate and anyone can exchange OSMOS to recharge the pool. 
Depleted IONs will recharge over a period of time, but users can donate OSMOS to recharge the bonded IONs and enable boosted rewards for everyone in the pool.

## Alternatively 

All IONs bonded to a pool will deplete and recharge at the same rate and anyone can exchange OSMOS to recharge the pool. 
In order to discourage freeriding, the cost of recharging IONs will be spread across all users in the LP. 
It is possible to remain in the pool without paying for the boost, but that user will not receive the enhanced rewards. 
Those who want to enjoy the rewards from the boosted pool must pay the Osmos burn fee in order to receive the IONIZED boost. 

The ION bonder will receive a personal (x.xx% KEEP THIS SMALL) APR boost in return for boosting the LP rewards of the pool for everyone. 
This personal APR boost increases with the amount of liquidity added into the pool by the ION bonder.

There is no cap to the number of IONs that can be bonded to any pool. Every additional ION that is bonded will increase the ION bonder’s personal APR additively.

When liquidity providers enter a new pool the entire pool's charge level does not change. 
To replenish the ION-charge, bonders can burn Osmos, or it will slowly recharge on its own. It depletes as trades occur or as time passes. 

To remove ION from the pool, the ION bonder must pay for a burn fee paid in OSMOS or wait a period of (14? days) after unbonding. 
ION bonders choosing to wait the 14 days will be able to receive LP rewards for the duration of the unbonding, same as any other unbonding on OSMOS. 
The returned ION will be the current market price of ION.

This value sharing model has several advantages: 

1. Different token communities should want to hoard ION and bond IONs because it will help their own token pool. Osmos will benefit in such an arrangement because users are incentivized to provide liquidity and pay the burn fee in order to capture greater rewards.  
1. ION attached to a pool recharges faster/deplete slower on smaller pools. This will incentivize smaller pools, which will help attract liquidity with its boosted APR rates. 
1. Using an OSMOS burn mechanism to replenish the ION-charge helps to counter the ever-growing release of new OSMOS after Epoch and decrease the FUD surrounding OSMOS’s supply.






















































