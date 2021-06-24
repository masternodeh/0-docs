---
id: servicedesk-guide
title: Mod community - Service desk guide
sidebar_label: Mod community - Service desk guide
hide_title: true
hide_table_of_contents: true
description: Mod community - Service desk guide
keywords:
 - "ZERO Exchange"
 - "$ZERO"
 - "@OfficialZeroDEX"
image:  /static/avax-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

This page describes how to use the ticketing system:
* Type of tickets
* Edition of ticket states
* Manage ticket queues


## 1. Ticket types and workflow 

### 1.1 Ticket types and categories

There are 4 types of tickets configured and grouped under two categories.  Each ticket has its specific fields (mandatory or optional) to be filled in by the user.  
The user has to fill in an email address to be able to register the ticket: System doesn't check if it's a fake one or not, ticket will be registered anyway.  

**Category "Incidents":**  
* Stuck transaction
* Bug report

Grouped under "Incidents" for the service desk agent (customer sees "Issue or bug registration").
 
**Category "Changes":**
* UI improvement
* Feature suggestion

Grouped under "Changes" for the service desk agent (customer sees "Improvement or feature suggestion").

*I'm using a free plan for this software, it seems I can't delete the other categories imposed on the interface, nor rename any of them to anything else.*


### 1.2 Tickets workflow

All the ticket types follow the same workflow, with the following states:
* "New": Ticket created, and no one (community mod or dev team) has yet acknowledged/processed it
* "Community mods": Ticket picked up by a community mod for 1st evaluation
* "Escalated to Discord": To trigger sending a mail notification to the dev team with failed cross chain details
* "Done": Ticket closed


The customer receives a mail after some state changes, but they won't see the exact status name like the service desk agent:
* For all ticket types except stuck transactions, customer will only see "New" and "Registered" as state
* For a stuck transaction, customer will see "New", "Registered" and "Closed"


### 1.3 Automation for stuck TX tickets not closed after 7 days

Idea is not to exchange/communicate information at the moment with the users through the ticketing system: They register their tickets and they have to go to the Telegram main chat if they want additional information.

Tickets regarding stuck transactions will be automatically closed after 7 days regardless of their state.  Assumption is by then, the issue has been resolved.

## 2. Configured queues for the service desk agents

Queues contains type of incidents or suggestions, filtered on their state for quick access and overview.


### 2.1 Category Incident

_I'm using a free plan for this software, it seems I can't delete/rename "Team priority" or disable the feature "Major Incidents", which we won't use for the moment._

There are separate queues for each type of ticket of this category (stuck transaction, bug report), filtered on their state.

**Queues:**
1.	 "New stuck transactions": New tickets registered by the customer, in state "New"
1.	"Community mods stuck transactions": New tickets acknowledged by the community mods and who changed the state to "Community mods" 
1.	"Discord mods stuck transactions": Tickets escalated by the community mods to the dev team, state changed to "Escalated to discord".  
1.	"Closed stuck transactions": Stuck transaction closed (changed to status "Done") manually or automatically by the system 7 days after ticket creation
1.	"New reported bug": New bug registered by the customer, in state "New"
1.	"Ongoing reported bugs: Bugs in state "Community mods" or "Escalated to Discord"
1.	"Closed reported bugs: Bugs in state "Done"


### 2.2 Category Changes

The 2 ticket types (UI improvement, feature suggestion) are in the same queues, only being filtered on their state.
**Queues:**
1. "New UI improvement/feature suggestions": Tickets in state "New"
1. "Ongoing UI improvement/features suggestions": Tickets in state "Community mods" or "Escalated to "Discord"
1. "Closed/registered UI improvement/features suggestions": Tickets in state "Done"


## 3. Work process for the service desk


### 3.1 Stuck transaction ticket

1. Check the queue "New stuck transactions"  

2. List of stuck transactions in status "New", not processed by anyone: Columns inform about type of incident (in this case, only stuck transactions, identified with its specific icon), creation date, cross-chain direction, reporter (= email entered by the customer), state, etc.

Clicking on the Key or Summary opens the ticket details:  

3.	You can check the stuck TX ID, cross-chain direction, etc information as entered by the user.  Change the state to "Community mods" (top right)  so that another mod doesn't look at the same ticket at the same time thinking that no one else has/is looking at it.

4.	When the state is changed to "Community mods", the ticket is moved automatically to the queue "Community mod stuck transactions"

5.	Closing the ticket: In the queues "Community mods" change the state to "Done" manually if you had a contact with the user who confirmed that the issue was resolved.  Or wait for the system to close it automatically 7 days after ticket creation regardless of its state.



### 3.1 Bug report ticket

Queues 5 > 7:  

Same state and workflow as for stuck transactions, except:
*	More relaxed follow-up: After you have decided what to do with the ticket (inform in Discord or not for example), change the state to "Done".  User will only see "New" and "Registered" as states of a bug report


## 3. UI improvement or feature request ticket

1. Click on "Back to project" to come back to the main page:  

2. Go to "Changes":  

3. 3 queues, -the working process is the same as for bug report tickets:  

