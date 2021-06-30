---
id: prop003
title: Proposal 3 - By Prometheus Zeus
sidebar_label: Ion - Proposal 3
hide_title: true
hide_table_of_contents: true
description: Proposal 3 - By Prometheus Zeus
keywords:
 - "Osmosis"
 - "Ion"
 
image:  /static/eth-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
Picking up the idea of Michael Barb, I tried to plug it together with my idea. 
:::

## Proposal

# Recap 
The recently launched OSMOSIS DEX brings some new functions to the community which haven’t been available on a DEX before. 
One of this functions is, that by governance proposal the community can decide what pools will be incentivized and which will not. 

# Potential Issues 
 1. if a new proposal comes up, people would maybe vote against it, if the is negative for their own benefits
 1. if some whals decide to incentivize a pool, they can maybe reallocate incentives for their own benefit (e.g. current Regen proposal, which ask for 12% of 45%) 
 1. it could be possible that every second day a new proposal comes up which will change recent made decision quickly  

# Basic Idea
The team should develop a key performance indicator (KPI) called Healthy-Liquidity-Indicator (HLI). This KPI shall indicate if a pool has a healthy liquidity or if more liquidity is needed. 
The KPI should be measured by transaction volume flowing thru the pool and total liquidity stored in the pool in an average of 5 (?) days and be cleaned by one-time incidents (e.g. single large orders). Something the team and devs need to work out, i am not a expert in such things. 

 * IF HLI is greater „1“ than a pool has a healthy liquidity and no additional incentives are needed
 * IF HLI is below „1“ than the pool need to get a incentive out of the 45%

# Outcome 
If a pool will receive Incentives it is attractive for people to add liquidity —> the pool will go up to HLI = 1 —> incentives stop

# Restriction
 * In order to avoid, that people will withdraw the liquidity from the pool immedeatly once the incentive stops, i recommend that such boost incentives will only paid to liquidity providers pooling for 7 or more days. 
 * In order to avoid that such incentives will be attached to small pools, only pools with a liquidity of greater 500.000$ (?) for 5 (?) days can receive such boost incentives.   
 * in order to avoid that a incentive will be paid to a pool with HLI greater one, i recommend that the incentive stops if HLI was 5 (?) days above 1
 * in order to avoid that a pool will receive immediately a incentive such incentives can earliest attached to the pool if the pool was 5 (?) days below HLI = 1 and hat 500k$ liquidity for 5 days.

How to incetivice (split of rewards are do discussed) 
 * 22% of the 45% (?) will be attached to all 22.000 ION. That would give each ION a 0,001% Boost function. 
 * In order to boost a Pool the ION holder can attach (that means not liquidity adding)  ION (not necessarily 1 ION, could also be 0.34 ION) to a pool. 
 * If we take for example 22% of the 45%, each full ION will have a boost function of 0.001%, shared in 0.00098% for LP Rewards and 0.00002% for the ION holders who attached ION to the pool. 
 * That pool is now ionized and receives additional rewards (e.g. if 2.34 IONs are attached to the pool, the pool receives 0.00234 minus ION holder Bonus as reward)

In order to avid ION attachments flipping around every day, such a attached IONs shall be attached at least for 3 (?) days and such attached ION can not be sold. 
Keep in mind, attaching a ION to a pool does to mean staking or adding liquidity! Its simply bounded to the pool and adds the rewards.

If not all IONS are attached to pools in order to boost rewards, the left rewards can be
 * distributed to all pools equaly
 * be added to the attached IONs 
 * added to the share of gove voted pools (if we not decide that 45% will be attached to the Ionizing system)
 * collected for any other thing 

Pros for such a structure
 * the Rewards will help to increase liquitity to unhealthy pools.
 * everybody can boost pool which apply to the rules above by attaching IONs
 * if a pool is health, no more rewards will be send to the LP holder, ION holders can not over-reward a pool
 * no whales can use their power to gain more rewards than the small investors. 

The remaining 23% (?) will be set by Gov proposal.



















































