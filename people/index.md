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
{% assign members = role[1] %}
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
{% assign members = role[1] %}
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
{% assign members = role[1] %}
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
{% assign members = role[1] %}
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

<table class="all_people_table">
  <thead>
    <tr>
      <th>Name</th>
      <th class="cast hide_on_mobile">Cast</th>
      <th class="understudy hide_on_mobile">Understudy</th>
      <th class="crew hide_on_mobile">Crew</th>
      <th class="orchestra hide_on_mobile">Orchestra</th>
      <th class="total">Total</th>
    </tr>
  </thead>
  <tbody>
    {% for person in all_people_in_roles %}
      {% assign cast_count = all_cast_members | where_exp: "item", "item == person" | size %}
      {% assign crew_count = all_crew_members | where_exp: "item", "item == person" | size %}
      {% assign orchestra_count = all_orchestra_members | where_exp: "item", "item == person" | size %}
      {% assign understudy_count = all_understudy_members | where_exp: "item", "item == person" | size %}
      {% assign person_link = person | replace: "_", "-" | replace: " ", "-" | replace: "&", "and" | downcase %}
      {% assign total_count = cast_count | plus: crew_count | plus: orchestra_count | plus: understudy_count %}
      <tr>
        <td>
          <a href="/people/{{ person_link  | replace: ".", "" }}">{{ person }}</a>
        </td>
        <td class="cast hide_on_mobile">{{ cast_count }}</td>
        <td class="understudy hide_on_mobile">{{ understudy_count }}</td>
        <td class="crew hide_on_mobile">{{ crew_count }}</td>
        <td class="orchestra hide_on_mobile">{{ orchestra_count }}</td>
        <td class="total">{{ total_count }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
