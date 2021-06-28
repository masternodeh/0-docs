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

### Mail format

_Example of a mail sent in case of a new ticket:_  
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


_Example of a mail sent in case of an escalated ticket:_  
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

### format description
{  
"message": "ticket" >> Always "ticket"  
"issueRef": "ZEH-105",  >> Unique identifier of the ticket
"creationDate": "28/06/2021 10:28:19",  >> Date and time of creation (Western Europe)
"dateFormat": "dd/MM/yyyy hh:mm:ss",  >> Format of the date
"issueType": "StuckTX",  >> Type of ticket (other types don't generate yet a ticket, like a bug report, UI improvment, etc)
"issueStatusID": "10020",  >> ID of the status 10020 = "New", 10022 = "Escalated to Discord"
"issueStatusLabel": "New",  >> Label of the status corresponding to the ID
"originChain": "Polygon",  >> Origin chain of the transfer
"destinationChain": "Avalanche",  >> Destination chain of the transfer  
"token": "zero",  >> Token transferred 
"txID": "https://polygonscan.com/tx/0x2858ef7bc5d2425ba51502e8524b018136c51a59c0f9857caefac884f102026d"  >> URL of the TX ID
}  

