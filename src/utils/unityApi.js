function createAPIObject(w) {
  const APIObject = {

    //Закрывает Webview в приложении
    close: function() {
      if(window.Unity) window.Unity.call("close");
    }

  };

  APIObject.close = APIObject.close.bind(APIObject);

  return APIObject;
}

let api;

//Инициализация объекта API
(function Init(w) {
  if(!w.unityApi) {
    api = createAPIObject(w);
    w.unityApi = api;
  } else {
    api = w.unityApi;
  }
})(window);

export default {
  close: api.close,
};
