---
title: Alert Tab
sidebar_label: Alert Tab
slug: alert-tab
---

The bar across the top is known as the alert bar or alert tab. It's used on the homepage and inside index pages. And it's been commonly used on both PAG and RTA as more of a content area, not just as traditional alerts. Two things must be done to publish updates:

### Activate the hook
The tab on all PAG/RTA sites is published using a [hook/element](/docs/hooks-elements). In the WP admin, navigate to *Appearance > Elements*, then find the Alert Tab hook. For the hook to be live, the Status needs to be Published and Visibility set to Public. Use that same workflow to deactivate or unpublish the hook.

### Update the content
Hooks are fine with standard HTML/CSS. Hooks can also run shortcodes and PHP, but you need to specify that capability with a checkbox. 

NOTE: Each hook also has a area on the admin page to set the display rules for where it appears. You can select placements for the hook to appear or not appear on individual pages/posts, specific page/post types, specific categories of pages/posts, etc. So for example: The alert tab for the PAG homepage will have just the homepage specified in the display rules.  Breadcrumbs also appear via hook and are set to appear on all pages except the calendar page and homepage. These rules should already be in place and shouldn't require any action if it's just a content update.


