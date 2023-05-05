---
title: All Theatres
layout: git-wiki-default
---
<h1>{{ page.title }}</h1>

{% assign all_theatres = '' | split: '' %}

{% for production in site.productions %}
  {% assign details = production.details %}
  {% for detail in details %}
    {% if detail[0] == 'Theatre' %}
      {% assign theatre = detail[1] %}
      {% assign all_theatres = all_theatres | push: theatre %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% assign unique_theatres = all_theatres | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Theatre</th>
      <th>Production</th>
    </tr>
  </thead>
  <tbody>
    {% for theatre in unique_theatres %}

      {% assign theatre_name = theatre | replace: "&", "and" | slugify %}
      {% assign theatre_url = "/theatres/" | append: theatre_name %}
      {% assign theatre_count = all_theatres | where_exp: "item", "item == theatre" | size %}
      <tr>
        <td><a href="{{ theatre_url }}">{{ theatre }}</a></td>
        <td>{{ theatre_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
