---
title: "JakartaOne 2024"
seo_title: "JakartaOne Live - 3 December 2024 | Jakarta EE Software | Cloud Native"
headline: "JakartaOne Livestream 2024"
hide_page_title: true
hide_sidebar: true
hide_breadcrumb: true
container: "container-fluid"
tagline: "3 December 2024"
layout: "single"
tagline_suffix: |
  <div class="display-flex gap-10 margin-bottom-30">
    <a class="btn btn-primary" href="https://www.crowdcast.io/c/jakartaone-120324">
      Register 
    </a>
  </div>
---

<!-- Registration section -->

{{< grid/section-container id="registration" containerClass="backdrop padding-top-40 padding-bottom-40" >}}
    {{< grid/div class="container" isMarkdown="false" >}}
        {{< events/registration year="2024" >}}
JakartaOne Livestream is a one day virtual conference for developers
and technical business leaders that brings insights into the current
state and future of Jakarta EE and related technologies focused on
developing cloud native technologies for enterprise Java
applications.
        {{</ events/registration >}}
    {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Agenda section -->
{{< grid/section-container class="alt" id="plan-of-the-day" containerClass="backdrop padding-y-40" >}}
  {{< grid/div class="container" isMarkdown="false" >}}
    {{< events/agenda year="2024" >}}
    <i class="fa fa-clock-o" aria-hidden="true"></i> Timings are shown in <em>Eastern Standard Time (EST)</em>
  {{</ grid/div >}}
{{</ grid/section-container >}}
{{< bootstrap/modal id="eclipsefdn-modal-event-session" >}}

<!-- Speakers section -->
{{< grid/section-container id="speakers" class="speaker-container padding-y-40 text-center" displayLearnMore="false" >}}
  {{< grid/div class="padding-top-40" isMarkdown="false">}}
    {{< events/user_display year="2024" source="speakers" subpage="speakers" useCarousel="true" imageRoot="./images/speakers/" title="Speakers" headerClass="text-left" />}}
  {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Committee section -->
{{< events/program-committee title="Program Committee" year="2024" source="committee" displayLearnMore="false" useCarousel="false" >}}
We are proud to say that this year, sessions at JakartaOne Livestream Event are
chosen by an independent program committee made up of volunteers from the
Jakarta EE and cloud native Java community!
{{</ events/program-committee >}}

<!-- Hosts section -->
{{< grid/div class="container" id="hosts" isMarkdown="false">}}
  {{< grid/section-container id="organizers" isMarkdown="false" >}}
    {{< events/user_display title="Hosts" year="2024" source="hosts" displayLearnMore="false" useCarousel="false" />}}
  {{</ grid/section-container >}}
{{</ grid/div >}}
