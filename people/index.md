---
title: All People
layout: git-wiki-default
---

<div class="container-lg">
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
{% assign member_trimmed = member | strip %}
{% assign canonical_name = member_trimmed %}

      {% for person in all_people %}
        {% if person.other_names %}
          {% for other_name in person.other_names %}
            {% assign other_name_processed = other_name | strip %}
            {% if other_name_processed == member_trimmed %}
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
{% assign member_trimmed = member | strip %}
{% assign canonical_name = member_trimmed %}

      {% for person in all_people %}
        {% if person.other_names %}
          {% for other_name in person.other_names %}
            {% assign other_name_processed = other_name | strip %}
            {% if other_name_processed == member_trimmed %}
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
{% assign member_trimmed = member | strip %}
{% assign canonical_name = member_trimmed %}

      {% for person in all_people %}
        {% if person.other_names %}
          {% for other_name in person.other_names %}
            {% assign other_name_processed = other_name | strip %}
            {% if other_name_processed == member_trimmed %}
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
{% assign member_trimmed = member | strip %}
{% assign canonical_name = member_trimmed %}

      {% for person in all_people %}
        {% if person.other_names %}
          {% for other_name in person.other_names %}
            {% assign other_name_processed = other_name | strip %}
            {% if other_name_processed == member_trimmed %}
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

<!-- Sticky header for desktop and tablet -->
<div class="row mb-2 peopleheader align-items-center p-2 position-sticky top-0 bg-white d-none d-lg-flex">
  <div class="col-lg-2 col-2 headshots"></div>
  <div class="col-lg-4 col-4 people_name">
    Names
  </div>
  <div class="col-lg-4 col-4">
    <div class="row">
      <div class="col-lg-3 col-3">Cast</div>
      <div class="col-lg-3 col-3">Understudy</div>
      <div class="col-lg-3 col-3">Crew</div>
      <div class="col-lg-3 col-3">Orchestra</div>
    </div>
  </div>
  <div class="col-lg-2 col-2">Total</div>
</div>

{% for person in all_people_in_roles %}
{% assign cast_count = all_cast_members | where_exp: "item", "item == person" | size %}
{% assign crew_count = all_crew_members | where_exp: "item", "item == person" | size %}
{% assign orchestra_count = all_orchestra_members | where_exp: "item", "item == person" | size %}
{% assign understudy_count = all_understudy_members | where_exp: "item", "item == person" | size %}
{% assign person_link = person | replace: "_", "-" | replace: " ", "-" | replace: "&", "and" | downcase %}
{% assign total_count = cast_count | plus: crew_count | plus: orchestra_count | plus: understudy_count %}

{% assign image = nil %}
{% for person_entry in site.people %}
  {% if person_entry.title == person %}
    {% assign image = person_entry.image %}
  {% endif %}
{% endfor %}
{% if image == nil %}
  {% assign image = '/wiki/media/default/people_headshot.png' %}
{% else %}
  {% assign image = image | prepend: '/wiki/media/headshots/' %}
{% endif %}
  <div class="row mb-2 people align-items-center p-2">
    <div class="col-lg-2 col-2 headshots">
      <img src="{{ image }}" alt="{{ person }}" class="img-fluid">
    </div>
    <div class="col-lg-4 col-8 people_name">
      <a href="/people/{{ person_link  | replace: ".", "" }}">{{ person }}</a>
    </div>
    <div class="col-lg-4 col-4 d-none d-lg-block">
      <div class="row">
        <div class="col-lg-3 col-3">{{ cast_count }}</div>
        <div class="col-lg-3 col-3">{{ understudy_count }}</div>
        <div class="col-lg-3 col-3">{{ crew_count }}</div>
        <div class="col-lg-3 col-3">{{ orchestra_count }}</div>
      </div>
    </div>
    <div class="col-lg-2 d-none d-lg-flex">{{ total_count }}</div>
  </div>

{% endfor %}

</div>

<script>
$(document).ready(function() {
  $(".people").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });
});
</script>
