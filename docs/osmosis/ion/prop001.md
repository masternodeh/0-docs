---
id: prop001
title: Proposal 1 - By Michael Barb
sidebar_label: Ion - Proposal 1
hide_title: true
hide_table_of_contents: true
description: Proposal 1 - By Michael Barb
keywords:
 - "Osmosis"
 - "Ion"
 
image:  /static/eth-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Operation Ion - By Michael Barb
 
The purpose of this proposal is to try to work through a way to find utility through the Ion coin that will help the osmosis.zone network. 
It seems pretty clear that ION has developed a lot of interest within the Osmo network and attention needs to be given to try to make sure that interest can help grow the ecosystem as a whole. 
While the osmosis.zone is great in its current form, there are some issues that need to be dealt with. This proposal aims to find solutions to offset these. 

The following issues I see currently:

1. Automation of LP reward attributed to each pool
1. ION/OSMO pool APY incentive
1. Low staking %
1. Fairness of where the APYs should go

## Solutions

I would like to touch on lp reward fairness. The way the apy rewards waere distributed was initially by LP currently provided in those pools(or where more liquidity was needed). 
New arrangements are decided by governance proposals and will need to be constantly adjusted. 
Down the road, if we see a lot of liquidity/pools, we will need to find a way to readjust the Lp rewards payout. 
For example, If “SUNNYD” chain would like to join osmosis and set up a pool with their token and osmo. 
How do they get rewards? Currently, they would need to convince a large amount of osmosis holders to provide them with a portion lp rewards. 
This may prove to be very difficult depending on the chain. It doesn’t leave room for a free market where all can participates while also growing the network without needing to someone convince most people how rewards should go


## Proposal 

I propose first we readjust out how LP rewards are distributed to pools. 
This plan would be to keep the token distribution described in the medium the same, 45% to lp providers. 
The difference will be how those lp rewards are split up. I will propose that we split those rewards and attribute those rewards to pools that become Ionized. 
The way it will become ionized is an ion holder will bond(ionized) their ion to a pool/s of their choice. 
The higher the ionization, the higher the lp rewards to split.

This is a bit confusing so stay with me for a second:
 
1. 45% LP rewards split between 21,294? IONS = .0021% of apy rewards per ion holder, if all fully bonded to all pools. 
1. The ion LP rewards are only unlocked when ionized to a lp pool and  then shared between all lp providers. When someone tries to unbond their ion(or portion of it) from the pool, they must wait an recharge period before it can be attached to another

Depending on the amount of ions ionized to this specific pool will be the amount of the LP rewards that pool’s liquidity providers will receive, shared by all. 
This will incentivize ION holders to bond their ions to areas they provide liquidity so they can reap more reward, along with rest of providers.  
This also will make osmosis rewards free market and dynamic while locking up liquidity of osmo on the osmosis.zone. 
 

So as “sunnyd” chain joins osmosis, they and their holders can ionize an osmo and “sunnyd” coin with 2% of ions and ionize their pool with a portion of reward to attract more liquidity to their pools. They do this buy purchasing ion on open market from osmo/ion pool(see below) 

This will constantly adjust as ions are ionized to different pairs.  If AKT holders decide they need more rewards, they can simply buy and attach more ions.


Example Pools: 

1. Osmo/atom/AKT – ions bonded 15%, 15% lp rewards
1. Osmo/atom/dvpn – ions bonded 12%, 12% lp rewards
1. Osmo/atom/iris – ions bonded 10%, 10% lp rewards
1. ETC for each pool that has some ion bonded
 
The new payout at epoch would look like this for each pool
Bondinpool/totalbondinpools = lp rewards per pool. The pool splits = ((lp provided/lp in total pool) * lprewardperpool)) 
 
With this proposal we may run into a hiccup which is the rewards to the osmo/ion lp pool. We need constant liquidity here. This pool cannot be ionized in my proposal.
So I thought of something else… Currently we are paying 2% to that pool, I suggest we take the 2% out that we are currently given per the current allocation(initial governance) and throw it back into the total 45% for lp providers. 
Instead we take 2.5 5 or so % of the community pool to pay people for providing lp to the ion/osmo pool. We need to make sure there is always liquidity available for chains that want to increase lp reward to their specific pools. 
This will take a bit from the community pool but also give back some to LPer that it has in the current proposal set by governance. 

For the staking issue and UNKNOWN REAL USE CASE, This is the portion that is the biggest work in progress. I am proposing giving ION another purpose to help the network as a lending governance tool. 
So users will be able to deposit an asset to ION RESERVE and mint two assets in a pair that they will provide in liquidity. They will be minted by dollar amount in equal portions(or a ratio). 
Half of the collateral will be back by the deposits asset, the other half will be backed by staked derivatives that will be lp’d into a pool. For example, you will deposit 1 coin of AKT and mint 1 coin of pAKT AND equal amount by price of pOSMO(back by staking pool?) and then LP both into an ionized liquidity. 
Ion lending protocol will make sure the pairs in the LP pool match the assets in the ION reserve and staked amounts by guidance from an oracle. If the oracle finds there is price deviance outside of threshold, a new price updated is needed from the community. 
The protocol will see where adjustment need to be made and perform a rebasing/swapping hybrid described below:

## Rebasing mechanism


