'use strict'

module.exports = ({ data: { root } }) => {
  const pagePathSegments = root.page.url.split("/");
  return "../".repeat(pagePathSegments.length - 2).slice(0, -1);
}