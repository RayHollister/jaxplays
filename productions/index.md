---
title: All Productions
layout: git-wiki-default
---

<div class="container-lg">
  <h1>{{ page.title }}</h1>
  <!-- Filter input -->
  <input class="form-control mb-3" id="productionFilter" type="text" placeholder="Search productions...">
  <!-- Productions -->
  {% assign sorted_productions = site.productions | sort: 'year' | reverse %}
  {% assign grouped_productions = sorted_productions | group_by: 'year' %}

    {% for year_group in grouped_productions %}
    {% assign yearly_productions = year_group.items | sort: 'opening_date' | reverse %}
      {% for production in yearly_productions %}
        <div class="row mb-2 productions align-items-center p-2" data-production-title="{{ production.title | downcase }}">
        <div class="col-lg-1 col-1 production_poster">
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
        <div class="col">
          <div class="row">
            <div class="col-lg-9 col-12">
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
            <div class="col-lg-3 col-12 text-lg-end"> 
              {% if production.opening_date and production.closing_date %}
                {{ production.opening_date | date: "%B %e" }} &mdash; {{ production.closing_date | date: "%B %e, %Y" }}
              {% elsif production.opening_date %}
                {% if production.opening_date.size == 7 %}
                  {{ production.opening_date | append: "-01" | date: "%B %Y" }}
                {% else %}
                  {{ production.opening_date | date: "%B %e, %Y" }}
                {% endif %}
              {% else %}
                {{ production.year }}
              {% endif %}
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  {% endfor %}
</div>

<script>
$(document).ready(function() {
  // Click event for productions
  $(".productions").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  // Filter function for productions
  $("#productionFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".productions").filter(function() {
      $(this).toggle($(this).data('production-title').indexOf(value) > -1)
    });
  });
});
</script>
