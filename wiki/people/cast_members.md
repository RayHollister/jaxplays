---
title: All Cast Members
---

<h1>{{ page.title }}</h1>

{% assign all_cast_members = '' | split: '' %}

{% for page in site.pages %}
  {% if page.layout == 'shows' %}
    {% assign cast = page.cast %}
    {% for character in cast %}
      {% assign cast_member = character[1] %}
      {% assign all_cast_members = all_cast_members | push: cast_member %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign unique_cast_members = all_cast_members | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Cast Member</th>
      <th>Shows</th>
    </tr>
  </thead>
  <tbody>
    {% for cast_member in unique_cast_members %}
      {% assign cast_member_count = all_cast_members | where_exp: "item", "item == cast_member" | size %}
      {% assign cast_member_link = cast_member | replace: " ", "_" %}
      <tr>
        <td><a href="/{{ cast_member_link }}">{{ cast_member }}</a></td>
        <td>{{ cast_member_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
