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
      <th>Theatre / Venue</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_productions = site.productions | sort: 'year' | reverse %}
    {% for production in sorted_productions %}
        <tr>
          <td>{{ production.year }}</td>
          <td>
            <a href="{{ production.url }}">
              {% if production.title %}
                {{ production.title }}
              {% else %}
                {{ production.url | remove: '.md' | remove: '/' }}
              {% endif %}
            </a>
          </td>
          <td>
            {% if production.details.Theatre and production.details.Venue %}
              <a href="/theatres/{{ production.details.Theatre | replace: " ", "_" }}">{{ production.details.Theatre }}</a> / 
              <a href="/venues/{{ production.details.Venue | replace: " ", "_" }}">{{ production.details.Venue }}</a>
            {% elsif production.details.Theatre %}
              <a href="/theatres/{{ production.details.Theatre | replace: " ", "_" }}">{{ production.details.Theatre }}</a>
            {% elsif production.details.Venue %}
              <a href="/venues/{{ production.details.Venue | replace: " ", "_" }}">{{ production.details.Venue }}</a>
            {% endif %}
          </td>
        </tr>
    {% endfor %}
  </tbody>
</table>