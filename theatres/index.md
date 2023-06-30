---
title: All Theatres
layout: git-wiki-default
---

<h1>{{ page.title }}</h1>

Welcome to your definitive guide to theatres in Jacksonville, Florida! Whether you're an ardent fan of the performing arts, searching for quality entertainment options in Jacksonville, or planning a special night out, our comprehensive list of Jacksonville theatres is here to assist you. We cover everything from high-energy Broadway plays and musicals right here in our city, to intimate community theatre performances. Discover drama and theatre in Jacksonville like never before, with details about the most engaging local playhouses and stunning concert venues. Don't miss out on the fantastic performances happening at Jacksonville's theatre venues, from musicals that will have you humming along, to drama that will leave you on the edge of your seat.

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
        <tr class="theatres">
          <td><a href="{{ theatre_url }}">{{ theatre }}</a></td>
          <td>{{ theatre_count }}</td>
        </tr>
    {% endfor %}

  </tbody>
</table>
