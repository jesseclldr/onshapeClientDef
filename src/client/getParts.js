// This is a method of OnshapeClient, see OnshapeClient.js

function getParts({
  documentId,
  workspaceId,
  includeFlatParts,
  includePropertyDefaults,
  linkDocumentId,
  withThumbnails,
}) {
  return this.sendRequest({
    documentId,
    method: 'get',
    query: {
      includeFlatParts,
      includePropertyDefaults,
      linkDocumentId,
      withThumbnails,
    },
    resource: 'parts',
    workspaceId,
  }).then(response => response.data)
}

module.exports = getParts