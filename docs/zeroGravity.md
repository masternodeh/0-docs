---
id: zeroGravity
title: Zero Gravity launchpad
sidebar_label: ZeroGravity Launchpad
hide_title: true
hide_table_of_contents: true
description: Zero Gravity launchpad
keywords:
 - "ZERO Exchange"
 - "$ZERO"
 - "@OfficialZeroDEX"
 - "Zero Gravity"
image:  /static/avax-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Tabs
  defaultValue="general"
  values={[
    {label: 'General', value: 'general'},
    {label: 'How to qualify', value: 'qualify'},
    {label: 'Tiers', value: 'tiers'},
  ]}>  


  <TabItem value="general">
      Zero Gravity launchpad

      The zero Exchange has its own launchpad, [Zero Gravity](https://www.notion.so/IDO-Zero-Gravity-launchpad-cc3c4e7bd1c54a7195b1e9df2f16116b#975685f51f464b198d8130300fa7f423)
	  
      1. Allows great flexibility for the projects to choose the chain they want to launch their token on
      1. Sometimes, an IDO way require a KYC ("Know Your Customer") to make it to the whitelist to be able to participate in an IDO (typically, US or Canadian citizens are barred from entering such IDOs).  
	  1. The Zero exchange has found a way for citizens from barred countries to still benefit these IDOs. An automated market maker sells the allocation of the winners, who in turn will receive their share of the benefits without ever having received the IDO tokens.


      # Planned IDOs on Zero Zero Gravity

      * Date TBC, 2021: SENT (not started)
      * May 19th, 2021: GROW (snapshots started)
      * May 10th, 2021: WISB (finished)
      * May 7th, 2021: Wasder (finished)
  </TabItem>

  <TabItem value="qualify">
      ## How to qualify for an IDO?

      * By holding Zero in your wallet
      * Being in liquidity pools, some LP provide multipliers for the lottery tickets calculation
      It doesn't matter on which chain you are holding Zero or being in liquidity pools, the Zero exchange will compound per wallet all your assets across the chains to determine your tier level and the number of lottery tickets you earn.

      ## How to win allocation
      Depending on the IDO:
      * The tier system is not taking into account and just holding a minimum of Zero as required by that particular IDO is enough to be able to participate
      * The tier system is applied to win an allocation. Depending on the IDO, one or more allocations can be won per wallet.


      In function of your tier level:
      * You have a guaranteed allocation
      * You enter a lottery with a number of tickets calculated by the system (see the information in "Tiers")
      => The two are combined for the higher tiers: You have at least a guaranteed allocation and you enter the lottery to make a chance to earn more than one allocation.

  </TabItem>

  <TabItem value="tiers">
      Official description of the tier system in this [Medium article](https://www.notion.so/IDO-Zero-Gravity-launchpad-cc3c4e7bd1c54a7195b1e9df2f16116b#4e241f586fbb4eb68a462230601a699f)

      [Online calculator](https://codesandbox.io/s/cu4qr?file=/src/App.tsx) to check your tier level and number of tickets you will earn for the lottery.
      * Note: You have to input manually the number of Zero you hold, there is not a calculation yet based on the LP tokens.


      ## General overview
      ### Tier levels:
      * "Nebula"
      ** Holding minimum 5000 ZERO
      * "Red Giant": Guaranteed allocation
      ** Holding mininum 500.000 ZERO or equivalent in liquidity pools
      * "Super Nova": Several guaranteed allocations
      ** Holding 1 million ZERO or equivalent in liquidity pools

      ### Basic principles for the number of tickets calculation:
      * Each 5k zero gives one ticket for the lottery
      * Each 25k zero: Extra bonus ticket
      * Number of tickets calculated capped to 500k zero


      ### Participation in liquidity pools for ticket calculation:
      * Some liquidity pools benefits from a 2x multiplier
      * Please check the Medium article for the eligible liquidity pools and LP token values for the calculation
  </TabItem>  
</Tabs>    
