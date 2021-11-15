// /api/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails

// This is a method of OnshapeClient, see OnshapeClient.js

function getPartStudios({
    documentId,
    workspaceId,
    elementId,
    partId,
}) {
    return this.sendRequest({
        documentId,
        method: 'get',
        query: {
        },
        resource: 'partstudios',
        subresource: `e/${elementId}/bodydetails`,
        workspaceId,
    }).then(response => response.data)
}

module.exports = getPartStudios