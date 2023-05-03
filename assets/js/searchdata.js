---
layout: null
is_wiki_page: false
---
{% if site.search_engine == "js" %}
var jsondata=[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "layout"   : "News",
      "year"     : "{{ post.year }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ post.url }}",
      "date"     : "{{ post.date | date_to_string }}",
      "content"  : {{ page.content | jsonify }},
      "response" : "<strong>News</strong> - {{ post.title | escape }} - {{ post.date | date: '%m-%d-%Y' }}",
      "alt" : "News - {{ post.title | escape }} - {{ post.date | date: '%m-%d-%Y' }}",
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
  ,
  {% for collection in site.collections %}
    {% for page in collection.docs %}
      {% assign title = page.title %}
      {% assign year = page.year %}
      {% case collection.label %}
        {% when 'people' %}
            {% assign layout = 'Person' %}
        {% when 'productions' %}
            {% assign layout = 'Production' %}
        {% when 'shows' %}
            {% assign layout = 'Show' %}
        {% when 'theatres' %}
            {% assign layout = 'Theatre' %}
        {% when 'venues' %}
            {% assign layout = 'Venue' %}
        {% else %}
            {% assign layout = '' %}
      {% endcase %}
      {% if title != nil and layout != '' %}
        {
          "title"    : "{{ title | escape }}",
          "layout"   : "{{ layout }}",
          "year"     : "{{ year }}",
          "category" : "{{ page.category }}",
          "tags"     : "{{ page.tags | join: ', ' }}",
          "url"      : "{{ page.url }}",
          "date"     : "{{ page.date }}",
          "content"  : {{ page.content | jsonify }},
          {% if layout == 'Production' %}
            "response" : "<strong>{{ layout }}</strong> - {{ year }} - {{ title }}",
            "alt" : "{{ layout }} - {{ title }} {{ year }}"
          {% else %}
            "response" : "<strong>{{ layout }}</strong> - {{ title }}",
            "alt" : "{{ layout }} - {{ title }}"
          {% endif %}
        } {% unless forloop.last and forloop.parentloop.last %},{% endunless %}
      {% endif %}
    {% endfor %}
  {% endfor %}
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{alt}">{response}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })
{% endif %}

