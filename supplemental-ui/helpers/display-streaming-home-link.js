'use strict'

module.exports = ({ data: { root } }) => {
  const pageUrl = root.page.url;

  return (!pageUrl.toLowerCase().includes("/streaming/index.html"));
};