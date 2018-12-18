<div markdown="1" class="pb-docs__navbar">
  {% include search.html %}

  {% assign nav_sections = site.collections | sort:"order_number" %}
  {% for section in nav_sections %}
  <h2>{{section.title}}</h2>
  <ul>
    {% assign subsections = section.docs | sort:"order_number" %}
    {% for subsection in subsections %}
      <li>
        {% if subsection.content.size > 1 %}
          <a class="pb-docs__navbar__item pb-docs__navbar__collapse__toggle" href="{{subsection.url}}">{{subsection.title}}</a>
          <ul markdown="1" class="pb-docs__navbar__collapse__items">
            {{subsection.content}}
          </ul>
        {% else %}
          <a class="pb-docs__navbar__item" href="{{subsection.url}}">{{subsection.title}}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
