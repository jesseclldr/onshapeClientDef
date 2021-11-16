// This is a method of OnshapeClient, see OnshapeClient.js

function createDocument(ownerEmail) {
  const data = {
    "description": "string",
    "isEmptyContent": true,
    "isPublic": true,
    "name": "string",
    "notRevisionManaged": true,
    "ownerEmail": ownerEmail,

     }
  return this.sendRequest({
    data,
    method: 'post',
    query: {},
    resource: 'documents',
  }).then(response => response.data)
}

module.exports = createDocument;