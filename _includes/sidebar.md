`<div markdown="1" class="pb-docs__navbar">
  {% include search.html %}

  {% assign nav_sections = site.collections | sort:"order_number" %}
  {% for section in nav_sections %}
  <h2>{{section.title}}</h2>
  <ul>
    {% assign subsections = section.docs | sort:"order_number" %}
    {% for subsection in subsections %}
      <li class="pb-collapse" id="{{subsection.title}}-collapse">
        {% if subsection.content.size > 1 %}
          {% capture page_url %}
            {{"/docs" | append: page.url}}
          {% endcapture %}
          {% if page_url contains subsection.url %}
            {% assign collapse_class = "pb-docs__navbar__collapse__items pb-docs__navbar__collapse__items--active" %}
          {% else %}
            {% assign collapse_class = "pb-docs__navbar__collapse__items" %}
          {% endif %}
          <a class="pb-docs__navbar__item pb-docs__navbar__collapse__toggle" href="{{subsection.url}}">{{subsection.title}}</a>
          <ul markdown="1" class="{{collapse_class}}">
            {{subsection.content}}
          </ul>
        {% else %}
          <a class="pb-docs__navbar__item" href="{{subsection.url}}">{{subsection.title}}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>`
