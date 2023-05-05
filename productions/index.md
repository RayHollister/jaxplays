---
title: All Productions
layout: git-wiki-default
---
<h1>{{ page.title }}</h1>
<table>
  <thead>
    <tr>
      <th>Year</th>
      <th>Title</th>
      <th>Theatre</th>
      <th>Venue</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_productions = site.productions | sort: 'year' | reverse %}
    {% for production in sorted_productions %}
        <tr class="productions">
          <td class="year">{{ production.year }}</td>
          <td class="title">
            <a href="{{ production.url }}">
              {% if production.title %}
                {{ production.title }}
              {% else %}
                {{ production.url | remove: '.md' | remove: '/' }}
              {% endif %}
            </a>
          </td>
          <td class="theatre">
            {% if production.details.Theatre %}
              {% assign theatre_name = production.details.Theatre | replace: ".", "" | replace: "'", "" | replace: "_", "-" | replace: " ", "-" | replace: "&", "and" | downcase %}
              {% assign theatre_url = "/theatres/" | append: theatre_name | replace: "---", "-" %}
              <a href="{{ theatre_url }}">{{ production.details.Theatre }}</a>
            {% endif %}
          </td>
          <td class="venue">
            {% if production.details.Venue %}
              {% assign venue_name = production.details.Venue | replace: ".", "" | replace: "'", "" | replace: "_", "-" | replace: " ", "-" | replace: "&", "and" | downcase %}
              {% assign venue_url = "/venues/" | append: venue_name | replace: "---", "-" %}
              <a href="{{ venue_url }}">{{ production.details.Venue }}</a>
            {% endif %}
          </td>
        </tr>
    {% endfor %}
  </tbody>
</table>
