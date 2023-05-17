---
title: All People
layout: git-wiki-default
---

<div class="container-lg">
  <h1>{{ page.title }}</h1>

<!-- Filter input -->
<input class="form-control mb-3" id="peopleFilter" type="text" placeholder="Search people...">

<!-- People -->
{% for person in site.people %}
  {% assign person_link = person.title | replace: "_", "-" | replace: " ", "-" | replace: "&", "and" | downcase %}
  {% assign image = person.image %}
  {% if image == nil %}
    {% assign image = '/wiki/media/default/people_headshot.png' %}
  {% else %}
    {% assign image = image | prepend: '/wiki/media/headshots/' %}
  {% endif %}
  <div class="row mb-2 people align-items-center p-2">
    <div class="col-lg-2 col-2 headshots">
      <img src="{{ image }}" alt="{{ person.title }}" class="img-fluid">
    </div>
    <div class="col-lg-10 col-10 people_name">
      <a href="/people/{{ person_link  | replace: ".", "" }}">{{ person.title }}</a>
    </div>
  </div>
{% endfor %}

</div>

<script>
$(document).ready(function() {
  // Click event for people
  $(".people").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  // Filter function for people
  $("#peopleFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".people").filter(function() {
      $(this).toggle($(this).find(".people_name a").text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>
