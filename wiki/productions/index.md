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
    {% for page in site.pages %}
      {% if page.layout == 'productions' %}
        <tr>
          <td>{{ page.year }}</td>
          <td>
            <a href="{{ page.url }}">
              {% if page.title %}
                {{ page.title }}
              {% else %}
                {{ page.url | remove: '.md' | remove: '/' }}
              {% endif %}
            </a>
          </td>
          <td>
            {% if page.details.Theatre and page.details.Venue %}
              <a href="/theatres/{{ page.details.Theatre | replace: " ", "_" }}">{{ page.details.Theatre }}</a> / 
              <a href="/venues/{{ page.details.Venue | replace: " ", "_" }}">{{ page.details.Venue }}</a>
            {% elsif page.details.Theatre %}
              <a href="/theatres/{{ page.details.Theatre | replace: " ", "_" }}">{{ page.details.Theatre }}</a>
            {% elsif page.details.Venue %}
              <a href="/venues/{{ page.details.Venue | replace: " ", "_" }}">{{ page.details.Venue }}</a>
            {% endif %}
          </td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
