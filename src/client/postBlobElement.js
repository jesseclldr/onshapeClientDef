function postBlobElement(
    documentId,
    workspaceId,
    mediaType,
    mediaFile


) {
    
    const data = {
        allowFaultyParts:false,
        createComposite:true,
        createDrawingIfPossible:true,
        encodeFilename:true,
        extractAssemblyHirerarchy:true,
        file:mediaFile,

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