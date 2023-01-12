export const isCanPin = (key = '') => {
  const pinKeyStr = localStorage.getItem('pinKeys');
  if (!pinKeyStr) {
    return false;
  }
  if (pinKeyStr) {
    const pinKeys = JSON.parse(pinKeyStr) || [];
    return pinKeys.includes(key || window.location.href);
  }
};

export const addPinKey = (key = '') => {
  const pinKeyStr = localStorage.getItem('pinKeys');
  if (pinKeyStr) {
    const pinKeys = JSON.parse(pinKeyStr) || [];
    if (!pinKeys.includes(key || window.location.href)) {
      pinKeys.push(key || window.location.href);
      localStorage.setItem('pinKeys', JSON.stringify(pinKeys));
    }
  } else {
    localStorage.setItem('pinKeys', JSON.stringify([key || window.location.href]));
  }
};

export const removePinKey = (key = '') => {
  const pinKeyStr = localStorage.getItem('pinKeys');
  if (!pinKeyStr) {
    return;
  }
  const pinKeys = JSON.parse(pinKeyStr) || [];
  const keys = pinKeys.filter((n: string) => {
    return n !== (key || window.location.href);
  });
  localStorage.setItem('pinKeys', JSON.stringify(keys));
};

export const addPin = (key: string, obj: Record<string, string | number>) => {
  if (!isCanPin(key)) {
    return;
  }
  const pinStr = localStorage.getItem('pin');
  if (pinStr) {
    const pin = JSON.parse(pinStr) || {};
    pin[key || window.location.href] = obj;
    localStorage.setItem('pin', JSON.stringify(pin));
  } else {
    localStorage.setItem(
      'pin',
      JSON.stringify({
        [key || window.location.href]: obj,
      }),
    );
  }
};

export const removePin = (key: string) => {
  const pinStr = localStorage.getItem('pin');
  if (!pinStr) {
    return;
  }
  const pin = JSON.parse(pinStr) || {};
  delete pin[key || window.location.href];
  localStorage.setItem('pin', JSON.stringify(pin));
};

export const getPins = () => {
  const pinStr = localStorage.getItem('pin');
  if (!pinStr) {
    return null;
  }
  const pin = JSON.parse(pinStr) || {};
  return pin;
};

export const getPin = (key = '') => {
  const pinStr = localStorage.getItem('pin');
  if (!pinStr) {
    return { page: 1, pageSize: 20, isEmpty: true };
  }
  const pin = JSON.parse(pinStr) || {};
  return pin[key || window.location.href] || { page: 1, pageSize: 20, isEmpty: true };
};
