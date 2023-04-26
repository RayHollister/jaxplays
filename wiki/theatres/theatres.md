---
title: All Theatres
---

<h1>{{ page.title }}</h1>

{% assign all_theatres = '' | split: '' %}

{% for page in site.pages %}
  {% if page.layout == 'productions' %}
    {% assign details = page.details %}
    {% for detail in details %}
      {% if detail[0] == 'Theatre' %}
        {% assign theatre = detail[1] %}
        {% assign all_theatres = all_theatres | push: theatre %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign unique_theatres = all_theatres | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Theatre</th>
      <th>productions</th>
    </tr>
  </thead>
  <tbody>
    {% for theatre in unique_theatres %}
      {% assign theatre_count = all_theatres | where_exp: "item", "item == theatre" | size %}
      <tr>
        <td><a href="/{{ theatre | replace: ' ', '_' }}">{{ theatre }}</a></td>
        <td>{{ theatre_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
