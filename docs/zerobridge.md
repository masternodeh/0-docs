---
id: zerobridge
title: Community content - ZeroBridge
sidebar_label: ZeroBridge
hide_title: true
hide_table_of_contents: true
description: Community content - ZeroBridge
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

The bridge enables to cross tokens from one chain to the other, bridge is connected to these chains:
* Currently:  
  * Ethereum
  * Avalanche
  * BSC
  * Polygon (Matic)
* Done, waiting for the parachains to go live:  
  * Kusama/DOT


### Which tokens can be cross chained?

* ZERO, as it is native and connected to all chains
* For the other tokens, it will depends on their availabilities on the chains selected to cross chain

**Some FAQs:**
* [Trading tokens with other DEXes / sending stable coins from one chain to another](faq/faq006.md)
* [How to cross chain](faq/faq023.md)
  * And Digital Asset News did a [live Youtube session on Zero Exchange](https://youtu.be/lGVNDuotddM?t=1164) and the team showed how to cross chain
* [No liquidity to swap "zXXX" tokens after a cross chain](faq/faq026.md)
* [Why are some of the tokens named "zXXX"](faq/faq005.md)
* [Role of relayers in the bridge operation + partners](faq/faq028.md)
* [Register a ticket](sd/sd001.md) in case of a stuck transaction 
  

### Cross chain/bridging fees

Fees depends on which chain tokens are bridged from:
* From Polygon to another chain: 25.00 MATIC
* From BSC to another chain: 0.07 BNB
* From Avax to another chain: 2.00 AVAX
* From Ethereum to another chain: 0.056 ETH

Fees are paid in the token you bridge from.  If for example, you bridge tokens from the Avalanche to the Polygon chain, the transaction will be paid in AVAX.  
The Zero Exchange has foreseen a goodie for the bridge users: When you do a cross chain for the first time to a chain, you will receive a portion of BNB/AVAX/MATIC (depending on which chain you cross to) for a few trades on the crossed chain.  To be safe, convert then a part of your crossed chain tokens to BNB/AVAX/MATIC as to have a reserve to pay for more transaction fees.  
[Check this official Medium article for the exact rules](https://medium.com/@OfficialZeroDex/improving-the-user-experience-sending-cross-chain-made-easier-f3b4aaf2a0b6) _(Note: Polygon is not mentionned in the article, works the same.)_

#### MetaMask gas settings
When cross chaining, it's important to set the correct gas settings (especially when crossing from the Ethereum chain): Check the settings in this [gas settings guide](https://0-exchange.gitbook.io/0-exchange-docs/pinned/transaction-fails) 


### Principles of cross chaining

#### Same wallet

A cross chain always happens from the same origin and destination wallet address:  Tokens leave a chain and arrive on another chain, still inside the same wallet.  

<img alt="Picture" src={useBaseUrl('/img/zerobridge-1-1.jpg')} />


#### Locking, minting, burning

Fees are paid in the origin chain gas token.  

Moving an asset from its native chain to another chain involves a locking and minting mechanism:  

<img alt="Picture" src={useBaseUrl('/img/zerobridge-2.jpg')} />

Moving an asset back to its native chain from another chain involves a burning and unlocking mechanism:  

<img alt="Picture" src={useBaseUrl('/img/zerobridge-3.jpg')} />

#### Relayers

Relayers are like the guardians of the bridge and make sure that the transaction is processed exactly as stated (number of tokens minted/burned/locked/unlocked) and to the correct destination wallet.

A bridge transaction goes through 6 relayers and a vote happens: Threshold is for the moment 4 out of 6 relayers, they have to cast the same vote to approve the transaction going through.

<img alt="Picture" src={useBaseUrl('/img/zerobridge-4.jpg')} />

A few extracts from posts by the project leader in [this FAQ about relayers](faq/faq028.md)
