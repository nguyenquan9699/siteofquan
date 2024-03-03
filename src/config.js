function getApiUrl() {
    const domain = window.location.hostname;
    if (domain === 'siteofquan.click') {
      return 'https://3o0j7pyw9k.execute-api.ap-southeast-1.amazonaws.com/v1/';
    } else {
      return 'https://yphm005ac2.execute-api.ap-southeast-1.amazonaws.com/v1/';
    }
}

export const apiUrl = getApiUrl();