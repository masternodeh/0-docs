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

### 2.1 Category Incident


### 2.2 Category Changes


### 2.3 Tickets workflow


## 3. Work process for the service desk
