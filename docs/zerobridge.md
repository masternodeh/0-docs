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

## ZeroBridge

The brigde enables to cross tokens from one chain to the other, bridge is connected to these chains:
* Currently:  
  * Ethereum
  * Avalanche
  * BSC
  * Polygon (Matic)
* Done, waiting for the parachains to go live:  
  * Kusama/DOT


### Which tokens can be cross chained?

* ZERO, as it is native and connected to all chains
* For the tokens, it will depends on their availabilities on both pair of chains selected to cross chain

Some FAQs to consult:
* [Tokens traded on the Zero Exchange can be traded on other exchanges as well?](faq/faq006.md), explains also how to cross chain tokens not supported by the Zero Exchange
* [Why are some of the tokens named "zXXX"](faq/faq005.md)

### How to cross chain?

Digital Asset News did a specific video on the Zero Exchange and the team showed how to cross chain: [How to cross chain](https://youtu.be/lGVNDuotddM?t=1164)  
There is also [this FAQ](faq/faq023.md) describing how to do it.

### Cross chain/bridging fees

Fees depends on which chain tokens are bridged from:
* From Polygon to another chain: 0.55 MATIC
* From BSC to another chain: 0.014 BNB
* From Avax to another chain: 0.67 AVAX
* From Ethereum to another chain: 0.056 ETH

Fees are paid in the token you bridge from.  If for example, you bridge tokens from the Avalanche to the Polygon chain, the transaction will be paid in AVAX.  
When a cross chain is done to a chain and you don't have tokens on that chain to do some transactions, the bridge will drop some for a few trades: [Check this official Medium article for the exact rules](https://medium.com/@OfficialZeroDex/improving-the-user-experience-sending-cross-chain-made-easier-f3b4aaf2a0b6) _(Note: Polygon is not mentionned in the article, works the same.)_

#### MetaMask gas settings
When cross chaining, it's important to set the correct gas settings (especially when crossing from the Ethereum chain): Check the settings in this [gas settings guide](https://0-exchange.gitbook.io/0-exchange-docs/pinned/transaction-fails) 


