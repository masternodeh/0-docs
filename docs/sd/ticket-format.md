---
id: ticket-format
title: Mod community - Ticket format
sidebar_label: Mod community - Ticket format
hide_title: true
hide_table_of_contents: true
description: Mod community - Ticket format
keywords:
 - "ZERO Exchange"
 - "$ZERO"
 - "@OfficialZeroDEX"
image:  /static/avax-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Mail to dev team in the ticketing process

Mail is sent:
* when new ticket is created
* when a new ticket has been reviewed by a mod and escalated to the dev team

[Check this page](sd/servicedesk-info.md) for an overview of the flow.

### Format

Example of a mail sent in case of a new ticket:  
{  
"message": "ticket",  
"issueRef": "ZEH-105",  
"creationDate": "28/06/2021 10:28:19",  
"dateFormat": "dd/MM/yyyy hh:mm:ss",  
"issueType": "StuckTX",  
"issueStatusID": "10020",  
"issueStatusLabel": "New",  
"originChain": "Polygon",  
"destinationChain": "Avalanche",  
"token": "zero",  
"txID": "https://polygonscan.com/tx/0x2858ef7bc5d2425ba51502e8524b018136c51a59c0f9857caefac884f102026d"  
}  


Example of a mail sent in case of an escalated ticket:  
{  
"message": "ticket",  
"issueRef": "ZEH-104",  
"creationDate": "28/06/2021 10:27:07",  
"dateFormat": "dd/MM/yyyy hh:mm:ss",  
"issueType": "StuckTX",  
"issueStatusID": "10022",  
"issueStatusLabel": "Escalated to Discord",  
"originChain": "BSC",  
"destinationChain": "Avalanche",  
"token": "zero",  
"txID": "https://bscscan.com/tx/0x448a01841d04cbaebeb9ea2bbb032092c25b79789c47d5491cb43bc18e78d5de"  
}  
