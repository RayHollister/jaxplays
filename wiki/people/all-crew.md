---
title: All Crew Members
---

{% assign all_crew = "" | split: "" %}

{% for p in site.pages %}
  {% if p.crew %}
    {% assign crew_items = p.crew | items %}
    {% for crew_item in crew_items %}
      {% assign key = crew_item[0] %}
      {% assign value = crew_item[1] %}
      {% capture formatted_crew_item %}{{ key }}: {{ value }}{% endcapture %}
      {% unless all_crew contains formatted_crew_item %}
        {% assign all_crew = all_crew | push: formatted_crew_item %}
      {% endunless %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% if all_crew.size > 0 %}
  <h2>All Crew Members:</h2>
  <ul>
  {% for crew_member in all_crew %}
    <li>{{ crew_member }}</li>
  {% endfor %}
  </ul>
{% else %}
  <p>No crew members found.</p>
{% endif %}
