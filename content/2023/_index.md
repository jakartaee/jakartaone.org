---
title: JakartaOne 2023
seo_title: JakartaOne Live - December 5, 2023 | Jakarta EE Software | Cloud Native
headline: JakartaOne Livestream 2023
hide_page_title: true
hide_sidebar: true
hide_breadcrumb: true
container: container-fluid
tagline: December 5, 2023
tagline_suffix: |
    <div class="display-flex gap-10 margin-bottom-30">
      <a class="btn btn-primary" href="https://www.crowdcast.io/c/jakartane-05122023">
        Register Now
      </a>
    </div>
layout: single
---

<!-- Registration section -->

{{< grid/section-container id="registration" containerClass="backdrop padding-top-40 padding-bottom-40" >}}
    {{< grid/div class="container" isMarkdown="false" >}}
        {{< events/registration year="2023" >}}
        {{</ events/registration >}}
    {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Agenda section -->
{{< grid/section-container class="alt" id="plan-of-the-day" containerClass="backdrop padding-bottom-40 padding-top-40" >}}
  {{< grid/div class="container" isMarkdown="false" >}}
    {{< events/agenda year="2023" >}}
  {{</ grid/div >}}
{{</ grid/section-container >}}
{{< bootstrap/modal id="eclipsefdn-modal-event-session" >}}

<!-- Speakers section -->
{{< grid/section-container id="speakers" class="speaker-container padding-bottom-40 padding-top-40 text-center">}}
  {{< grid/div class="padding-top-40" isMarkdown="false">}}
    {{< events/user_display year="2023" source="speakers" subpage="speakers" useCarousel="true" imageRoot="/images/speakers/" title="Speakers" headerClass="text-left" />}}
  {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Committee section -->
{{< events/program-committee title="Program Committee" year="2023" source="committee" subpage="program-committee" useCarousel="false" >}}
We are proud to say that this year, sessions at JakartaOne Livestream Event are chosen by an independent program committee made up of volunteers from the Jakarta EE and cloud native Java community!
{{</ events/program-committee >}}

<!-- Hosts section -->
{{< grid/div class="container" id="hosts" isMarkdown="false">}}
  {{< grid/section-container id="organizers" isMarkdown="false" >}}
    {{< events/user_display title="Hosts" year="2023" source="hosts" displayLearnMore="false" />}}
  {{</ grid/section-container >}}
{{</ grid/div >}}
