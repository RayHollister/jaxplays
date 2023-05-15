---
title: All Productions
layout: git-wiki-default
---
<div class="container-lg">
  <h1>{{ page.title }}</h1>
  {% assign sorted_productions = site.productions | sort: 'year' | reverse %}
  {% for production in sorted_productions %}
    <div class="row mb-2 productions align-items-center p-2">
      <div class="col-lg-2 col-2 production_poster">
        {% assign image = production.image %}
        {% if image == nil %}
          {% for show in site.shows %}
            {% if show.title == production.title %}
              {% assign image = show.image %}
            {% endif %}
          {% endfor %}
        {% endif %}
        {% if image %}
          <img src="{{ image | prepend: '/wiki/media/posters/' }}" alt="{{ production.title }}" class="img-fluid">
        {% else %}
          <img src="/wiki/media/default/production_poster.png" alt="Default Production Image" class="img-fluid">
        {% endif %}
      </div>
      <div class="col-lg-10 col-10">
        <div class="row">
          <div class="col-lg-11 col-12">
            <div class="d-flex flex-column justify-content-center h-100">
              <div class="production_title">
                <a href="{{ production.url }}" class="text-truncate">
                  {% if production.title %}
                    {{ production.title }}
                  {% else %}
                    {{ production.url | remove: '.md' | remove: '/' }}
                  {% endif %}
                </a>
              </div>
              <div class="text-truncate">
                {% if production.details.Theatre %}
                  {{ production.details.Theatre }}
                {% endif %}
              </div>
              <div class="text-truncate">
                {% if production.details.Venue %}
                  {{ production.details.Venue }}
                {% endif %}
              </div>
            </div>
          </div>
          <div class="col-lg-1 col-12 text-lg-right text-left">{{ production.year }}</div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<script>
$(document).ready(function() {
  $(".productions").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });
});
</script>