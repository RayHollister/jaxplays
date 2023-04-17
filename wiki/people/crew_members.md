---
title: All Crew Members
---

<h1>{{ page.title }}</h1>

{% assign all_crew_members = '' | split: '' %}

{% for page in site.pages %}
  {% if page.layout == 'shows' %}
    {% assign crew = page.crew %}
    {% for role in crew %}
      {% assign crew_member = role[1] %}
      {% assign all_crew_members = all_crew_members | push: crew_member %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign unique_crew_members = all_crew_members | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Crew Member</th>
      <th>Shows</th>
    </tr>
  </thead>
  <tbody>
    {% for crew_member in unique_crew_members %}
      {% assign crew_member_count = all_crew_members | where_exp: "item", "item == crew_member" | size %}
      {% assign crew_member_link = crew_member | replace: " ", "_" %}
      <tr>
        <td><a href="/{{ crew_member_link }}">{{ crew_member }}</a></td>
        <td>{{ crew_member_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
