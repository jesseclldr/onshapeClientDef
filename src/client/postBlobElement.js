function postBlobElement(
    documentId,
    workspaceId,
    mediaType,
    mediaFile


) {
    const file = new Buffer(mediaFile,'binary').toString('base64')
    const data = {
        allowFaultyParts:false,
        createComposite:true,
        createDrawingIfPossible:true,
        encodeFilename:true,
        extractAssemblyHirerarchy:true,
        file,

      }
    return this.sendRequest({
      workspaceId,
      documentId,
      data,
      method: 'post',
      query: {},
      resource: 'blobelements',
    }).then(response => response.data)
  }

  module.exports = postBlobElement