function createAPIObject(w) {
  const APIObject = {

    close: function() {
      if(window.Unity) window.Unity.call("close");
    }

  };

  APIObject.close = APIObject.close.bind(APIObject);

  return APIObject;
}

let api;
(function Init(w) {
  if(!w.sharpApi) {
    api = createAPIObject(w);
    w.sharpApi = api;
  } else {
    api = w.sharpApi;
  }
})(window);

export default {
  close: api.close,
};
