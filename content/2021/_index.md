---
title: "JakartaOne 2021"
seo_title: "JakartaOne Live - December 7th, 2021 | Jakarta EE Software | Cloud Native"
headline: "JakartaOne Live Stream 2021"
date: 2018-04-05T15:50:25-04:00
hide_page_title: true
hide_sidebar: true
hide_breadcrumb: true
container: "container-fluid"
headline: "JakartaOne Livestream"
tagline: "December 7, 2021"
layout: "single"
---

<!-- Add registration using legacy CSS -->
{{< grid/section-container id="registration" containerClass="backdrop padding-top-40 padding-bottom-40" >}}
  {{< grid/div class="container" isMarkdown="false" >}}
    {{< events/registration year="2021" >}}
Thank You for making the third annual JakartaOne Livestream event a great success!

This milestone would not be possible without the collective efforts of a dedicated community.
    {{</ events/registration >}}
  {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Add agenda section -->
{{< grid/section-container class="alt" id="plan-of-the-day" containerClass="backdrop padding-bottom-40 padding-top-40" >}}
  {{< grid/div class="container" isMarkdown="false">}}
    {{< events/agenda year="2021" >}}
  {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Add speakers section -->
{{< grid/section-container id="speakers" class="speaker-container padding-bottom-40 padding-top-40 text-center">}}
  {{< grid/div class="padding-top-40" isMarkdown="false">}}
    {{< events/user_display year="2021" source="speakers" subpage="speakers" useCarousel="false" imageRoot="/images/speakers/" title="Speakers" headerClass="text-left" />}}
  {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Add user carousel for committee -->
{{< events/program-committee  year="2021"  source="committee" subpage="program-committee" useCarousel="false" >}}
We are proud to say that the sessions and keynotes at JakartaOne Livestream Event are chosen by an independent program committee made up of volunteers from the Jakarta EE and cloud native Java community!
{{</ events/program-committee >}}
