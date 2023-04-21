---
title: All Shows
---
<ul>
{% for page in site.pages %}
  {% if page.layout == 'shows' %}
    <li><a href="{{ page.url }}">
      {% if page.title %}
        {{ page.title }}
      {% else %}
        {{ page.url | remove: '.md' | remove: '/' }}
      {% endif %}
    </a></li>
  {% endif %}
{% endfor %}
</ul>
