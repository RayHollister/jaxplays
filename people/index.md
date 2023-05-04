---
title: All People
layout: git-wiki-default
---

<h1>{{ page.title }}</h1>

{% assign all_cast_members = '' | split: '' %}
{% assign all_crew_members = '' | split: '' %}
{% assign all_orchestra_members = '' | split: '' %}
{% assign all_understudy_members = '' | split: '' %}
{% assign all_people = site.people %}

{% for production in site.productions %}
{% for role in production.cast %}
{% assign member_value = role[1] %}
{% assign members = member_value | newline_to_br | strip | split: '<br />' %}
{% for member in members %}
{% assign member_trimmed = member | strip | replace: ".", "" %}
{% assign canonical_name = member_trimmed %}

    {% for person in all_people %}
      {% if person.redirect_from %}
        {% for redirect_url in person.redirect_from %}
          {% assign redirect_name = redirect_url | remove: "/people/" | replace: "_", " " | replace: ".", "" %}
          {% if redirect_name == member_trimmed %}
            {% assign canonical_name = person.title %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}

    {% assign all_cast_members = all_cast_members | push: canonical_name %}

{% endfor %}
{% endfor %}

{% for role in production.crew %}
{% assign member_value = role[1] %}
{% assign members = member_value | newline_to_br | strip | split: '<br />' %}
{% for member in members %}
{% assign member_trimmed = member | strip | replace: ".", "" %}
{% assign canonical_name = member_trimmed %}

    {% for person in all_people %}
      {% if person.redirect_from %}
        {% for redirect_url in person.redirect_from %}
          {% assign redirect_name = redirect_url | remove: "/people/" | replace: "_", " " | replace: ".", "" %}
          {% if redirect_name == member_trimmed %}
            {% assign canonical_name = person.title %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}

    {% assign all_crew_members = all_crew_members | push: canonical_name %}

{% endfor %}
{% endfor %}

{% for role in production.orchestra %}
{% assign member_value = role[1] %}
{% assign members = member_value | newline_to_br | strip | split: '<br />' %}
{% for member in members %}
{% assign member_trimmed = member | strip | replace: ".", "" %}
{% assign canonical_name = member_trimmed %}

    {% for person in all_people %}
      {% if person.redirect_from %}
        {% for redirect_url in person.redirect_from %}
          {% assign redirect_name = redirect_url | remove: "/people/" | replace: "_", " " | replace: ".", "" %}
          {% if redirect_name == member_trimmed %}
            {% assign canonical_name = person.title %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}

    {% assign all_orchestra_members = all_orchestra_members | push: canonical_name %}

{% endfor %}
{% endfor %}

{% for role in production.understudies %}
{% assign member_value = role[1] %}
{% assign members = member_value | newline_to_br | strip | split: '<br />' %}
{% for member in members %}
{% assign member_trimmed = member | strip | replace: ".", "" %}
{% assign canonical_name = member_trimmed %}

    {% for person in all_people %}
      {% if person.redirect_from %}
        {% for redirect_url in person.redirect_from %}
          {% assign redirect_name = redirect_url | remove: "/people/" | replace: "_", " " | replace: ".", "" %}
          {% if redirect_name == member_trimmed %}
            {% assign canonical_name = person.title %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}

    {% assign all_understudy_members = all_understudy_members | push: canonical_name %}

{% endfor %}
{% endfor %}
{% endfor %}

{% assign all_people_in_roles = all_cast_members | concat: all_crew_members | concat: all_orchestra_members | concat: all_understudy_members | uniq | sort %}

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th class="cast">Cast</th>
      <th class="understudy">Understudy</th>
      <th class="crew">Crew</th>
      <th class="orchestra">Orchestra</th>
    </tr>
  </thead>
  <tbody>
    {% for person in all_people_in_roles %}
      {% assign cast_count = all_cast_members | where_exp: "item", "item == person" | size %}
      {% assign crew_count = all_crew_members | where_exp: "item", "item == person" | size %}
      {% assign orchestra_count = all_orchestra_members | where_exp: "item", "item == person" | size %}
      {% assign understudy_count = all_understudy_members | where_exp: "item", "item == person" | size %}
      {% assign person_link = person | replace: " ", "_" %}
      <tr>
        <td>
          <a href="/people/{{ person_link  | replace: ".", "" }}">{{ person }}</a>
        </td>
        <td class="cast">{{ cast_count }}</td>
        <td class="undestudy">{{ understudy_count }}</td>
        <td class="crew">{{ crew_count }}</td>
        <td class="orchestra">{{ orchestra_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
