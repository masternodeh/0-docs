---
id: zerobridge
title: ZeroBridge
sidebar_label: ZeroBridge
hide_title: true
hide_table_of_contents: true
description: ZeroBridge
keywords:
 - "ZERO Exchange"
 - "$ZERO"
 - "@OfficialZeroDEX"
image:  /static/avax-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# ZeroBridge

The brigde enables to cross tokens from one chain to the other, bridge is connected to these chains:
* Currently:  
  * Ethereum
  * Avalanche
  * BSC
* Done, waiting for the parachains to go live:  
  * Kusama/DOT
* May 19th:
  * Matic

## Which tokens can be cross chained?

* ZERO, as it is native and connected to all chains
* For the tokens, it will depends on their availabilities on both pair of chains selected to cross chain

## How to cross chain?

Digital Asset News did a specific video on the Zero Exchange and the team showed how to cross chain: [How to cross chain](https://youtu.be/lGVNDuotddM?t=1164)


## Cross chain/bridging fees

Fixed fee of around 2.99 AVAX regardless of the chains being bridged.  
The fee is paid in the native token (ETH, AVAX, BNB) of the chain where the tokens are bridged from.  
Example: If doing a BSC to Avalanche cross chain operation, the transactions fees will be paid in BNB.

_Why that much even when crossing from BSC to Avalanche for example where fees are cheap?  
For equality reason between bridge users, the bridge costs are spread evenly amongst all bridged chains: Once more chains are integrated, fees will go lower because the costs can be spread between more chains._

_Team is looking to change the bridge fee structure from a global fixed fee to fees depending on the chains involved in the cross chain operation. The Ethereum has a huge impact for instance, it will be decoupled price wise from the rest. [See medium article](https://medium.com/@OfficialZeroDex/the-zerobridge-f5cb06846fb5)._
