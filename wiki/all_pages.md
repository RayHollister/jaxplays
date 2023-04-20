---
title: All Pages
---
<h1>{{ page.title }}</h1>
<p>This is a list of every page on the JaxPlays wiki.</p>
<ul>
{% assign sorted_pages = site.pages | sort: 'title' %}
{% for page in sorted_pages %}
  <li><a href="{{ page.url }}">
    {% if page.title %}
      {{ page.title }}
    {% else %}
      {{ page.url | remove: '.md' | remove: '/' }}
    {% endif %}
  </a></li>
{% endfor %}
</ul>
