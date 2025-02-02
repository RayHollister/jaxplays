---
title: All Venues
layout: git-wiki-default
---
<h1>{{ page.title }}</h1>

{% assign all_venues = '' | split: '' %}

{% for production in site.productions %}
  {% assign details = production.details %}
  {% for detail in details %}
    {% if detail[0] == 'Venue' %}
      {% assign venue = detail[1] %}
      {% assign all_venues = all_venues | push: venue %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% assign unique_venues = all_venues | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Venue</th>
      <th>Productions</th>
    </tr>
  </thead>
  <tbody>
    {% for venue in unique_venues %}
      {% assign venue_name = venue | replace: "&", "and" | slugify %}
      {% assign venue_url = "/venues/" | append: venue_name %}
      {% assign venue_count = all_venues | where_exp: "item", "item == venue" | size %}
      <tr class="venues">
        <td><a href="{{ venue_url }}">{{ venue }}</a></td>
        <td>{{ venue_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
