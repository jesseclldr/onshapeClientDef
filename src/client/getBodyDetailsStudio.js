function getBodyDetailsStudios({
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
        subresource: `e/${elementId}/partid/${partId}/bodydetails`,
        workspaceId,
    }).then(response => response.data)
}

module.exports = getBodyDetailsStudios