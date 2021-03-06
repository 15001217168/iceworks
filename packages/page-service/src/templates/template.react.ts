const templateStr = `import React, { Component } from 'react';
<% for(var i = 0; i < blocks.length; i++) { -%>
import <%= blocks[i].className %> from '<%= blocks[i].relativePath -%>';
<% } -%>

export default function () {
  return (
    <div className="<%= pageName %>-page">
      <% for(var i = 0; i < blocks.length; i++){ -%>
      <% if (blocks[i].description) { %>{/* <%= blocks[i].description -%> */}<% } %>
      <<%= blocks[i].className -%> />
      <% } -%>
    </div>
  );
}
`
export default templateStr;