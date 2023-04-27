---
title: All People
layout: git-wiki-default
---
<h1>{{ page.title }}</h1>

{% assign all_cast_members = '' | split: '' %}
{% assign all_crew_members = '' | split: '' %}
{% assign all_people = site.pages | where: "layout", "people" %}

{% for page in site.pages %}
  {% if page.layout == 'productions' %}
    {% assign cast = page.cast %}
    {% assign crew = page.crew %}

    {% for role in cast %}
      {% assign cast_member_value = role[1] %}
      {% assign cast_members = cast_member_value | newline_to_br | strip | split: '<br />' %}
      {% for cast_member in cast_members %}
        {% assign cast_member_trimmed = cast_member | strip %}
        {% assign canonical_name = cast_member_trimmed %}
        
        {% for person in all_people %}
          {% if person.redirect_from %}
            {% for redirect_url in person.redirect_from %}
              {% assign redirect_name = redirect_url | remove: "/people/" | replace: "_", " " %}
              {% if redirect_name == cast_member_trimmed %}
                {% assign canonical_name = person.title %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}

        {% assign all_cast_members = all_cast_members | push: canonical_name %}
      {% endfor %}
    {% endfor %}

    {% for role in crew %}
      {% assign crew_member_value = role[1] %}
      {% assign crew_members = crew_member_value | newline_to_br | strip | split: '<br />' %}
      {% for crew_member in crew_members %}
        {% assign crew_member_trimmed = crew_member | strip %}
        {% assign canonical_name = crew_member_trimmed %}
        
        {% for person in all_people %}
          {% if person.redirect_from %}
            {% for redirect_url in person.redirect_from %}
              {% assign redirect_name = redirect_url | remove: "/people/" | replace: "_", " " %}
              {% if redirect_name == crew_member_trimmed %}
                {% assign canonical_name = person.title %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}

        {% assign all_crew_members = all_crew_members | push: canonical_name %}
      {% endfor %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign all_people_in_cast_and_crew = all_cast_members | concat: all_crew_members | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Cast Credits</th>
      <th>Crew Credits</th>
    </tr>
  </thead>
  <tbody>
    {% for person in all_people_in_cast_and_crew %}
      {% assign cast_count = all_cast_members | where_exp: "item", "item == person" | size %}
      {% assign crew_count = all_crew_members | where_exp: "item", "item == person" | size %}
      {% assign person_link = person | replace: " ", "_" %}
      <tr>
        <td><a href="/people/{{ person_link  | replace: ".", "" }}">{{ person }}</a></td>
        <td>{{ cast_count }}</td>
        <td>{{ crew_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
