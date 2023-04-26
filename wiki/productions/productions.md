---
title: All Productions
---
<h1>{{ page.title }}</h1>

<ul>
{% for page in site.pages %}
  {% if page.layout == 'productions' %}
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
