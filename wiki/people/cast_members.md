---
title: All Cast Members
layout: git-wiki-default
---

<h1>{{ page.title }}</h1>

{% assign all_cast_members = '' | split: '' %}

{% for page in site.pages %}
  {% if page.layout == 'productions' %}
    {% assign cast = page.cast %}
    {% for character in cast %}
      {% assign cast_member_value = character[1] %}
      {% assign cast_members = cast_member_value | newline_to_br | strip | split: '<br />' %}
      {% for cast_member in cast_members %}
        {% assign cast_member_trimmed = cast_member | strip %}
        {% assign all_cast_members = all_cast_members | push: cast_member_trimmed %}
      {% endfor %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign unique_cast_members = all_cast_members | uniq | sort %}

  <table id="cast-members-table" class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Cast Member</th>
      <th>Productions</th>
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

<script>
  $(document).ready(function() {
    $('#cast-members-table').DataTable();
  });
</script>
